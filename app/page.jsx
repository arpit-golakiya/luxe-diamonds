"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [videoVisible, setVideoVisible] = useState(true)

    return (
        <>
            {/* Hero Section with Video Background */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    {videoVisible ? (
                        <div className="w-full h-full bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white rounded-full mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                                <p className="text-sm">Background Video Effect</p>
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 text-white">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-balance">Timeless Elegance</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Discover our curated collection of premium diamonds and exquisite jewelry
                    </p>
                    <div className="flex gap-6 justify-center">
                        <Link
                            href="/products/natural-diamonds"
                            className="px-8 py-3 bg-accent text-black font-semibold hover:bg-accent-dark transition"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/guide"
                            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition"
                        >
                            Learn 4Cs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collections</h2>
                        <p className="text-lg text-muted-foreground">Explore our handpicked selection of premium diamonds</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Natural Diamonds */}
                        <Link href="/products/natural-diamonds" className="group">
                            <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden mb-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 group-hover:from-black/60 transition">
                                    <h3 className="text-2xl font-serif font-bold text-white">Natural Diamonds</h3>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                Rare, authentic, and timelessly beautiful diamonds sourced from around the world.
                            </p>
                        </Link>

                        {/* Lab-Grown Diamonds */}
                        <Link href="/products/lab-grown" className="group">
                            <div className="relative h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg overflow-hidden mb-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 group-hover:from-black/60 transition">
                                    <h3 className="text-2xl font-serif font-bold text-white">Lab-Grown Diamonds</h3>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                Ethically created diamonds with the same brilliance and beauty as natural stones.
                            </p>
                        </Link>

                        {/* Diamond Jewelry */}
                        <Link href="/products/jewelry" className="group">
                            <div className="relative h-96 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg overflow-hidden mb-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 group-hover:from-black/60 transition">
                                    <h3 className="text-2xl font-serif font-bold text-white">Diamond Jewelry</h3>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                Exquisitely crafted pieces featuring our finest diamonds in timeless designs.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Why Choose LUXE</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-4">
                            <div className="text-accent text-3xl">◆</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                                <p className="text-muted-foreground">
                                    Every diamond comes with certifications from leading gemological institutes, guaranteeing authenticity
                                    and quality.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-accent text-3xl">◆</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
                                <p className="text-muted-foreground">
                                    We're committed to responsible practices, ensuring all diamonds are ethically sourced and
                                    conflict-free.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-accent text-3xl">◆</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                                <p className="text-muted-foreground">
                                    Our master artisans create bespoke pieces tailored to your unique vision and preferences.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-accent text-3xl">◆</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Lifetime Support</h3>
                                <p className="text-muted-foreground">
                                    We stand behind our jewelry with lifetime maintenance, cleaning, and personalized customer service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your Perfect Diamond?</h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Let our experts help you discover a diamond as unique as your love story.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-accent text-black font-semibold text-lg hover:bg-accent-dark transition"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    )
}
