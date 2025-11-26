export default function Guide() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">The 4C Guide</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Understand what makes a diamond special. Learn about Carat, Cut, Color, and Clarity—the four key factors
                        that determine a diamond's quality and value.
                    </p>
                </div>
            </section>

            {/* 4Cs Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {/* Carat */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Carat Weight</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Carat weight measures the mass of a diamond. One carat equals 200 milligrams. While heavier diamonds
                                    are rarer and generally more valuable, two diamonds of equal carat weight can have significantly
                                    different values based on their cut, color, and clarity.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Measured in carats (ct)</li>
                                    <li>• 1 carat = 100 points</li>
                                    <li>• Price increases exponentially with carat weight</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cut */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Cut</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Cut refers to how well a diamond's facets interact with light. It's often considered the most
                                    important of the 4Cs because it directly affects the diamond's brilliance and sparkle. A well-cut
                                    diamond will reflect light beautifully.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Ideal, Excellent, Very Good, Good, Fair, Poor</li>
                                    <li>• Affects light reflection and sparkle</li>
                                    <li>• Most impactful on visual beauty</li>
                                </ul>
                            </div>
                            <div className="h-72 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-lg"></div>
                        </div>

                        {/* Color */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="h-72 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg"></div>
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Color</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Color in diamonds is graded on a scale from D (colorless) to Z (light color). Colorless diamonds are
                                    the most valuable. Most diamonds on the D-Z scale appear colorless to the naked eye, with the
                                    differences visible only under magnification.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Graded D (colorless) to Z (light color)</li>
                                    <li>• Most differences visible only under magnification</li>
                                    <li>• Affects rarity and price</li>
                                </ul>
                            </div>
                        </div>

                        {/* Clarity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">C</div>
                                <h2 className="text-4xl font-serif font-bold mb-4">Clarity</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    Clarity refers to the absence of inclusions and blemishes in a diamond. It's graded on a scale from
                                    Flawless to Included. Most diamonds contain some internal or external characteristics that don't
                                    affect their beauty to the naked eye.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Flawless (FL) to Included (I)</li>
                                    <li>• Many inclusions invisible to naked eye</li>
                                    <li>• Significantly impacts price</li>
                                </ul>
                            </div>
                            <div className="h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diamond Chart */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center mb-12">Understanding Diamond Grades</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-background p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Cut Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p>🔷 Ideal - Maximum light return and brilliance</p>
                                <p>🔶 Excellent - Exceptional light performance</p>
                                <p>🔶 Very Good - High-quality appearance</p>
                                <p>🔷 Good - Noticeable light performance</p>
                            </div>
                        </div>
                        <div className="bg-background p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Color Grades</h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p>D, E, F - Colorless (Premium)</p>
                                <p>G, H, I, J - Near Colorless</p>
                                <p>K, L, M - Faint Color</p>
                                <p>N-Z - Light to Fancy Color</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Find Your Perfect Diamond?</h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Use your knowledge of the 4Cs to explore our collection and find the perfect stone.
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <button className="px-8 py-3 bg-accent text-black font-semibold hover:bg-accent-dark transition">
                            Shop Diamonds
                        </button>
                        <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-black transition">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
