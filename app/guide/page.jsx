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
    const { ref: guideRef, inView: guideInView } = useInView({ threshold: 0.05, triggerOnce: true })
    const { ref: chartsRef, inView: chartsInView } = useInView({ threshold: 0.05, triggerOnce: true })

    return (
        <div className="min-h-screen">
            <motion.section
                className="relative py-20 md:py-32 bg-background overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/hero-main-image.png"
                            alt="The 4Cs of Diamond Quality"
                            fill
                            className="object-contain p-4 md:p-8 bg-white"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="py-16 bg-surface"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Understanding Diamond Quality
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Learn about Carat, Cut, Color, and Clarity—the four key factors that determine a diamond's quality and
                        value.
                    </motion.p>
                </div>
            </motion.section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="space-y-24"
                        ref={guideRef}
                        initial="hidden"
                        animate={guideInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Carat */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/carat_wight.png" alt="Carat Weight Chart" fill className="object-contain p-6" />
                            </motion.div>
                            <motion.div variants={slideInVariants} className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-5xl md:text-6xl font-bold text-accent">C</div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Carat Weight</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Diamond carat weight is the measurement of how much a diamond weighs. A metric "carat" is defined as
                                    200 milligrams.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Each carat can be subdivided into 100 'points.' This allows very precise measurements to the hundredth
                                    decimal place. A jeweler may describe the weight of a diamond below one carat by its 'points' alone.
                                    For instance, the jeweler may refer to a diamond that weighs 0.25 carats as a 'twenty-five pointer.'
                                    Diamond weights greater than one carat are expressed in carats and decimals. A 1.08 carat stone would
                                    be described as 'one point oh eight carats.'
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    All else being equal, diamond price increases with diamond carat weight because larger diamonds are
                                    more rare and more desirable. But two diamonds of equal carat weight can have very different values
                                    (and prices) depending on three other factors of the diamond 4Cs: Clarity, Color, and Cut.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Cut */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            variants={itemVariants}
                        >
                            <motion.div variants={slideInVariants} className="space-y-4 order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-5xl md:text-6xl font-bold text-accent">C</div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Cut</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Cut is the only diamond component not influenced by nature, and it's considered the most important of
                                    the 4Cs. This factor refers to the quality of the diamond's cut, not the shape or size (although these
                                    can be interchangeable), and how well the stone is faceted, proportioned, and polished. This also
                                    determines how the diamond interacts with light.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Brilliance, which is the diamond's ability to return light to the eye, is measured solely by the
                                    stone's cut (color and clarity have no impact). For any diamond shape, visually, cut is the first C to
                                    consider, followed by color, and, least as important, clarity (as long as the diamond has no visible
                                    imperfections).
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white shadow-lg order-1 lg:order-2"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/cut_image.png" alt="Diamond Cut Grades" fill className="object-contain p-6" />
                            </motion.div>
                        </motion.div>

                        {/* Color */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/color.jpg" alt="Diamond Color Grades" fill className="object-contain p-6" />
                            </motion.div>
                            <motion.div variants={slideInVariants} className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-5xl md:text-6xl font-bold text-accent">C</div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Color</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Diamond color is actually the absence of color. Everyone has a different tolerance for how much color
                                    they like in a diamond. H and G are near colorless, or a warm white and are the best value for a
                                    "colorless" diamond.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    F and E are completely colorless and are a pure cool white, these stones in my opinion are the perfect
                                    diamond color. D is the rarest and coolest white available, and the most expensive.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Clarity */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            variants={itemVariants}
                        >
                            <motion.div variants={slideInVariants} className="space-y-4 order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-5xl md:text-6xl font-bold text-accent">C</div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Clarity</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Diamonds are stones formed in the earth under extreme pressure. These rocks when forming crack, cloud
                                    and spots of uncrystallized carbon can become trapped as black specks. Inclusions are not bad, and
                                    MOST diamonds have them in one form or another.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Depending where the inclusions are, how many there are and of what type, they are often invisible to
                                    the unaided, untrained eye. Diamond clarity refers to the absence of these inclusions and blemishes.
                                    Diamonds without inclusions are very rare and are graded as IF or Internally Flawless.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    SI2 and SI1 can be very clean and are the best value. VS diamonds will be more brilliant, and will
                                    sell for a higher price than the SI diamonds.
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white shadow-lg order-1 lg:order-2"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src="/clarity.jpg" alt="Diamond Clarity Grades" fill className="object-contain p-6" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
                        ref={chartsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Understanding Diamond Grades
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                        initial="hidden"
                        animate={chartsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-background p-6 md:p-8 rounded-xl shadow-lg"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold mb-6">Cut Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="text-base md:text-lg">🔷 Ideal - Maximum light return and brilliance</p>
                                <p className="text-base md:text-lg">🔶 Excellent - Exceptional light performance</p>
                                <p className="text-base md:text-lg">🔶 Very Good - High-quality appearance</p>
                                <p className="text-base md:text-lg">🔷 Good - Noticeable light performance</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-background p-6 md:p-8 rounded-xl shadow-lg"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold mb-6">Color Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="text-base md:text-lg">D, E, F - Colorless (Premium)</p>
                                <p className="text-base md:text-lg">G, H, I, J - Near Colorless</p>
                                <p className="text-base md:text-lg">K, L, M - Faint Color</p>
                                <p className="text-base md:text-lg">N-Z - Light to Fancy Color</p>
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
                        className="text-3xl md:text-4xl font-serif font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Find Your Perfect Diamond?
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg text-muted-foreground mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Use your knowledge of the 4Cs to explore our collection and find the perfect stone.
                    </motion.p>
                    <motion.div
                        className="flex gap-4 md:gap-6 justify-center flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-6 md:px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Shop Diamonds
                        </motion.button>
                        <motion.button
                            className="px-6 md:px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition"
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
