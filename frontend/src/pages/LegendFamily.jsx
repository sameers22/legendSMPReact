import React, { useState, useEffect } from 'react';

const LegendFamily = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/fetchVideos'); // Ensure this API works
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                if (data && data.videos) {
                    setVideos(data.videos); // Extract videos array correctly
                } else {
                    throw new Error("Invalid response format");
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="legend-family">
            <h1>Legend Family Videos</h1>
            <p>Watch the latest videos using #legendcookhouse from TikTok, Instagram, and YouTube!</p>

            {loading && <p>Loading videos... Please wait.</p>}
            {error && <p style={{ color: 'red' }}>Error fetching videos: {error}</p>}

            <div className="video-grid">
                {videos.length > 0 ? (
                    videos.map((video, index) => (
                        <div key={index} className="video-item">
                            <iframe 
                                src={video.embedUrl} 
                                title={`Legend Video ${index}`} 
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                ) : (
                    !loading && <p>No videos found. Try again later.</p>
                )}
            </div>

            <style jsx>{`
                .legend-family {
                    text-align: center;
                    padding: 2rem;
                    background-color: #f8f8f8;
                }
                .video-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }
                .video-item {
                    background: white;
                    padding: 10px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
                }
                iframe {
                    width: 100%;
                    height: 200px;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default LegendFamily;
