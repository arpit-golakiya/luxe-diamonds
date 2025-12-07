"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPostClient({ slug }) {
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold mb-4">Post not found</h1>
                    <Link href="/blog" className="text-accent hover:underline">
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="py-16 bg-surface"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="text-accent hover:underline mb-6 inline-block">
                        ← Back to Blog
                    </Link>
                    <motion.h1
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {post.title}
                    </motion.h1>
                    <motion.div
                        className="flex gap-4 items-center text-muted-foreground flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full text-sm">
                            {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                    </motion.div>
                </div>
            </motion.section>

            {/* Featured Image */}
            <motion.section
                className="py-12 bg-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="relative h-96 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={post.image || "/placeholder.svg?height=400&width=800&query=diamond+luxury"}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Content Section */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="prose prose-lg max-w-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
                            {post.content.split("\n\n").map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Takeaways */}
                    {post.keyTakeaways && (
                        <motion.div
                            className="bg-surface rounded-lg p-8 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-serif font-bold mb-6">Key Takeaways</h3>
                            <ul className="space-y-3">
                                {post.keyTakeaways.map((takeaway, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="text-accent mt-1">◇</span>
                                        <span className="text-muted-foreground">{takeaway}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-surface">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            className="text-4xl font-serif font-bold mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Related Articles
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2,
                                    },
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            {relatedPosts.map((relatedPost) => (
                                <motion.div
                                    key={relatedPost.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.6 },
                                        },
                                    }}
                                >
                                    <Link href={`/blog/${relatedPost.slug}`}>
                                        <motion.div
                                            className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                        >
                                            <motion.div
                                                className="relative h-40 rounded-lg overflow-hidden"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Image
                                                    src={relatedPost.image || "/placeholder.svg?height=160&width=300"}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-accent transition">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
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
                        Explore our curated collection of premium diamonds and jewelry pieces.
                    </motion.p>
                    <motion.div
                        className="flex gap-6 justify-center flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/products/natural-diamonds">
                            <motion.button
                                className="px-8 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Shop Diamonds
                            </motion.button>
                        </Link>
                        <Link href="/contact">
                            <motion.button
                                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white transition rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}