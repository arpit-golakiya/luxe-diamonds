"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
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

const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export default function Guide() {
    const { ref: guideRef, inView: guideInView } = useInView({ threshold: 0.2, triggerOnce: true })
    const { ref: chartsRef, inView: chartsInView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <div className="min-h-screen">
            <motion.section
                className="py-16 bg-surface"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The 4C Guide
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Understand what makes a diamond special. Learn about Carat, Cut, Color, and Clarity—the four key factors
                        that determine a diamond's quality and value.
                    </motion.p>
                </div>
            </motion.section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="space-y-16"
                        ref={guideRef}
                        initial="hidden"
                        animate={guideInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Carat */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div
                                className="relative h-72 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/carat_wight.png" alt="Carat Weight" fill className="object-cover" priority />
                            </motion.div>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Carat Weight</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Carat weight measures the mass of a diamond. One carat equals 200 milligrams. While heavier diamonds
                                    are rarer and generally more valuable, two diamonds of equal carat weight can have significantly
                                    different values based on their cut, color, and clarity.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Measured in carats (ct)</li>
                                    <li>• 1 carat = 100 points</li>
                                    <li>• Price increases exponentially with carat weight</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Cut */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Cut</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Cut refers to how well a diamond's facets interact with light. It's often considered the most
                                    important of the 4Cs because it directly affects the diamond's brilliance and sparkle. A well-cut
                                    diamond will reflect light beautifully.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Ideal, Excellent, Very Good, Good, Fair, Poor</li>
                                    <li>• Affects light reflection and sparkle</li>
                                    <li>• Most impactful on visual beauty</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="relative h-72 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/cut_image.png" alt="Diamond Cut" fill className="object-cover" priority />
                            </motion.div>
                        </motion.div>

                        {/* Color */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div
                                className="relative h-72 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/color.png" alt="Diamond Color" fill className="object-cover" priority />
                            </motion.div>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Color</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Color in diamonds is graded on a scale from D (colorless) to Z (light color). Colorless diamonds are
                                    the most valuable. Most diamonds on the D-Z scale appear colorless to the naked eye, with the
                                    differences visible only under magnification.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Graded D (colorless) to Z (light color)</li>
                                    <li>• Most differences visible only under magnification</li>
                                    <li>• Affects rarity and price</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Clarity */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Clarity</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Clarity refers to the absence of inclusions and blemishes in a diamond. It's graded on a scale from
                                    Flawless to Included. Most diamonds contain some internal or external characteristics that don't
                                    affect their beauty to the naked eye.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Flawless (FL) to Included (I)</li>
                                    <li>• Many inclusions invisible to naked eye</li>
                                    <li>• Significantly impacts price</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="relative h-72 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/clarity.png" alt="Diamond Clarity" fill className="object-cover" priority />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl font-serif font-bold text-center mb-12"
                        ref={chartsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Understanding Diamond Grades
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        animate={chartsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-background p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Cut Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p>🔷 Ideal - Maximum light return and brilliance</p>
                                <p>🔶 Excellent - Exceptional light performance</p>
                                <p>🔶 Very Good - High-quality appearance</p>
                                <p>🔷 Good - Noticeable light performance</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-background p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Color Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p>D, E, F - Colorless (Premium)</p>
                                <p>G, H, I, J - Near Colorless</p>
                                <p>K, L, M - Faint Color</p>
                                <p>N-Z - Light to Fancy Color</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="py-20 bg-background"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="text-4xl font-serif font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Find Your Perfect Diamond?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Use your knowledge of the 4Cs to explore our collection and find the perfect stone.
                    </motion.p>
                    <motion.div
                        className="flex gap-6 justify-center flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-8 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Shop Diamonds
                        </motion.button>
                        <motion.button
                            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}
