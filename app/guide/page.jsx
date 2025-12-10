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
                        The Diamond's 4C Guide
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
                                    Diamond carat weight is the measurement of how much a diamond weights. A metric “carat” is defined as 200 milligrams.
                                </p>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Each carat can be subdivided into 100 ‘points.’ This allows very precise measurements to the hundredth decimal place. A jeweler may describe the weight of a diamond below one carat by its ‘points’ alone. For instance, the jeweler may refer to a diamond that weights 0.25 carats as a ‘twenty-five pointers.’ Diamond weights greater than one carat are expressed in carats and decimals. A 1.08 carat stone would be described as ‘one point oh eight carats.’
                                </p>
                                <p className="text-lg text-muted-foreground mb-4">
                                    All else being equal, diamond price increases with diamond carat weight because larger diamonds are more rare and more desirable. But two diamonds of equal carat weight can have very different values (and prices) depending on three other factors of the diamond 4Cs: Clarity, Color, and Cut.
                                </p>
                                <p className="text-lg text-muted-foreground mb-4">
                                    It’s important to remember that a diamond’s value is determined using all of the 4Cs, not just carat weight.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Cut */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Cut</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Cut is the only diamond component not influenced by nature, and it’s considered as most important of the 4Cs. This factor refers to the quality of the diamond's cut, not the shape or size (although these can be interchangeable), and how well the stone is faceted, proportioned, and polished. This also determines how the diamond interacts with light. Brilliance, which is the diamond's ability to return light to the eye, is measured solely by the stone's cut (color and clarity have no impact). For any diamond shape, visually, cut is the first C to consider, followed by color, and, least as important, clarity (as long as the diamond has no visible imperfections).
                                </p>
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
                                    Diamond color is actually the absence of color. Everyone has a different tolerance for how much color they like in a diamond. H and G are near colorless, or a warm white and are the best value for a "colorless" diamond. F and E are completely colorless and are a pure cool white, these stones in my opinion are the perfect diamond color. D is the rarest and coolest white available, and the most expensive.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Clarity */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                            <motion.div variants={slideInVariants}>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Clarity</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Diamonds are stones formed in the earth under extreme pressure, these rocks when forming crack, cloud and spots of uncrystallized carbon can become trapped as black specks. Inclusions are not bad, and MOST diamonds have them in one form or another. Depending where the inclusions are, how many there are and of what type, they are often invisible to the unaided, untrained eye. Diamond clarity refers to the absence of these inclusions and blemishes. Diamonds without inclusions are very rare and are graded as IF or Internally Flawless. Inclusions do affect the value of the diamond, and can affect the stone's brilliance if the are grouped tightly together or if they are scattered throughout the diamond. The inclusions break up the light entering and leaving the diamond, making it less brilliant. SI2 and SI1 can be very clean and are the best value. VS diamonds will be more brilliant, and will sell for a higher price than the SI diamonds.
                                </p>
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
