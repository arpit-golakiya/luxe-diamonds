"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TypingText from "@/components/TypingText";
import { Gem  } from "lucide-react"
import HeroWords from "../components/HeroWords";

export default function Home() {
    const whyChooseRef = useRef(null)
    const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 })

    const collectionsRef = useRef(null)
    const isCollectionsInView = useInView(collectionsRef, { once: true, amount: 0.2 })

    const features = [
        {
            title: "QUALITY",
            description:
                "Our Each diamond and Jewelry are gone through several QC checks by our experts to enhance the customer experience, we deliver same product what we offer to create the transparency. Our each certified diamonds are certified by reputed Diamond Grading Laboratories in the industry like GIA (Gemological Institute of America), IGI (International Gemological Institute) and even company's non certs goods are graded as the standard parameters of the GIA & IGI.",
        },
        {
            title: "TRUST",
            description:
                "Our company has established trust of thousands of our happy customers across the globe as we prioritize your trust above everything else, we promise to provide transparency to each transaction done. Join the thousands of satisfied customers, and experience the Brilliance of Ishanta Jewels. Your security and peace of mind are our top priorities.",
        },
        {
            title: "CONSISTENCY",
            description:
                "At Ishanta Jewels, we are deeply committed to ensuring uninterrupted supply to our valued customers. We understand the critical importance of reliability and consistency in today's dynamic business landscape. That's why we have dedicated ourselves to meticulously planning and executing every aspect of our supply chain.",
        },
    ]

    const heroTitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }

    const heroTextVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
    }

    const heroButtonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    const collectionCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
        }),
        hover: { y: -8, transition: { duration: 0.3 } },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
        }),
    }

    const contactCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
        }),
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
        }),
    }

    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/hero_page_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"/>

                {/* Hero Content */}
                <motion.div
                    className="relative z-10 text-center px-4 text-white"
                    initial="hidden"
                    animate="visible"
                    variants={{visible: {transition: {staggerChildren: 0.2}}}}
                >
                    <motion.div variants={heroTextVariants}>
                        <HeroWords />
                    </motion.div>
                    <motion.p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
                              variants={heroTextVariants}>
                        Discover our curated collection of premium diamonds and exquisite jewelry
                    </motion.p>
                    <motion.div className="flex gap-6 justify-center" variants={heroButtonVariants} whileHover="hover">
                        <Link
                            href="/contact"
                            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition"
                        >
                            Contact us
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust & Certifications Section - ADDED */}
            <section className="py-16 bg-gradient-to-r from-background to-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                            Trusted by Discerning Customers Worldwide
                        </h2>
                        <p className="text-muted-foreground">
                            Certifications and recognitions that guarantee quality and authenticity
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: "✓", title: "IGI & GIA Certified Diamonds", desc: "All diamonds certified by reputed international certification labs" },
                            { icon: "🛡️", title: "Conflict-Free", desc: "100% ethically crafted diamonds" },
                            { icon: "🏆", title: "15+ Years", desc: "Industry expertise and excellence" },
                            { icon: "💎", title: "ISO 9001", desc: "International quality standards" },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                className="text-center p-4"
                                variants={badgeVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-2">{badge.icon}</div>
                                <h3 className="font-semibold text-sm md:text-base mb-1">{badge.title}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">{badge.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/*/!* Customer Reviews *!/*/}
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
                    {/*    {[*/}
                    {/*        {*/}
                    {/*            name: "Sarah M.",*/}
                    {/*            location: "New York, USA",*/}
                    {/*            text: "Exceptional quality and service. The attention to detail is remarkable.",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            name: "James K.",*/}
                    {/*            location: "California, USA",*/}
                    {/*            text: "Authentic diamonds with proper certifications. Highly recommended!",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            name: "Emma R.",*/}
                    {/*            location: "Texas, USA",*/}
                    {/*            text: "Best experience with a jewelry merchant. Professional and trustworthy.",*/}
                    {/*            rating: 5,*/}
                    {/*        },*/}
                    {/*    ].map((review, i) => (*/}
                    {/*        <motion.div*/}
                    {/*            key={i}*/}
                    {/*            className="bg-white p-6 rounded-lg border border-gray-200"*/}
                    {/*            initial={{ opacity: 0, y: 20 }}*/}
                    {/*            whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*            transition={{ duration: 0.6, delay: i * 0.1 }}*/}
                    {/*            viewport={{ once: true }}*/}
                    {/*        >*/}
                    {/*            <div className="mb-3 flex gap-1">*/}
                    {/*                {Array(review.rating)*/}
                    {/*                    .fill(0)*/}
                    {/*                    .map((_, j) => (*/}
                    {/*                        <span key={j} className="text-accent">*/}
                    {/*    ★*/}
                    {/*  </span>*/}
                    {/*                    ))}*/}
                    {/*            </div>*/}
                    {/*            <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>*/}
                    {/*            <p className="font-semibold text-sm">{review.name}</p>*/}
                    {/*            <p className="text-xs text-muted-foreground">{review.location}</p>*/}
                    {/*        </motion.div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-20 bg-background" ref={collectionsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Products</h2>
                        <p className="text-lg text-muted-foreground">Explore the finely crafted premium diamond jewelry and Ishanta's handpicked exclusive quality diamonds</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Natural Diamonds */}
                        <motion.div
                            custom={0}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/natural-diamonds" className="group block">
                                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/natural.png"
                                        alt="Natural Diamonds Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Natural Diamonds</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Rare, authentic, and timelessly beautiful diamonds sourced from around the world.
                                </p>
                            </Link>
                        </motion.div>

                        {/* Lab-Grown Diamonds */}
                        <motion.div
                            custom={1}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/lab-grown" className="group block">
                                <div className="relative h-96 bg-blue-200 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/lab_grown.png"
                                        alt="Lab-Grown Diamonds Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Lab-Grown Diamonds</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Ethically created diamonds with the same brilliance and beauty as natural stones.
                                </p>
                            </Link>
                        </motion.div>

                        {/* Diamond Jewelry */}
                        <motion.div
                            custom={2}
                            variants={collectionCardVariants}
                            initial="hidden"
                            animate={isCollectionsInView ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <Link href="/products/jewelry" className="group block">
                                <div className="relative h-96 bg-yellow-100 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src="/diamond_jwellary.png"
                                        alt="Diamond Jewelry Collection"
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 group-hover:from-black/70 transition">
                                        <h3 className="text-2xl font-serif font-bold text-white">Diamond Jewelry</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Exquisitely crafted pieces featuring our finest diamonds in timeless designs.
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 inline-block">
                            WHY CHOOSE{" "}
                            <span className="relative">
              US
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900"></span>
            </span>
                        </h2>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-50"></div>
                                        <div className="relative bg-blue-50 rounded-full p-6">
                                            <Gem className="w-12 h-12 text-blue-600 fill-blue-200" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-center mb-4 tracking-wide">{feature.title}</h3>

                                {/* Description */}
                                <p className="text-gray-700 text-center leading-relaxed text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-background">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your Perfect Diamond?</h2>
                        <p className="text-lg text-muted-foreground">
                            Let our experts help you discover a diamond or a jewelry as unique as you.
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Phone Card */}
                        <motion.a
                            href="tel:+918487818980"
                            className="group bg-white border-2 border-gray-100 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition duration-300"
                            custom={0}
                            variants={contactCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-accent text-5xl mb-4 group-hover:scale-110 transition duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                ☎
                            </motion.div>
                            <p className="text-gray-600 text-sm mb-2">Call us</p>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition">
                                +91 84878 18980
                            </h3>
                        </motion.a>

                        {/* Email Card */}
                        <motion.a
                            href="mailto:info@ishantajewels.com"
                            className="group bg-white border-2 border-gray-100 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition duration-300"
                            custom={1}
                            variants={contactCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-accent text-5xl mb-4 group-hover:scale-110 transition duration-300"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                            >
                                ✉
                            </motion.div>
                            <p className="text-gray-600 text-sm mb-2">Email us</p>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition break-all">
                                info@ishantajewels.com
                            </h3>
                        </motion.a>
                    </div>

                    {/* Get in Touch Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-accent text-white font-semibold text-lg hover:bg-accent-dark transition rounded-sm"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
