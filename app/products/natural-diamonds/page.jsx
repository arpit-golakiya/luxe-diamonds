"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import OurOfferingSection from "../../../components/OurOfferingSection";

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

export default function NaturalDiamonds() {
    const { ref: processRef, inView: processInView } = useInView({ threshold: 0.2, triggerOnce: true })

    const processSteps = [
        {
            title: "Planning to cut a rough diamond",
            description:
                "The most complicated stage in the diamond cutting process is planning and analysing the diamond rough, and it also demands the greatest skill and technology. During the design stages, the cutter will choose the best feasible diamond shapes in order to reduce waste and optimize the rough stone's output. To get precise measurements, the rough stone is often mapped with a Sarin machine. The marker, a highly experienced cutter who weighs all the factors and determines whether a diamond should be sawn or split into pieces, then marks exactly where the cuts should be made, performs these complex computations. This procedure might take months when dealing with huge, expensive gems. Normally, 'Sarin Machine' is used to generate accurate measurements and formulate 3D models that will show the best ways to optimize the rough stone.",
        },
        {
            title: "Marking",
            description:
                "The second step in the diamond production process is the marking of the stone using 3D laser technology. Incorrect marking by a fraction of a millimetre can greatly impact the quality of the final diamond, so after noting any imperfections, a diamond marker may decide to work around an inclusion to polish a few high clarity diamonds from one rough stone, rather than yielding one large diamond of lower clarity grading.",
        },
        {
            title: "Cleaving/Sawing",
            description:
                "Sawing is the separation of a piece of diamond rough into separate pieces, to be finished as individual diamonds after planning the stone. In Sawing we use Blade or Laser to cut the rough diamond into separate pieces. This may be used to remove extra portions of the diamond as well. Blade Sawing is the technology where we cut the diamonds using highly precise diamond powder coated Blades with low cutting loss. Laser Sawing is using highly precise cutting technology with more atomization and making things more precise and accurate.",
        },
        {
            title: "Blocking and Bruting",
            description:
                "Once the rough diamond has been reduced to the desired measurements by sawing, it needed to be contoured to achieve the basic shape through the process called Bruting/Gridling. This process requires attentiveness and expertise, in being able to shape the diamond precisely. Bruting can be done through 3 different techniques such as bruting by lasers, rubbing the stone with other diamonds in the opposite directions, disks impregnated with diamond dust. Bruting a diamond is an art and a science. In this process, the friction is produced in either way creating a rough grindle finish and progressively down the corners of the diamond round through abrasion.",
        },
        {
            title: "Polishing",
            description:
                "Polishing of the diamond is the process of forming and shaping the facets of the diamond to achieve the optimum amount of reflection and refraction of the white light that brings sparkle and scintillation in the diamond. In the blocking process, the main facets of the diamond including 8 pavilion, 8 crowns, 1 cutlet, and 1 table are formed; by placing a diamond into the tang and lowered on the scaife to polish the 4 main crown facets and 4 main pavilion facets.",
        },
        {
            title: "Certification and Grading Lab",
            description:
                "Once polished, every single facet of each individual diamond is carefully revived by both a highly accurate laser scanner as well as by a trained gemmologist. Any diamond that doesn't meet our strict quality control standards is sent back for re-polishing. The diamonds are then sent out to some of the most respected diamond grading laboratories worldwide such as GIA and IGI for certification before being studded in your precious diamond jewellery.",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <motion.section
                className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 text-balance text-center leading-tight">
                            Natural Diamonds
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-center w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Natural diamonds are often hailed as one of nature's most exquisite and cherished creations. Formed deep
                        within the Earth's mantle over millions of years, these gems captivate with their mesmerizing brilliance and
                        enduring beauty. Composed solely of pure carbon atoms arranged in a crystalline lattice structure, diamonds
                        are renowned for their remarkable hardness, making them the toughest naturally occurring substance known to
                        humanity.
                    </motion.p>
                </div>
            </motion.section>

            <motion.section
                className="pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8"
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
                            src="/natural_diamond_hero_image.png"
                            alt="Natural diamonds - raw and polished"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Manufacturing Process Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        ref={processRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
                            Manufacturing Process of Natural Diamonds!
                        </h2>
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        initial="hidden"
                        animate={processInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-card rounded-lg p-4 sm:p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
                                variants={itemVariants}
                            >
                                <div className="flex gap-3 sm:gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <OurOfferingSection title={"natural"} />
        </div>
    )
}
