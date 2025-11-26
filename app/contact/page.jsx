"use client"

import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        alert("Thank you for reaching out! We will contact you soon.")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Have questions about our diamonds or jewelry? Our expert team is here to help you find exactly what you're
                        looking for.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-semibold mb-2">Address</h3>
                                    <p className="text-muted-foreground">
                                        123 Diamond Plaza
                                        <br />
                                        New York, NY 10001
                                        <br />
                                        United States
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <p className="text-muted-foreground">
                                        <a href="tel:+12125551234" className="hover:text-accent">
                                            +1 (212) 555-1234
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <p className="text-muted-foreground">
                                        <a href="mailto:info@luxediamonds.com" className="hover:text-accent">
                                            info@luxediamonds.com
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Hours</h3>
                                    <p className="text-muted-foreground">
                                        Monday - Friday: 10am - 6pm
                                        <br />
                                        Saturday: 11am - 5pm
                                        <br />
                                        Sunday: By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                                        placeholder="Your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                                        placeholder="What is this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                                        placeholder="Tell us more..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-accent text-black font-semibold hover:bg-accent-dark transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 bg-surface">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <p className="text-gray-500">Map Integration Placeholder</p>
                </div>
            </section>
        </div>
    )
}
