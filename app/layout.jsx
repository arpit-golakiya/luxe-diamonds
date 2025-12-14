"use client"

import { useState } from "react"
import Link from "next/link"
import "./globals.css"
import WhatsappWidget from "../components/WhatsappWidget";
import { Facebook, Instagram, Linkedin, MessagesSquare } from "lucide-react"

export default function RootLayout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Ishanta Jewels - Premium Diamond Jewelry</title>
            <meta
                name="description"
                content="Discover premium diamonds and luxury jewelry. Natural and lab-grown diamonds crafted to perfection."
            />
        </head>
        <body className="bg-background text-foreground font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-accent backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-serif font-bold text-white">Ishanta</span>
                        <span className="text-2xl font-serif text-white text-foreground ml-1">Jewels</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-md text-white transition">
                            Home
                        </Link>
                        <Link href="/about" className="text-md text-white transition">
                            About us
                        </Link>
                        <div className="group relative">
                            <button className="text-md text-white transition">Our Products</button>
                            <div
                                className="absolute left-0 mt-0 w-48 bg-background shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <Link href="/products/natural-diamonds" className="block px-4 py-2 hover:bg-accent/10">
                                    Natural Diamonds
                                </Link>
                                <Link href="/products/lab-grown" className="block px-4 py-2 hover:bg-accent/10">
                                    Lab-Grown Diamonds
                                </Link>
                                <Link href="/products/jewelry" className="block px-4 py-2 hover:bg-accent/10">
                                    Diamond Jewelry
                                </Link>
                            </div>
                        </div>
                        <Link href="/guide" className="text-md text-white transition">
                            Diamond's 4C Guide
                        </Link>
                        <Link href="/blog" className="text-md text-white transition">
                            Blogs
                        </Link>
                        <Link href="/careers" className="text-md text-white transition">
                            Career
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 text-md text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-accent transition-all duration-300"
                        >
                            <MessagesSquare size={18} />
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <Link href="/" className="block text-white py-2 text-sm">
                            Home
                        </Link>
                        <Link href="/about" className="block text-white py-2 text-sm">
                            About us
                        </Link>
                        <div className="py-2">
                            <p className="text-sm font-semibold mb-2 text-white">Our Products</p>
                            <Link href="/products/natural-diamonds" className="block text-white pl-4 py-1 text-sm">
                                Natural Diamonds
                            </Link>
                            <Link href="/products/lab-grown" className="block text-white pl-4 py-1 text-sm">
                                Lab-Grown Diamonds
                            </Link>
                            <Link href="/products/jewelry" className="block text-white pl-4 py-1 text-sm">
                                Diamond Jewelry
                            </Link>
                        </div>
                        <Link href="/guide" className="block text-white py-2 text-sm">
                            Diamond's 4C Guide
                        </Link>
                        <Link href="/blog" className="block text-white py-2 text-sm">
                            Blogs
                        </Link>
                        <Link href="/careers" className="block text-white py-2 text-sm">
                            Career
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 text-sm text-white border-2 border-white px-4 py-2 rounded-lg mt-2 hover:bg-white hover:text-accent transition-all duration-300 w-fit"
                        >
                            <MessagesSquare size={16} />
                            Get Quote
                        </Link>
                    </div>
                )}
            </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-surface border-t border-border mt-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-4">Ishanta Jewels</h3>
                        <p className="text-sm text-white">
                            Crafting timeless elegance through premium diamonds and exceptional jewelry.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Our Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/natural-diamonds" className="text-sm text-white hover:text-accent">
                                    Natural Diamonds
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/lab-grown" className="text-sm text-white">
                                    Lab-Grown Diamonds
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/jewelry" className="text-sm text-white">
                                    Diamond Jewelry
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-white">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="text-sm text-white">
                                    Diamond's 4C Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-white">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-white">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 mb-8">
                    <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/ishanta_jewels_pvt_ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground text-white transition-colors"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram size={24}/>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61558748786353"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground text-white transition-colors"
                            aria-label="Follow us on Facebook"
                        >
                            <Facebook size={24}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ishanta-jewels"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground text-white transition-colors"
                            aria-label="Follow us on LinkedIn"
                        >
                            <Linkedin size={24}/>
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-white">
                    <p>&copy; 2025 Ishanta Jewels. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <WhatsappWidget/>

        </body>
        </html>
    )
}
