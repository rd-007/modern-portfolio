import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaLocationDot,
    FaPaperPlane,
    FaPhone,
    FaPinterest,
    FaRegEnvelope,
    FaSpotify,
    FaTelegram,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);

            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Have something in mind or wanna collaborate? Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4"> Contact Info</h3>

                        <div className="space-y-4 max-w-xs mx-auto">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <FaPhone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-center">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+917776075555"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 77760 75555
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <FaRegEnvelope className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-center">
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:rajitdakhane007@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        rajitdakhane007@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <FaLocationDot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-center">
                                    <h4 className="font-medium"> Location</h4>
                                    <span className="text-muted-foreground">
                                        Manmad, Maharashtra, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium mb-3 text-center"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://linkedin.com/in/rajit0311" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/rd-007" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://wa.me/919370038435" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://instagram.com/being_rsd" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://x.com/rajitsd96" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter />
                                </a>
                                <a href="https://t.me/being_rsd" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </a>
                                <a href="https://open.spotify.com/user/0qvok5kcspe3yrsbp121kds0v" target="_blank" rel="noopener noreferrer">
                                    <FaSpotify />
                                </a>
                                <a href="https://in.pinterest.com/rajitdakhane/" target="_blank" rel="noopener noreferrer">
                                    <FaPinterest />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-card p-6 rounded-lg shadow-xs space-y-4"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-center"> Send a Message</h3>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Rajit Dakhane..."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="rajitsd96@gmail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <FaPaperPlane size={16} />
                        </button>

                        {submitted && (
                            <p className="text-center text-sm text-primary">
                                Message sent! Will get back to you soon.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};