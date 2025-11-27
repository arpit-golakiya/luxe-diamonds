"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export default function About() {
    const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.2, triggerOnce: true })
    const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.2, triggerOnce: true })
    const { ref: expertiseRef, inView: expertiseInView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <div className="min-h-screen">
            <motion.section
                className="py-20 bg-surface"
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
                        About LUXE Diamonds
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        For over a decade, we've been dedicated to bringing the finest diamonds and jewelry to discerning customers
                        worldwide.
                    </motion.p>
                </div>
            </motion.section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        ref={storyRef}
                        initial={{ opacity: 0 }}
                        animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                LUXE Diamonds was founded with a single mission: to make premium diamonds accessible without
                                compromising on quality or ethics. We believe that every person deserves to own a piece of timeless
                                beauty.
                            </p>
                            <p className="text-lg text-muted-foreground mb-4">
                                Our journey began with a passion for gemstones and a commitment to transparency. Today, we work directly
                                with certified suppliers and master craftspeople to bring you diamonds and jewelry that exceed
                                expectations.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                From natural diamonds to lab-grown alternatives, we offer choices that align with your values and
                                preferences.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-120 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image src="/about_us.png" alt="About LUXE Diamonds" fill className="object-cover" priority />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl font-serif font-bold text-center mb-16"
                        ref={valuesRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Values
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={valuesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-background p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="text-accent text-4xl mb-4">⬩</div>
                            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                            <p className="text-muted-foreground">
                                Complete transparency in all our dealings, from sourcing to pricing.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-background p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="text-accent text-4xl mb-4">◇</div>
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-muted-foreground">We maintain the highest standards in quality and craftsmanship.</p>
                        </motion.div>
                        <motion.div
                            className="bg-background p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="text-accent text-4xl mb-4">◆</div>
                            <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
                            <p className="text-muted-foreground">Ethical sourcing and sustainable practices guide every decision.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl font-serif font-bold text-center mb-16"
                        ref={expertiseRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center"
                        initial="hidden"
                        animate={expertiseInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <motion.div
                                className="text-5xl font-bold text-accent mb-2"
                                whileInView={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                25+
                            </motion.div>
                            <p className="text-lg text-muted-foreground">Years of Combined Experience</p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <motion.div
                                className="text-5xl font-bold text-accent mb-2"
                                whileInView={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                10K+
                            </motion.div>
                            <p className="text-lg text-muted-foreground">Happy Customers Worldwide</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
