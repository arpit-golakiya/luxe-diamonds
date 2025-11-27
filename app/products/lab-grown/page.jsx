"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

export default function LabGrown() {
    const diamonds = [
        {
            id: 1,
            name: "Ethical Elegance",
            carat: "2.00",
            price: "$8,450",
            color: "D",
            image: "/natural_diamonds/classic_solitaire.png",
        },
        {
            id: 2,
            name: "Sustainable Shine",
            carat: "1.75",
            price: "$6,800",
            color: "E",
            image: "/natural_diamonds/brilliant_cut.png",
        },
        {
            id: 3,
            name: "Modern Marvel",
            carat: "2.40",
            price: "$10,200",
            color: "F",
            image: "/natural_diamonds/emerald_glory.png",
        },
        {
            id: 4,
            name: "Future Brilliant",
            carat: "3.10",
            price: "$13,900",
            color: "D",
            image: "/natural_diamonds/royal_radiance.png",
        },
    ]

    const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: true })
    const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.2, triggerOnce: true })

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
                        Lab-Grown Diamonds
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Experience the beauty of diamonds with the peace of mind that comes from ethical creation. Our lab-grown
                        diamonds are chemically and physically identical to natural diamonds.
                    </motion.p>
                </div>
            </motion.section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-serif font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Lab-Grown Collection
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                        ref={cardsRef}
                        initial="hidden"
                        animate={cardsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {diamonds.map((diamond) => (
                            <motion.div
                                key={diamond.id}
                                className="bg-surface rounded-lg overflow-hidden hover:shadow-lg transition"
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <motion.div
                                    className="relative h-64 rounded-lg overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={diamond.image || "/placeholder.svg"}
                                        alt={diamond.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{diamond.name}</h3>
                                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                                        <p>Carat: {diamond.carat}</p>
                                        <p>Color: {diamond.color}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-surface rounded-lg p-12"
                        ref={benefitsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-serif font-bold mb-4">Benefits of Lab-Grown Diamonds</h3>
                        <motion.ul
                            className="space-y-3 text-muted-foreground"
                            initial="hidden"
                            animate={benefitsInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.li className="flex gap-3" variants={itemVariants}>
                                <span className="text-accent">◇</span>
                                <span>Environmentally sustainable and conflict-free</span>
                            </motion.li>
                            <motion.li className="flex gap-3" variants={itemVariants}>
                                <span className="text-accent">◇</span>
                                <span>Identical physical and chemical properties to natural diamonds</span>
                            </motion.li>
                            <motion.li className="flex gap-3" variants={itemVariants}>
                                <span className="text-accent">◇</span>
                                <span>More affordable without compromising on quality</span>
                            </motion.li>
                            <motion.li className="flex gap-3" variants={itemVariants}>
                                <span className="text-accent">◇</span>
                                <span>Made with advanced technology and scientific precision</span>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
