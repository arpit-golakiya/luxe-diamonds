"use client"

import { useState } from "react"
import {PhoneInput} from "react-international-phone";
import "react-international-phone/style.css"
import ExperienceSelect from "@/components/ExperienceSelect";
import PositionSelect from "@/components/PositionSelect";
import {toast, Toaster} from "sonner";

export default function Careers() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [selectedPosition, setSelectedPosition] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            resume: e.target.files[0],
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isSubmitting) return
        setIsSubmitting(true)

        try {
            const formBody = new URLSearchParams({
                type: "career",
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                position: formData.position,
                experience: formData.experience,
                message: formData.message,
            })

            await fetch(
                "https://script.google.com/macros/s/AKfycbzMYp_gcnlY1yOUNWLZtJSeA3sEmAz7jQi1c4DvTVhjuagG4oTTRgwwsuQH8bzPvYsMkw/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formBody.toString(),
                }
            )

            toast.success("Application submitted successfully!", {
                description: "We will connect with you soon.",
            });

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                position: "",
                experience: "",
                resume: null, // kept for UI only
                message: "",
            })

        } catch (error) {
            console.error(error)
            toast.error("Submission failed", {
                description: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false)
        }
    }


    const jobOpenings = [
        {
            id: 1,
            title: "Senior Diamond Specialist",
            department: "Sales & Expertise",
            location: "Surat, Gujarat",
            type: "Full-time",
            description:
                "Lead our premium diamond consultation team with your expertise in the 4Cs and customer service excellence.",
            requirements: ["5+ years in luxury jewelry", "Expert knowledge of diamonds", "Exceptional communication skills"],
        },
        {
            id: 2,
            title: "Jewelry Designer",
            department: "Design & Innovation",
            location: "Surat, Gujarat",
            type: "Full-time",
            description: "Create stunning jewelry designs that showcase our premium diamonds with creativity and precision.",
            requirements: ["Portfolio of jewelry designs", "CAD proficiency", "Knowledge of precious metals"],
        },
        {
            id: 3,
            title: "Diamond Procurement Specialist",
            department: "Operations",
            location: "Surat, Gujarat",
            type: "Full-time",
            description:
                "Source and evaluate premium diamonds from suppliers worldwide, ensuring quality and ethical standards.",
            requirements: ["Diamond grading certification", "Supply chain experience", "Ethical sourcing knowledge"],
        },
        {
            id: 4,
            title: "Customer Experience Manager",
            department: "Customer Service",
            location: "Surat, Gujarat",
            type: "Full-time",
            description: "Build and lead a world-class customer service team that exceeds expectations in luxury retail.",
            requirements: ["3+ years in customer service leadership", "Luxury retail experience", "Team management skills"],
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">Join Our Team</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        At Ishanta Jewels, we're passionate about creating timeless elegance and exceptional experiences. We're
                        looking for talented individuals who share our commitment to excellence and craftsmanship.
                    </p>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Join Ishanta Jewels?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "✨",
                                title: "Excellence",
                                description: "Work with the finest diamonds and jewelry in the industry",
                            },
                            {
                                icon: "🚀",
                                title: "Growth",
                                description: "Continuous learning opportunities and career advancement",
                            },
                            {
                                icon: "👥",
                                title: "Team",
                                description: "Collaborative environment with passionate professionals",
                            },
                            {
                                icon: "💎",
                                title: "Legacy",
                                description: "Be part of creating timeless pieces and memories",
                            },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition"
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold mb-12">Current Opportunities</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className="p-8 bg-card rounded-lg border border-border hover:border-accent/50 transition cursor-pointer"
                                onClick={() => setSelectedPosition(selectedPosition === job.id ? null : job.id)}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                        <p className="text-accent font-medium">{job.department}</p>
                                    </div>
                                    <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">{job.type}</span>
                                </div>

                                <p className="text-muted-foreground mb-4">📍 {job.location}</p>
                                <p className="text-foreground mb-6">{job.description}</p>

                                {selectedPosition === job.id && (
                                    <div className="mt-6 pt-6 border-t border-border">
                                        <h4 className="font-semibold mb-3">Requirements:</h4>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                                    <span className="text-accent mt-1">•</span>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold mb-4">Apply Now</h2>
                    <p className="text-muted-foreground mb-12">
                        Submit your application and we'll get back to you within 5 business days.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-background"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-background"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Years of Experience *
                                </label>

                                <ExperienceSelect
                                    value={formData.experience}
                                    onChange={(value) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            experience: value,
                                        }))
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Position Interested In *
                                </label>

                                <PositionSelect
                                    value={formData.position}
                                    jobOpenings={jobOpenings}
                                    onChange={(value) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            position: value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
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

                        <div>
                            <label className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-background resize-none"
                                placeholder="Tell us why you'd be a great fit for Ishanta Jewels..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 font-semibold rounded-lg transition flex items-center justify-center gap-2
        ${isSubmitting
                                ? "bg-accent/70 cursor-not-allowed"
                                : "bg-accent text-accent-foreground hover:opacity-90"
                            }
    `}
                        >
                            {isSubmitting && (
                                <span className="h-5 w-5 border-2 border-accent-foreground/40 border-t-accent-foreground rounded-full animate-spin"></span>
                            )}
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>

                    </form>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Culture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Values First</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We believe in integrity, excellence, and sustainability. Every piece we create tells a story of
                                craftsmanship and commitment to quality. Our team is built on shared values of ethical practices and
                                customer-first approach.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Benefits & Perks</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Competitive salary and bonuses
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Comprehensive health insurance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Professional development programs
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Flexible work arrangements
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Employee discount on collections
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-accent text-accent-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Ready to Shine?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Have questions? Reach out to our HR team at info@ishantajewels.com
                    </p>
                    <a
                        href="mailto:info@ishantajewels.com"
                        className="inline-block px-8 py-3 bg-accent-foreground text-accent font-semibold rounded-lg hover:opacity-90 transition"
                    >
                        Contact HR
                    </a>
                </div>
            </section>
        </div>
    )
}
