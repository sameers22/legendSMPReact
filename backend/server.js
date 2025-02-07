const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const app = express();
app.use(cors());
app.use(express.json());

const scrapeVideos = async () => {
    const hashtag = 'legendcookhouse';
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    let videos = [];

    try {
        // ✅ Scrape TikTok Videos
        await page.goto(`https://www.tiktok.com/tag/${hashtag}`, { waitUntil: 'domcontentloaded' });
        const tiktokVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a[data-e2e="challenge-video-card"]')).map(link => ({
                embedUrl: `https://www.tiktok.com/embed/${link.href.split('/video/')[1]}`
            }))
        );
        videos.push(...tiktokVideos);
    } catch (error) {
        console.error('TikTok Scraping Failed:', error);
    }

    try {
        // ✅ Scrape Instagram Videos
        await page.goto(`https://www.instagram.com/explore/tags/${hashtag}`, { waitUntil: 'domcontentloaded' });
        const instagramVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a[href*="/reel/"]')).map(link => ({
                embedUrl: `https://www.instagram.com/p/${link.getAttribute('href').split('/reel/')[1]}embed`
            }))
        );
        videos.push(...instagramVideos);
    } catch (error) {
        console.error('Instagram Scraping Failed:', error);
    }

    try {
        // ✅ Scrape YouTube Videos
        await page.goto(`https://www.youtube.com/results?search_query=%23${hashtag}`, { waitUntil: 'domcontentloaded' });
        const youtubeVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a#video-title'))
                .map(link => link.href.match(/v=([^&]+)/)) // Extract Video ID
                .filter(match => match) // Ensure valid IDs
                .map(match => ({ embedUrl: `https://www.youtube.com/embed/${match[1]}` }))
        );
        videos.push(...youtubeVideos);
    } catch (error) {
        console.error('YouTube Scraping Failed:', error);
    }

    await browser.close();

    return videos.length > 0 ? videos : [{ embedUrl: '', message: 'No videos found. Please try again later.' }];
};

// ✅ API Route for Fetching Videos
app.get('/api/scrape-videos', async (req, res) => {
    try {
        const videos = await scrapeVideos();
        res.json({ videos });
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({ error: 'Failed to scrape videos.' });
    }
});

// ✅ Start Server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
