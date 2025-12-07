"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogPosts } from "@/lib/blog-data"

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

export default function Blog() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
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
                        Diamond Insights
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Expert tips, diamond care guides, and jewelry trends to help you make informed decisions and care for your
                        precious stones.
                    </motion.p>
                </div>
            </motion.section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {blogPosts.map((post) => (
                            <motion.div key={post.id} className="group" variants={itemVariants}>
                                <Link href={`/blog/${post.slug}`}>
                                    <motion.div
                                        className="bg-surface rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full flex flex-col"
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    >
                                        <motion.div
                                            className="relative h-56 rounded-lg overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image
                                                src={post.image || "/placeholder.svg?height=224&width=400&query=diamond+jewelry"}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </motion.div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex gap-2 mb-3">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                                            </div>
                                            <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                                <span className="text-xs text-muted-foreground">{post.date}</span>
                                                <span className="text-accent text-sm font-semibold">Read More →</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <motion.section
                className="py-20 bg-surface"
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
                        Stay Updated
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Subscribe to our newsletter for the latest diamond insights, care tips, and exclusive jewelry updates.
                    </motion.p>
                    <motion.div
                        className="flex gap-3 max-w-md mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background"
                        />
                        <motion.button
                            className="px-8 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}
