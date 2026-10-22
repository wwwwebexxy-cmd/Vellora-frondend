import { useState } from "react";
import "./../Contact.css"
import { getAuthValue } from "../features/auth/authUtils";
import { CONTACT_WHATSAPP_DISPLAY_NUMBER, CONTACT_WHATSAPP_NUMBER } from "../config/contact";

const ContactUs = () => {
    const [formData, setFormData] = useState(() => ({
        name: getAuthValue("first_name"),
        email: getAuthValue("email"),
        phone: "",
        subject: "",
        message: "",
    }));

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendWhatsApp = (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const text = `Hello Vellora Team,

Name: ${name}

Email: ${email}

Phone: ${phone}

Subject: ${subject}

Message:
${message}

Thank you.`;

        const whatsappUrl = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="contact-page">

            <div className="contact-header">

                <span className="contact-tag">
                    CONTACT US
                </span>

                <h1>
                    Everyday finds. Exceptional style.
                </h1>

                <p>
                    Have a question about fashion, accessories, home and living, gifts, electronics or an order?
                    Fill out the form below and send us a message directly on WhatsApp.
                </p>

            </div>

            <div className="contact-container">

                {/* Left */}

                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <div className="info-box">

                        <h4>Our Address</h4>

                        <p>
                            Al Shamshi Building, Zurff Industrial Area, Ajman, United Arab Emirates
                        </p>

                    </div>

                    <div className="info-box">

                        <h4>WhatsApp / Contact</h4>

                        <a href={`https://wa.me/${CONTACT_WHATSAPP_NUMBER}`}>{CONTACT_WHATSAPP_DISPLAY_NUMBER}</a>

                    </div>

                    <div className="info-box">

                        <h4>Follow Vellora</h4>

                        <p>Find more everyday finds on TikTok: <a href="https://www.tiktok.com/@vellora707" target="_blank" rel="noreferrer">@vellora707</a></p>

                    </div>

                </div>

                {/* Right */}

                <form
                    className="contact-form"
                    onSubmit={sendWhatsApp}
                >

                    <div className="input-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />



                    </div>

                    <div className="input-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <label>
                            Phone Number (optional)
                        </label>

                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <label>
                            Subject
                        </label>

                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select a Subject
                            </option>

                            <option>
                                Product Enquiry
                            </option>

                            <option>
                                Order Status
                            </option>

                            <option>
                                Shipping & Delivery
                            </option>

                            <option>
                                Returns & Exchanges
                            </option>

                            <option>
                                Payment Issue
                            </option>

                            <option>
                                Size & Fit Assistance
                            </option>

                            <option>
                                General Enquiry
                            </option>

                            <option>
                                Collaboration
                            </option>

                            <option>
                                Feedback & Suggestions
                            </option>

                        </select>

                    </div>

                    <div className="input-group">

                        <label>
                            Message
                        </label>

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className="whatsapp-btn"
                        type="submit"
                    >

                            Send via WhatsApp →

                    </button>

                </form>

            </div>

        </div>
    );
};

export default ContactUs;
