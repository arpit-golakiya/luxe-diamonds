"use client"

import { useState } from "react"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import countries from "../../lib/data/countries.json"
import WhatsAppIcon from "../../components/icons/WhatsAppIcon";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        diamondType: "",
        country: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // For Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)

        try {
            const formBody = new URLSearchParams({
                type: "contact",
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                diamondType: formData.diamondType,
                country: formData.country,
                subject: formData.subject,
                message: formData.message,
            })

            await fetch(
                "https://script.google.com/macros/s/AKfycbzMYp_gcnlY1yOUNWLZtJSeA3sEmAz7jQi1c4DvTVhjuagG4oTTRgwwsuQH8bzPvYsMkw/exec",
                {
                    method: "POST",
                    mode: "no-cors", // ✅ KEY FIX
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formBody.toString(),
                }
            )

            // ✅ If fetch didn’t throw, GAS received it
            alert("Thank you! We will connect with you soon.")

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                diamondType: "",
                country: "",
            })

        } catch (err) {
            console.error(err)
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

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
                            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Get in Touch</h2>

                            <div className="space-y-8 text-center">
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <p className="text-muted-foreground flex w-full items-center gap-2 text-center justify-center">
                                        <WhatsAppIcon size={16} className="text-accent" />
                                        <a target="_blank" href="https://wa.me/918487818980?text=Hi%20I%20would%20like%20to%20know%20more" className="hover:text-accent transition">
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
                                        <label className="block text-sm font-semibold mb-2">Requirement Type</label>
                                        <select
                                            name="diamondType"
                                            value={formData.diamondType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-border rounded-lg"
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Lab Grown (CVD) Diamonds">Lab Grown (CVD) Diamonds</option>
                                            <option value="Lab Grown (HPHT) Diamonds">Lab Grown (HPHT) Diamonds</option>
                                            <option value="Natural Diamonds">Natural Diamonds</option>
                                            <option value="Natural Diamonds Jewelry">Custom Jewelry</option>
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
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
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
                                    disabled={isSubmitting}
                                    className={`w-full py-3 font-semibold transition flex items-center justify-center gap-2
        ${isSubmitting
                                        ? "bg-accent/70 cursor-not-allowed"
                                        : "bg-accent hover:bg-accent-dark text-white"
                                    }
    `}
                                >
                                    {isSubmitting && (
                                        <span className="h-5 w-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                                    )}
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map & Office Location Section */}
            <section className="py-20 bg-accent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* 12 column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Office Details */}
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-white">
                                Our Office
                            </h2>

                            <div className="space-y-6 text-white">

                                <div>
                                    <h3 className="font-semibold mb-1">Address</h3>
                                    <p>
                                        Vyas Compound, 201, ASHRAM CHAR RATSA,<br />
                                        Beside AMAR ELECTRONICS,<br />
                                        Bambavadi, Tunki, Katargam,<br />
                                        Surat, Gujarat 395004
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <p className="flex items-center gap-2">
                                        <WhatsAppIcon size={16} className="text-accent" />
                                        <a target="_blank" href="https://wa.me/918487818980?text=Hi%20I%20would%20like%20to%20know%20more" className="transition">
                                            +91 84878 18980
                                        </a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-8">
                            <div className="w-full h-[420px] rounded-xl overflow-hidden border border-white/20">
                                <iframe
                                    title="Ishanta Jewels Location"
                                    src="https://www.google.com/maps?q=Ishanta+Jewels,+Katargam,+Surat&ll=21.2188265,72.8326378&z=9&output=embed"
                                    className="w-full h-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}


// function doPost(e) {
//     const data = JSON.parse(e.postData.contents);
//
//     if (data.type === "contact") {
//         return handleContact(data);
//     }
//
//     if (data.type === "career") {
//         return handleCareer(data);
//     }
//
//     return ContentService.createTextOutput("INVALID");
// }
//
// /* ---------- CONTACT ---------- */
// function handleContact(data) {
//     const sheet = SpreadsheetApp
//         .openById("16tzMNnviMNFD6p3T8bLdIRuj7wMv-b5F5n12o-GX1cg")
//         .getSheetByName("Leads");
//
//     sheet.appendRow([
//         new Date(),
//         data.name,
//         data.email,
//         data.phone,
//         data.diamondType,
//         data.country,
//         data.subject,
//         data.message
//     ]);
//
//     MailApp.sendEmail({
//         to: "info@ishantajewels.com",
//         subject: "New Contact Form Lead",
//         htmlBody: `<p><b>Name:</b> ${data.name}</p><p>${data.message}</p>`
//     });
//
//     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
//         .setMimeType(ContentService.MimeType.JSON);
// }
//
// /* ---------- CAREERS ---------- */
// function handleCareer(data) {
//     const sheet = SpreadsheetApp
//         .openById("1tiF4lg0B5d9ixrUXZOuzh3xkJgaWBTVTKw1ZAuxHiak")
//         .getSheetByName("Careers");
//
//     sheet.appendRow([
//         new Date(),
//         data.fullName,
//         data.email,
//         data.phone,
//         data.position,
//         data.experience,
//         data.message
//     ]);
//
//     MailApp.sendEmail({
//         to: "info@ishantajewels.com",
//         subject: `New Career Application – ${data.position}`,
//         htmlBody: `
//       <h3>New Career Application</h3>
//       <p><b>Name:</b> ${data.fullName}</p>
//       <p><b>Email:</b> ${data.email}</p>
//       <p><b>Phone:</b> ${data.phone}</p>
//       <p><b>Position:</b> ${data.position}</p>
//       <p><b>Experience:</b> ${data.experience}</p>
//       <p><b>Message:</b><br/>${data.message}</p>
//     `
//     });
//
//     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
//         .setMimeType(ContentService.MimeType.JSON);
// }
