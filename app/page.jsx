"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Home() {
    const whyChooseRef = useRef(null)
    const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 })

    const collectionsRef = useRef(null)
    const isCollectionsInView = useInView(collectionsRef, { once: true, amount: 0.2 })

    const heroTitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }

    const heroTextVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
    }

    const heroButtonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    const collectionCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
        }),
        hover: { y: -8, transition: { duration: 0.3 } },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
        }),
    }

    const contactCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
        }),
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
        }),
    }

    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/hero_page_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"/>

                {/* Hero Content */}
                <motion.div
                    className="relative z-10 text-center px-4 text-white"
                    initial="hidden"
                    animate="visible"
                    variants={{visible: {transition: {staggerChildren: 0.2}}}}
                >
                    <motion.h1
                        className="text-6xl md:text-7xl font-serif font-bold mb-6 text-balance"
                        variants={heroTitleVariants}
                    >
                        Timeless Elegance
                    </motion.h1>
                    <motion.p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
                              variants={heroTextVariants}>
                        Discover our curated collection of premium diamonds and exquisite jewelry
                    </motion.p>
                    <motion.div className="flex gap-6 justify-center" variants={heroButtonVariants} whileHover="hover">
                        <Link
                            href="/guide"
                            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition"
                        >
                            Learn 4Cs
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust & Certifications Section - ADDED */}
            <section className="py-16 bg-gradient-to-r from-background to-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                            Trusted by Discerning Customers Worldwide
                        </h2>
                        <p className="text-muted-foreground">
                            Certifications and recognitions that guarantee quality and authenticity
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: "✓", title: "GIA Certified", desc: "All diamonds certified by Gemological Institute of America" },
                            { icon: "🛡️", title: "Conflict-Free", desc: "100% ethically sourced diamonds" },
                            { icon: "🏆", title: "30+ Years", desc: "Industry expertise and excellence" },
                            { icon: "💎", title: "ISO 9001", desc: "International quality standards" },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                className="text-center p-4"
                                variants={badgeVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-2">{badge.icon}</div>
                                <h3 className="font-semibold text-sm md:text-base mb-1">{badge.title}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">{badge.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/*/!* Customer Reviews *!/*/}
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
                    {/*    {[*/}
                    {/*        {*/}
                    {/*            name: "Sarah M.",*/}
                    {/*            location: "New York, USA",*/}
                    {/*            text: "Exceptional quality and service. The attention to detail is remarkable.",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            name: "James K.",*/}
                    {/*            location: "California, USA",*/}
                    {/*            text: "Authentic diamonds with proper certifications. Highly recommended!",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            name: "Emma R.",*/}
                    {/*            location: "Texas, USA",*/}
                    {/*            text: "Best experience with a jewelry merchant. Professional and trustworthy.",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*    ].map((review, i) => (*/}
                    {/*        <motion.div*/}
                    {/*            key={i}*/}
                    {/*            className="bg-white p-6 rounded-lg border border-gray-200"*/}
                    {/*            initial={{ opacity: 0, y: 20 }}*/}
                    {/*            whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*            transition={{ duration: 0.6, delay: i * 0.1 }}*/}
                    {/*            viewport={{ once: true }}*/}
                    {/*        >*/}
                    {/*            <div className="mb-3 flex gap-1">*/}
                    {/*                {Array(review.rating)*/}
                    {/*                    .fill(0)*/}
                    {/*                    .map((_, j) => (*/}
                    {/*                        <span key={j} className="text-accent">*/}
                    {/*    ★*/}
                    {/*  </span>*/}
                    {/*                    ))}*/}
                    {/*            </div>*/}
                    {/*            <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>*/}
                    {/*            <p className="font-semibold text-sm">{review.name}</p>*/}
                    {/*            <p className="text-xs text-muted-foreground">{review.location}</p>*/}
                    {/*        </motion.div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-20 bg-background" ref={collectionsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collections</h2>
                        <p className="text-lg text-muted-foreground">Explore our handpicked selection of premium diamonds</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Natural Diamonds */}
                        <motion.div
                            custom={0}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/natural-diamonds" className="group block">
                                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/natural.png"
                                        alt="Natural Diamonds Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Natural Diamonds</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Rare, authentic, and timelessly beautiful diamonds sourced from around the world.
                                </p>
                            </Link>
                        </motion.div>

                        {/* Lab-Grown Diamonds */}
                        <motion.div
                            custom={1}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/lab-grown" className="group block">
                                <div className="relative h-96 bg-blue-200 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/lab_grown.png"
                                        alt="Lab-Grown Diamonds Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Lab-Grown Diamonds</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Ethically created diamonds with the same brilliance and beauty as natural stones.
                                </p>
                            </Link>
                        </motion.div>

                        {/* Diamond Jewelry */}
                        <motion.div
                            custom={2}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/jewelry" className="group block">
                                <div className="relative h-96 bg-yellow-100 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/diamond_jwellary.png"
                                        alt="Diamond Jewelry Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Diamond Jewelry</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Exquisitely crafted pieces featuring our finest diamonds in timeless designs.
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-surface" ref={whyChooseRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isWhyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose LUXE
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Certified Quality",
                                desc: "Every diamond comes with certifications from leading gemological institutes, guaranteeing authenticity and quality.",
                            },
                            {
                                title: "Ethical Sourcing",
                                desc: "We're committed to responsible practices, ensuring all diamonds are ethically sourced and conflict-free.",
                            },
                            {
                                title: "Expert Craftsmanship",
                                desc: "Our master artisans create bespoke pieces tailored to your unique vision and preferences.",
                            },
                            {
                                title: "Lifetime Support",
                                desc: "We stand behind our jewelry with lifetime maintenance, cleaning, and personalized customer service.",
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4"
                                variants={featureVariants}
                                initial="hidden"
                                animate={isWhyChooseInView ? "visible" : "hidden"}
                                custom={i}
                            >
                                <div className="text-accent text-3xl flex-shrink-0">◆</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-background">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your Perfect Diamond?</h2>
                        <p className="text-lg text-muted-foreground">
                            Let our experts help you discover a diamond as unique as your love story.
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Phone Card */}
                        <motion.a
                            href="tel:+918487818980"
                            className="group bg-white border-2 border-gray-100 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition duration-300"
                            custom={0}
                            variants={contactCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-accent text-5xl mb-4 group-hover:scale-110 transition duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                ☎
                            </motion.div>
                            <p className="text-gray-600 text-sm mb-2">Call us</p>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition">
                                +91 84878 18980
                            </h3>
                        </motion.a>

                        {/* Email Card */}
                        <motion.a
                            href="mailto:info@luxediamonds.com"
                            className="group bg-white border-2 border-gray-100 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition duration-300"
                            custom={1}
                            variants={contactCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-accent text-5xl mb-4 group-hover:scale-110 transition duration-300"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                            >
                                ✉
                            </motion.div>
                            <p className="text-gray-600 text-sm mb-2">Email us</p>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition break-all">
                                info@luxediamonds.com
                            </h3>
                        </motion.a>
                    </div>

                    {/* Get in Touch Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-accent text-black font-semibold text-lg hover:bg-accent-dark transition"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
