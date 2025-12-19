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
    const [craftsmanshipRef, craftsmanshipInView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [promiseRef, promiseInView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <div className="min-h-screen">
            <motion.section
                className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/about_us_hero.jpeg"
                    alt="Premium Diamonds by Ishanta Jewels"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex h-full items-start pt-20 md:pt-28">
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <motion.h1
                                    className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
                                >
                                    Ishanta Jewels
                                </motion.h1>

                                <motion.p
                                    className="text-lg md:text-2xl text-gray-200 max-w-2xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                    Crafting timeless elegance through premium diamonds and exceptional jewelry.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
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
                                Ishanta Jewels Pvt. Ltd. is a distinguished manufacturer and wholesaler specializing in premium custom
                                diamond jewelry and an extensive portfolio of finely crafted diamonds in all shapes and sizes.
                            </p>
                            <p className="text-lg text-muted-foreground mb-4">
                                Founded in 2010 by visionary entrepreneurs, Ishanta Jewels was established with a singular philosophy:
                                to deliver exquisite craftsmanship with exceptional efficiency. Built on precision, trust, and refined
                                artistry, the brand has evolved into a respected global partner for B2B clients, offering both certified
                                and non-certified diamonds, alongside exclusive designer diamond jewelry.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                With a dedicated international sales team, Ishanta Jewels ensures responsive service and seamless
                                coordination, enabling clients worldwide to experience reliability and consistency at every stage of
                                engagement.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[600px] rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image src="/about_us.jpg" alt="Ishanta Jewels" fill className="object-cover" priority />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        ref={craftsmanshipRef}
                        initial={{ opacity: 0 }}
                        animate={craftsmanshipInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Image on the left */}
                        <motion.div
                            className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={craftsmanshipInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src="/craftsmanship.png"
                                alt="Craftsmanship - Diamond setting with precision tools"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Text content on the right */}
                        <motion.div
                            className="order-1 md:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={craftsmanshipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-serif font-bold mb-6">Craftsmanship & Manufacturing Excellence</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Ishanta Jewels operates a state-of-the-art in-house manufacturing facility for loose diamonds and fine
                                diamond jewelry in Surat, the diamond capital of the world. This integrated infrastructure allows us to
                                maintain uncompromising quality standards while offering competitive pricing—delivering superior value
                                that distinguishes us among leading suppliers from India and across global markets.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Each creation reflects a harmonious blend of advanced technology, master craftsmanship, and meticulous
                                attention to detail.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        ref={promiseRef}
                        initial={{ opacity: 0 }}
                        animate={promiseInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Text content on the left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={promiseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-serif font-bold mb-6">Our Promise</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                At Ishanta Jewels, our clients are more than partners—they are an extension of our legacy. Ethical
                                business practices, transparency, and integrity form the foundation of every relationship we build.
                                Every order undergoes rigorous quality assurance, ensuring that each piece meets the highest standards
                                of excellence.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Choosing Ishanta Jewels is a commitment to refined quality, trust, and enduring value.
                            </p>
                        </motion.div>

                        {/* Image on the right */}
                        <motion.div
                            className="relative h-[400px] rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={promiseInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image src="/our_promise.png" alt="Our Promise - Quality craftsmanship" fill className="object-cover" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground">
                            To create and supply ethically sourced diamonds and fine jewelry that embody timeless elegance and
                            superior craftsmanship. We are committed to exceeding expectations through unparalleled service,
                            transparent operations, and sustainable practices—so that every piece crafted by Ishanta Jewels becomes a
                            lasting symbol of brilliance, responsibility, and distinction. 💎
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-background">
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
                            className="bg-surface p-8 rounded-lg"
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
                            className="bg-surface p-8 rounded-lg"
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="text-accent text-4xl mb-4">◇</div>
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-muted-foreground">We maintain the highest standards in quality and craftsmanship.</p>
                        </motion.div>
                        <motion.div
                            className="bg-surface p-8 rounded-lg"
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

            <section className="py-20 bg-surface">
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
                                15+
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
