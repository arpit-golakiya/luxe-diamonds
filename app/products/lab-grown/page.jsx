import Image from "next/image";

export default function LabGrown() {
    const diamonds = [
        { id: 1, name: "Ethical Elegance", carat: "2.00", price: "$8,450", color: "D", image: "/natural_diamonds/classic_solitaire.png" },
        { id: 2, name: "Sustainable Shine", carat: "1.75", price: "$6,800", color: "E", image: "/natural_diamonds/brilliant_cut.png" },
        { id: 3, name: "Modern Marvel", carat: "2.40", price: "$10,200", color: "F", image: "/natural_diamonds/emerald_glory.png" },
        { id: 4, name: "Future Brilliant", carat: "3.10", price: "$13,900", color: "D", image: "/natural_diamonds/royal_radiance.png" },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Lab-Grown Diamonds</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Experience the beauty of diamonds with the peace of mind that comes from ethical creation. Our lab-grown
                        diamonds are chemically and physically identical to natural diamonds.
                    </p>
                </div>
            </section>

            {/* Products */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold mb-8">Our Lab-Grown Collection</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {diamonds.map((diamond) => (
                            <div key={diamond.id}
                                 className="bg-surface rounded-lg overflow-hidden hover:shadow-lg transition">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image src={diamond.image} alt="Carat Weight" fill className="object-cover"
                                           priority/>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{diamond.name}</h3>
                                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                                        <p>Carat: {diamond.carat}</p>
                                        <p>Color: {diamond.color}</p>
                                    </div>
                                    {/*<p className="text-2xl font-bold text-accent mb-4">{diamond.price}</p>*/}
                                    {/*<button*/}
                                    {/*    className="w-full py-2 bg-accent text-black font-semibold hover:bg-accent-dark transition">*/}
                                    {/*    View Details*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-surface rounded-lg p-12">
                        <h3 className="text-2xl font-serif font-bold mb-4">Benefits of Lab-Grown Diamonds</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="text-accent">◇</span>
                                <span>Environmentally sustainable and conflict-free</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◇</span>
                                <span>Identical physical and chemical properties to natural diamonds</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◇</span>
                                <span>More affordable without compromising on quality</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">◇</span>
                                <span>Made with advanced technology and scientific precision</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
