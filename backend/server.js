const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());
app.use(express.json());

const scrapeVideos = async () => {
    try {
        const hashtag = 'legendcookhouse';
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36');

        // ✅ Scrape TikTok Videos
        await page.goto(`https://www.tiktok.com/tag/${hashtag}`, { waitUntil: 'networkidle2' });
        const tiktokVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a[data-e2e="challenge-video-card"]')).map(link => ({
                embedUrl: link.href
            }))
        );

        // ✅ Scrape Instagram Videos (May require login)
        await page.goto(`https://www.instagram.com/explore/tags/${hashtag}`, { waitUntil: 'networkidle2' });
        const instagramVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a[href*="/reel/"]')).map(link => ({
                embedUrl: `https://www.instagram.com${link.getAttribute('href')}`
            }))
        );

        // ✅ Scrape YouTube Videos
        await page.goto(`https://www.youtube.com/results?search_query=%23${hashtag}`, { waitUntil: 'networkidle2' });
        const youtubeVideos = await page.evaluate(() =>
            Array.from(document.querySelectorAll('a#video-title')).map(link => ({
                embedUrl: `https://www.youtube.com/embed/${new URL(link.href).searchParams.get('v')}`
            }))
        );

        await browser.close();
        return [...tiktokVideos, ...instagramVideos, ...youtubeVideos];
    } catch (error) {
        console.error('Scraping error:', error);
        return [];
    }
};

// ✅ API Route to Fetch Videos
app.get('/api/scrape-videos', async (req, res) => {
    const videos = await scrapeVideos();
    if (videos.length > 0) {
        res.json({ videos });
    } else {
        res.status(500).json({ error: 'Failed to scrape videos' });
    }
});

// ✅ Root Route
app.get('/', (req, res) => {
    res.send('Backend is running with authentication & video scraping');
});

// ✅ Start Server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
