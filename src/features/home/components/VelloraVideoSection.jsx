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
        eyebrow: "Traditional coconut goodness",
        title: "From Kerala coconuts to every home",
        copy: "Vellora coconut oil is prepared with care and packed in Kannur, Kerala — bringing a familiar taste and trusted quality to everyday cooking.",
    },
    pickle: {
        src: "/vellora-videos/vellora-pickle-story.mp4",
        poster: picklePoster,
        eyebrow: "Homemade goodness",
        title: "Pickle, jar by jar",
        copy: "Bold Kerala flavours made to bring rice, snacks, and everyday meals alive.",
    },
    kitchen: {
        src: "/vellora-videos/vellora-kitchen-story.mp4",
        poster: kitchenPoster,
        eyebrow: "Made with care",
        title: "A taste of our kitchen",
        copy: "Simple ingredients, honest recipes, and the warmth of food prepared with patience.",
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
                        <p className="vellora-video-eyebrow">MADE IN KERALA</p>
                        <h2 id="vellora-video-heading">Rooted here. Made for every home.</h2>
                    </div>
                    <p className="vellora-video-intro">
                        From our production and packaging unit in Kannur, Vellora brings Kerala-made oils and pickles to your table.
                    </p>
                </div>
                <div className="vellora-story-feature">
                    <BusinessVideo video={videos.kerala} featured />
                    <div className="vellora-story-note">
                        <span className="vellora-story-note-mark" aria-hidden="true">✦</span>
                        <h3>Nature&apos;s goodness delivered</h3>
                        <p>
                            Honest ingredients, careful preparation, and the taste of a business built around real food and real families.
                        </p>
                        <Link to="/about" className="vellora-story-link">Our story <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </div>

            <div className="vellora-story-block vellora-story-block--kitchen">
                <div className="vellora-story-heading">
                    <div>
                        <p className="vellora-video-eyebrow">FROM OUR KITCHEN</p>
                        <h2>Made with care. Shared with love.</h2>
                    </div>
                    <p className="vellora-video-intro">
                        Watch the flavours behind Vellora&apos;s homemade pickle collection and coconut oil range.
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
