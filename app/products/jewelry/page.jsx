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

export default function DiamondJewelry() {
    const jewelry = [
        {
            id: 1,
            name: "Solitaire Engagement Ring",
            metal: "Platinum",
            price: "$6,500",
            image: "/jewelry/solitaire_engagement_ring.png",
        },
        {
            id: 2,
            name: "Diamond Stud Earrings",
            metal: "14K White Gold",
            price: "$3,200",
            image: "/jewelry/diamond_stud_earrings.png",
        },
        { id: 3, name: "Tennis Bracelet", metal: "18K White Gold", price: "$8,900", image: "/jewelry/tennis_bracelet.png" },
        {
            id: 4,
            name: "Diamond Pendant Necklace",
            metal: "Platinum",
            price: "$4,800",
            image: "/jewelry/diamond_pendant_necklace.png",
        },
        {
            id: 5,
            name: "Three-Stone Ring",
            metal: "14K Yellow Gold",
            price: "$7,200",
            image: "/jewelry/three_stone_ring.png",
        },
        {
            id: 6,
            name: "Diamond Halo Ring",
            metal: "18K White Gold",
            price: "$5,600",
            image: "/jewelry/diamond_halo_ring.png",
        },
    ]

    const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: true })
    const { ref: customRef, inView: customInView } = useInView({ threshold: 0.2, triggerOnce: true })

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
                        Diamond Jewelry
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Exquisitely crafted jewelry pieces featuring our finest diamonds, designed to celebrate life's most precious
                        moments.
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
                        Signature Collection
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        ref={cardsRef}
                        initial="hidden"
                        animate={cardsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {jewelry.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group"
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <motion.div
                                    className="relative h-64 rounded-lg overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">Metal: {item.metal}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="py-20 bg-surface"
                ref={customRef}
                initial={{ opacity: 0 }}
                animate={customInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="text-4xl font-serif font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={customInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Custom Design Service
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={customInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Don't see what you're looking for? Our master craftspeople can create a bespoke piece tailored to your
                        vision.
                    </motion.p>
                    <motion.button
                        className="px-10 py-4 bg-accent text-black font-semibold hover:bg-accent-dark transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Custom Design
                    </motion.button>
                </div>
            </motion.section>
        </div>
    )
}
