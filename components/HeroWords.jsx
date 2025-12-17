"use client"

import { motion } from "framer-motion"

const words = [
    "Crafting Brilliance.",
    "Timeless Diamonds.",
    "Exceptional Jewelry."
]

export default function HeroWords() {
    return (
        <div className="overflow-hidden">
            {words.map((word, i) => (
                <motion.h1
                    key={i}
                    className="text-4xl md:text-6xl font-serif font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: i * 0.5,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    {word}
                </motion.h1>
            ))}
        </div>
    )
}
