"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export default function DiamondJewelry() {
    const { ref: offeringsRef, inView: offeringsInView } = useInView({ threshold: 0.2, triggerOnce: true })

    const offerings = [
        "Engagement Rings, Earrings, Necklaces, Tennis Bracelets, Studs, and more.",
        "Natural Diamonds & Lab Grown Diamond Jewelry",
        "In all Precious Metals like Gold, Silver, Platinum.",
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <motion.section
                className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 text-balance text-center leading-tight">
                            Diamond Jewelry
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-center w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Diamond jewelry is renowned for its timeless appeal and enduring beauty & Luxury. Regardless of fashion
                        trends or changing styles, diamonds remain a symbol of sophistication and refinement, making them suitable
                        for any occasion or outfit.
                    </motion.p>
                </div>
            </motion.section>

            <motion.section
                className="pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-lg overflow-hidden shadow-lg bg-black"
                    >
                        <img
                            src="/jewelry_hero_image.png"
                            alt="Exquisite diamond jewelry necklace"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Offerings Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        ref={offeringsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 sm:mb-12">
                            Our Offerings are as follows:
                        </h2>

                        <motion.div
                            className="space-y-4 sm:space-y-5"
                            initial="hidden"
                            animate={offeringsInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            {offerings.map((offering, index) => (
                                <motion.div key={index} className="flex gap-3 sm:gap-4 items-start" variants={itemVariants}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6">
                                            <span className="text-primary text-lg sm:text-xl">◇</span>
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{offering}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Additional Information */}
                    <motion.div
                        className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                            Ishanta Jewels presents premium custom jewelry to B2B customers across the globe as per their requirements
                            & requests, please contact our representative for more information on it.
                        </p>
                        <motion.a
                            href="https://wa.me/918487818980?text=Hi%20I%20would%20like%20to%20know%20more"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Custom Design
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
