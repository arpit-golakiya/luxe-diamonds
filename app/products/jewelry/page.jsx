export default function DiamondJewelry() {
    const jewelry = [
        { id: 1, name: "Solitaire Engagement Ring", metal: "Platinum", price: "$6,500" },
        { id: 2, name: "Diamond Stud Earrings", metal: "14K White Gold", price: "$3,200" },
        { id: 3, name: "Tennis Bracelet", metal: "18K White Gold", price: "$8,900" },
        { id: 4, name: "Diamond Pendant Necklace", metal: "Platinum", price: "$4,800" },
        { id: 5, name: "Three-Stone Ring", metal: "14K Yellow Gold", price: "$7,200" },
        { id: 6, name: "Diamond Halo Ring", metal: "18K White Gold", price: "$5,600" },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Diamond Jewelry</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Exquisitely crafted jewelry pieces featuring our finest diamonds, designed to celebrate life's most precious
                        moments.
                    </p>
                </div>
            </section>

            {/* Jewelry Collection */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold mb-8">Signature Collection</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jewelry.map((item) => (
                            <div key={item.id} className="group">
                                <div className="h-80 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition"></div>
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">Metal: {item.metal}</p>
                                <p className="text-2xl font-bold text-accent">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customization */}
            <section className="py-20 bg-surface">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Custom Design Service</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Don't see what you're looking for? Our master craftspeople can create a bespoke piece tailored to your
                        vision.
                    </p>
                    <button className="px-10 py-4 bg-accent text-black font-semibold hover:bg-accent-dark transition">
                        Start Your Custom Design
                    </button>
                </div>
            </section>
        </div>
    )
}
