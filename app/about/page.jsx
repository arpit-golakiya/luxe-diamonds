export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About LUXE Diamonds</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        For over a decade, we've been dedicated to bringing the finest diamonds and jewelry to discerning customers
                        worldwide.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                LUXE Diamonds was founded with a single mission: to make premium diamonds accessible without
                                compromising on quality or ethics. We believe that every person deserves to own a piece of timeless
                                beauty.
                            </p>
                            <p className="text-lg text-muted-foreground mb-4">
                                Our journey began with a passion for gemstones and a commitment to transparency. Today, we work directly
                                with certified suppliers and master craftspeople to bring you diamonds and jewelry that exceed
                                expectations.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                From natural diamonds to lab-grown alternatives, we offer choices that align with your values and
                                preferences.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg h-96"></div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background p-8 rounded-lg">
                            <div className="text-accent text-4xl mb-4">⬩</div>
                            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                            <p className="text-muted-foreground">
                                Complete transparency in all our dealings, from sourcing to pricing.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-lg">
                            <div className="text-accent text-4xl mb-4">◇</div>
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-muted-foreground">We maintain the highest standards in quality and craftsmanship.</p>
                        </div>
                        <div className="bg-background p-8 rounded-lg">
                            <div className="text-accent text-4xl mb-4">◆</div>
                            <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
                            <p className="text-muted-foreground">Ethical sourcing and sustainable practices guide every decision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-bold text-accent mb-2">25+</div>
                            <p className="text-lg text-muted-foreground">Years of Combined Experience</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-accent mb-2">10K+</div>
                            <p className="text-lg text-muted-foreground">Happy Customers Worldwide</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
