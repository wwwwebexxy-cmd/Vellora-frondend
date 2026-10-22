import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import picklePoster from "../../../assets/vellora/pickle-range.jpeg";
import coconutPoster from "../../../assets/vellora/coconut-oil-cold.jpeg";
import kitchenPoster from "../../../assets/vellora/garlic-pickle-product.jpeg";
import "../styles/VelloraVideoSection.css";

const videos = {
    kerala: {
        src: "/vellora-videos/vellora-coconut-oil-story.mp4",
        poster: coconutPoster,
        eyebrow: "Everyday lifestyle",
        title: "Find something beautiful for every day",
        copy: "Discover useful, stylish and thoughtfully selected products for every space, mood and moment.",
    },
    pickle: {
        src: "/vellora-videos/vellora-pickle-story.mp4",
        poster: picklePoster,
        eyebrow: "Curated collections",
        title: "Style made easy",
        copy: "Explore fresh finds across fashion, accessories, home and living, gifts, electronics and more.",
    },
    kitchen: {
        src: "/vellora-videos/vellora-kitchen-story.mp4",
        poster: kitchenPoster,
        eyebrow: "More to explore",
        title: "More than just shopping",
        copy: "Shop smart, live beautiful and enjoy a seamless experience from discovery to delivery.",
    },
};

function BusinessVideo({ video, featured = false }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return undefined;

        const startPlayback = () => {
            videoElement.muted = true;
            videoElement.play().catch(() => {
                // Autoplay can still be blocked by a browser policy.
            });
        };

        if (videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            startPlayback();
        } else {
            videoElement.addEventListener("canplay", startPlayback);
        }

        return () => videoElement.removeEventListener("canplay", startPlayback);
    }, [video.src]);

    return (
        <div className={`vellora-story-video-card ${featured ? "vellora-story-video-card--featured" : ""}`}>
            <div className="vellora-story-video-frame">
                <video
                    ref={videoRef}
                    className="vellora-story-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onPause={(event) => {
                        event.currentTarget.play().catch(() => {
                            // Autoplay can still be blocked by a browser policy.
                        });
                    }}
                    preload="metadata"
                    poster={video.poster}
                >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support video playback.
                </video>
            </div>
            <div className="vellora-story-video-copy">
                <p>{video.eyebrow}</p>
                <h3>{video.title}</h3>
                <span>{video.copy}</span>
            </div>
        </div>
    );
}

function VelloraVideoSection({ compact = false }) {
    return (
        <section
            className={`vellora-video-section ${compact ? "vellora-video-section--contact" : ""}`.trim()}
            aria-labelledby="vellora-video-heading"
        >
            <div className="vellora-story-block">
                <div className="vellora-story-heading">
                    <div>
                        <p className="vellora-video-eyebrow">VELLORA ONLINE STORE</p>
                        <h2 id="vellora-video-heading">Everyday finds. Exceptional style.</h2>
                    </div>
                    <p className="vellora-video-intro">
                        Vellora brings fashion, accessories, home essentials, gifts, electronics and more together in one easy-to-shop destination.
                    </p>
                </div>
                <div className="vellora-story-feature">
                    <BusinessVideo video={videos.kerala} featured />
                    <div className="vellora-story-note">
                        <span className="vellora-story-note-mark" aria-hidden="true">✦</span>
                        <h3>Shop smart. Live beautiful.</h3>
                        <p>
                            Premium quality products, fast and reliable delivery, secure payments and dedicated customer support.
                        </p>
                        <Link to="/about" className="vellora-story-link">Our story <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </div>

            <div className="vellora-story-block vellora-story-block--kitchen">
                <div className="vellora-story-heading">
                    <div>
                        <p className="vellora-video-eyebrow">DISCOVER VELLORA</p>
                        <h2>Premium, modern and classy.</h2>
                    </div>
                    <p className="vellora-video-intro">
                        Find trendy and unique collections selected to fit your lifestyle and make every day feel a little better.
                    </p>
                </div>
                <div className="vellora-story-grid">
                    <BusinessVideo video={videos.pickle} />
                    <BusinessVideo video={videos.kitchen} />
                </div>
            </div>

            <Link to="/shop" className="vellora-video-cta">Shop Vellora products <span aria-hidden="true">→</span></Link>
        </section>
    );
}

export default VelloraVideoSection;
