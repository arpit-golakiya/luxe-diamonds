"use client"

import { useState } from "react"
import Link from "next/link"
import "./globals.css"
import WhatsappWidget from "../components/WhatsappWidget";
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function RootLayout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Luxe Diamonds - Premium Diamond Jewelry</title>
            <meta
                name="description"
                content="Discover premium diamonds and luxury jewelry. Natural and lab-grown diamonds crafted to perfection."
            />
        </head>
        <body className="bg-background text-foreground font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-serif font-bold text-accent">LUXE</span>
                        <span className="text-2xl font-serif font-light text-foreground ml-1">Diamonds</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-md hover:text-accent transition">
                            Home
                        </Link>
                        <Link href="/about" className="text-md hover:text-accent transition">
                            About
                        </Link>
                        <div className="group relative">
                            <button className="text-md hover:text-accent transition">Products</button>
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
                        <Link href="/guide" className="text-md hover:text-accent transition">
                            4C Guide
                        </Link>
                        <Link href="/contact" className="text-md hover:text-accent transition">
                            Contact
                        </Link>
                        <Link href="/careers" className="text-md hover:text-accent transition">
                            Career
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-2xl">
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <Link href="/" className="block py-2 text-sm">
                            Home
                        </Link>
                        <Link href="/about" className="block py-2 text-sm">
                            About
                        </Link>
                        <div className="py-2">
                            <p className="text-sm font-semibold mb-2">Products</p>
                            <Link href="/products/natural-diamonds" className="block pl-4 py-1 text-sm">
                                Natural Diamonds
                            </Link>
                            <Link href="/products/lab-grown" className="block pl-4 py-1 text-sm">
                                Lab-Grown Diamonds
                            </Link>
                            <Link href="/products/jewelry" className="block pl-4 py-1 text-sm">
                                Diamond Jewelry
                            </Link>
                        </div>
                        <Link href="/guide" className="block py-2 text-sm">
                            4C Guide
                        </Link>
                        <Link href="/contact" className="block py-2 text-sm">
                            Contact
                        </Link>
                        <Link href="/careers" className="block py-2 text-sm">
                            Career
                        </Link>
                    </div>
                )}
            </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-surface border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-serif font-bold text-accent mb-4">LUXE Diamonds</h3>
                        <p className="text-sm text-muted-foreground">
                            Crafting timeless elegance through premium diamonds and exceptional jewelry.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/natural-diamonds" className="text-sm hover:text-accent">
                                    Natural Diamonds
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/lab-grown" className="text-sm hover:text-accent">
                                    Lab-Grown Diamonds
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/jewelry" className="text-sm hover:text-accent">
                                    Diamond Jewelry
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-accent">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="text-sm hover:text-accent">
                                    4C Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-accent">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm hover:text-accent">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm hover:text-accent">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 mb-8">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-6">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram size={24}/>
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Follow us on Facebook"
                        >
                            <Facebook size={24}/>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Follow us on LinkedIn"
                        >
                            <Linkedin size={24}/>
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 LUXE Diamonds. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <WhatsappWidget/>

        </body>
        </html>
    )
}
