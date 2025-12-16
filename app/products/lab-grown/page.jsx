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

export default function LabGrownDiamonds() {
    const { ref: procesRef, inView: processInView } = useInView({ threshold: 0.2, triggerOnce: true })
    const { ref: offeringsRef, inView: offeringsInView } = useInView({ threshold: 0.2, triggerOnce: true })

    const processSteps = [
        {
            title: "Inspection and Placement of Diamond Seeds",
            description:
                "Each diamond seed undergoes meticulous scrutiny to eliminate flaws. The top-quality seeds are then delicately positioned on a metal disc for insertion into the diamond-growing apparatus. Generally, they are fabricated using two methods: High-Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD).",
        },
        {
            title: "Exposure to Elevated Temperatures",
            description:
                "A blend of high temperatures, pressure, and gases creates an environment that facilitates the breakdown of carbon atoms, which then precipitate onto the seeds within the chamber. Over time, the seeds metamorphose into rough diamonds within a span of a few weeks.",
        },
        {
            title: "Cutting, Polishing, and Enhancing the Luster",
            description:
                "The rough diamonds generated acquire identical chemical, physical, and optical characteristics as mined diamonds through this process. They are then meticulously cut and polished to yield a genuine, authentic, and exquisitely cultivated diamond.",
        },
    ]

    const offerings = [
        "Loose Parcels & Certified Lab Grown Diamonds. (CVD & HPHT)",
        "Round Brilliants & Various Fancy shapes like Oval, Pear, Marquise, Princess, Cushion, Emerald, Radiant, Heart & more.",
        "All white Colors & Fancy Color diamonds in all measurements.",
        "0.01ct through 10.00ct and above.",
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <motion.section
                className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
                            Lab-Grown Diamonds
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Lab-grown diamonds, also known as synthetic or cultured diamonds, are created through advanced technological
                        processes that replicate the conditions under which natural diamonds form. These diamonds are chemically,
                        physically, and optically identical to natural diamonds, these diamonds have same physical and chemical
                        properties as mined diamonds. yet they are produced in controlled laboratory environments rather than mined
                        from the Earth.
                    </motion.p>
                </div>
            </motion.section>

            <motion.section
                className="py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/lab_grown_hero_image.png"
                            alt="Lab-grown diamonds manufacturing process"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Manufacturing Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        ref={procesRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            The process of manufacturing Lab-Grown Diamonds!
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Lab-Grown Diamonds are revolutionizing the diamonds and jewelry industry with an environmentally friendly
                            and morally sound approach to their production. Let's delve into this complex process.
                        </p>
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        animate={processInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-surface rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
                                variants={itemVariants}
                            >
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-semibold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <p className="text-lg mt-16 text-muted-foreground">
                        Here at Ishanta Jewels, we have extensively researched lab-grown diamonds over the years, and in our efforts to make a positive environmental impact, we strive to offer the highest quality of lab-grown diamonds.
                    </p>
                </div>
            </section>

            {/* Our Offerings Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        ref={offeringsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
                            Our Offerings are as follows:
                        </h2>

                        <motion.div
                            className="space-y-5"
                            initial="hidden"
                            animate={offeringsInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            {offerings.map((offering, index) => (
                                <motion.div key={index} className="flex gap-4 items-start" variants={itemVariants}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center h-6 w-6">
                                            <span className="text-primary text-xl">◇</span>
                                        </div>
                                    </div>
                                    <p className="text-base text-muted-foreground leading-relaxed">{offering}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-lg text-muted-foreground mb-6">If not done yet</p>
                        <Link href="#quote">
                            <motion.button
                                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Quote Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
