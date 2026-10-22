import "../styles/About.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import velloraLogo from "../../../assets/vellora/vellora-logo.jpeg";
import velloraBrandSheet from "../../../assets/vellora/vellora-brand-sheet.jpeg";
import lifestyleVibe from "../../../assets/vellora_lifestyle_vibe.png";

const About = () => {
    const navigate = useNavigate();

    return (
        <main className="about-modern-wrapper">
            <section className="about-modern-hero about-fade">
                <div className="hero-text-content">
                    <span className="hero-eyebrow">THE VELLORA STORY</span>
                    <h1 className="hero-display">Everyday finds with <span className="hero-italic">exceptional style.</span></h1>
                    <p className="hero-subtext">Vellora is your one-stop online store for everything you love — from fashion and accessories to home essentials, gifts, electronics and more.</p>
                    <button className="hero-modern-btn" onClick={() => navigate("/shop")}>Explore our collections <span className="arrow">→</span></button>
                </div>
                <div className="hero-image-content">
                    <div className="image-frame vellora-about-image-frame"><img src={velloraBrandSheet} alt="Vellora online store collection" /></div>
                </div>
            </section>

            <section className="about-modern-story about-fade">
                <div className="story-left">
                    <div className="story-sticky">
                        <h2>More than just shopping.</h2>
                        <p>Vellora brings together stylish, high-quality products that fit your lifestyle — from everyday essentials to thoughtful gifts and standout finds.</p>
                        <p>We focus on convenience, trust and exceptional service, so every collection feels easy to discover and enjoyable to bring home.</p>
                        <div className="story-highlights">
                            <div className="highlight-box"><span className="highlight-title">Premium quality</span><span className="highlight-text">Curated products selected for style, usefulness and everyday value.</span></div>
                            <div className="highlight-box"><span className="highlight-title">Made for your lifestyle</span><span className="highlight-text">Fashion, accessories, home and living, gifts, electronics and more.</span></div>
                        </div>
                    </div>
                </div>
                <div className="story-right"><img src={lifestyleVibe} alt="Vellora lifestyle collection" className="story-vibe-img" /></div>
            </section>

            <section className="about-human-values about-fade">
                <div className="values-header">
                    <img className="about-brand-mark" src={velloraLogo} alt="Vellora Online Store" />
                    <h2>Why choose Vellora?</h2>
                    <p>Premium, modern and classy — with everyday value at the heart of every collection.</p>
                </div>
                <div className="values-grid">
                    <div className="value-card"><FaLeaf className="value-icon" /><h3>Premium quality</h3><p>Discover products chosen to bring style, convenience and confidence to your everyday life.</p></div>
                    <div className="value-card"><FaShieldAlt className="value-icon" /><h3>Fast &amp; reliable delivery</h3><p>Shop with peace of mind through a smooth online experience and dependable customer care.</p></div>
                    <div className="value-card"><FaTiktok className="value-icon" /><h3>Trendy &amp; unique collections</h3><p>Follow Vellora for new finds, fresh inspiration and more than just shopping.</p><a className="about-social-link" href="https://www.tiktok.com/@vellora707" target="_blank" rel="noreferrer">@vellora707 ↗</a></div>
                </div>
            </section>

            <section className="about-modern-quote about-fade">
                <blockquote>“Shop smart. Live beautiful.”</blockquote>
                <div className="quote-author">— Vellora Online Store</div>
                <Link to="/contact" className="about-contact-link">Talk to Vellora <span aria-hidden="true">→</span></Link>
            </section>
        </main>
    );
};

export default About;
