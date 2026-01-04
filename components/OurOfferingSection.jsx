"use client"

import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function OurOfferingSection({title}) {
    const { ref: offeringsRef, inView: offeringsInView } = useInView({ threshold: 0.2, triggerOnce: true })

    const collectionCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: custom * 0.15 },
        }),
        hover: {
            y: -8,
            transition: { duration: 0.3 },
        },
    }

    const offerings = [
        {
            title: "Loose Parcels & Certified Diamonds",
            description: `Loose Parcels & Certified ${title} Diamonds. ${title === "natural" ? '' : '(CVD & HPHT)'}`,
            image: "/offerings/loose_parcels_certified_diamonds.jpeg",
            alt: `Loose parcels of certified  ${title} diamonds`,
        },
        {
            title: "Round Brilliants & Fancy Shapes",
            description: "Round Brilliants & Various Fancy shapes like Oval, Pear, Marquise, Princess, Cushion, Emerald, Radiant, Heart & more.",
            image: "/offerings/round_brilliants_various_fancy_shapzs_like_oval_etc.jpg",
            alt: "Round brilliants and various fancy shaped diamonds",
        },
        {
            title: "All White & Fancy Colors",
            description: "All white Colors & Fancy Color diamonds in all measurements.",
            image: "/offerings/all_white_colors_fancy_color.jpeg",
            alt: "White and fancy color diamonds",
        },
        {
            title: "Complete Carat Range",
            description: "0.002ct through 10.00ct and above.",
            image: "/offerings/zero_through_ten_and_above.png",
            alt: "Diamond carat weight sizes comparison",
        },
    ];

    return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
            <motion.div
                ref={offeringsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                    Our Offerings
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover our comprehensive collection of premium {title} diamonds
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {offerings.map((offering, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={collectionCardVariants}
                        initial="hidden"
                        animate={offeringsInView ? "visible" : "hidden"}
                        whileHover="hover"
                        className="group block"
                    >
                        <div className="relative h-72 sm:h-80 bg-muted rounded-lg overflow-hidden mb-4">
                            <img
                                src={offering.image || "/placeholder.svg"}
                                alt={offering.alt}
                                className="w-full h-full group-hover:scale-105 transition duration-300"
                            />
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{offering.description}</p>
                    </motion.div>
                ))}
            </div>

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
                        <motion.a
                            href="https://wa.me/918487818980?text=Hi%20I%20would%20like%20to%20know%20more"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-accent rounded-lg text-white font-semibold hover:bg-accent-dark transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Quote Now
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    </section>
    )
}
