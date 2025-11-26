export default function NaturalDiamonds() {
    const diamonds = [
        { id: 1, name: "Classic Solitaire", carat: "2.15", price: "$15,450", color: "D" },
        { id: 2, name: "Brilliant Cut", carat: "1.85", price: "$12,200", color: "E" },
        { id: 3, name: "Emerald Glory", carat: "2.50", price: "$18,900", color: "F" },
        { id: 4, name: "Royal Radiance", carat: "3.20", price: "$24,700", color: "D" },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Natural Diamonds</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Discover our collection of certified natural diamonds, each with its own unique story and unparalleled
                        beauty.
                    </p>
                </div>
            </section>

            {/* Filters and Products */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif font-bold mb-8">Featured Collection</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {diamonds.map((diamond) => (
                                <div key={diamond.id} className="bg-surface rounded-lg overflow-hidden hover:shadow-lg transition">
                                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold mb-2">{diamond.name}</h3>
                                        <div className="text-sm text-muted-foreground mb-3 space-y-1">
                                            <p>Carat: {diamond.carat}</p>
                                            <p>Color: {diamond.color}</p>
                                        </div>
                                        <p className="text-2xl font-bold text-accent mb-4">{diamond.price}</p>
                                        <button className="w-full py-2 bg-accent text-black font-semibold hover:bg-accent-dark transition">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-surface rounded-lg p-12">
                        <h3 className="text-2xl font-serif font-bold mb-4">Why Natural Diamonds?</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="text-accent">◆</span>
                                <span>Formed over billions of years, each natural diamond carries its own unique characteristics</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◆</span>
                                <span>Exceptional rarity and value that appreciate over time</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◆</span>
                                <span>Certified by leading gemological institutes for complete transparency</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◆</span>
                                <span>Traditional choice for engagement and special occasions</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
