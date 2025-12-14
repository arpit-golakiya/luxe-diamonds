"use client"

import { useState } from "react"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        diamondType: "",
        country: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // For Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbywjUQkmtSO6DeRgIz9AxPd4zn2pimv6XpCoVlu7FC-v-5eOcN3yKp4ZWAfoReuK7959g/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === "success") {
                alert("Thank you! We will connect with you soon.");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    diamondType: "",
                    country: "",
                });
            } else {
                alert("Error submitting form!");
            }
        } catch (error) {
            alert("Failed to submit!");
        }
    };

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Have questions about our diamonds or jewelry? Our expert team is here to help you find exactly
                        what you're looking for.
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
                                        201 Vyas Compound ASHRAM CHAR RATSA, <br/>beside AMAR ELECTRONICS, <br/>Bambavadi, Tunki, Katargam,<br/>Surat 394101
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <p className="text-muted-foreground">
                                        <a href="tel:+918487818980" className="hover:text-accent">
                                            +91 84878 18980
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <p className="text-muted-foreground">
                                        <a href="mailto:info@ishantajewels.com" className="hover:text-accent">
                                            info@ishantajewels.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg"
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
                                            className="w-full px-4 py-2 border border-border rounded-lg"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone</label>
                                    <PhoneInput
                                        defaultCountry="us"
                                        value={formData.phone}
                                        onChange={(value) =>
                                            setFormData((prev) => ({...prev, phone: value}))
                                        }
                                        className="custom-phone-input w-full"
                                    />
                                </div>

                                {/* Diamond Type + Country in one row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Diamond Type</label>
                                        <select
                                            name="diamondType"
                                            value={formData.diamondType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg"
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Lab Grown (CVD)">Lab Grown (CVD)</option>
                                            <option value="Lab Grown (HPHT)">Lab Grown (HPHT)</option>
                                            <option value="Natural">Natural</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Country</label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg"
                                        >
                                            <option value="">Select Country</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="Canada">Canada</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-lg"
                                        placeholder="What is this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-lg"
                                        placeholder="Tell us more..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
