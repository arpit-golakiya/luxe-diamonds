"use client"

import { useState } from "react"
import Link from "next/link"
import "./globals.css"
import WhatsappWidget from "../components/WhatsappWidget";
import {Facebook, Instagram, Linkedin, MessagesSquare, Twitter, X} from "lucide-react"
import { recoleta } from "./fonts";
import Image from "next/image";
import Pinterest from "../components/icons/Pinterest";

export default function RootLayout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <html lang="en" className={recoleta.variable}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Ishanta Jewels - Premium Diamond Jewelry</title>
            <meta
                name="description"
                content="Discover premium diamonds and luxury jewelry. Natural and lab-grown diamonds crafted to perfection."
            />
        </head>
        <body className="bg-background text-foreground font-serif">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-accent backdrop-blur">
            <div className="h-20 px-4 sm:px-6 lg:px-18">
                {/* MOBILE LAYOUT */}
                <div className="flex items-center justify-between h-full md:hidden">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-serif font-bold text-white">Ishanta</span>
                        <span className="text-2xl font-serif text-white ml-1">Jewels</span>
                    </Link>

                    {/* Hamburger */}
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        ☰
                    </button>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:grid grid-cols-[auto_1fr] items-center h-full">
                    {/* Logo (LEFT) */}
                    <Link href="/" className="flex items-center md:pl-4 lg:pl-6">
                        <span className="text-2xl font-serif font-bold text-white">Ishanta</span>
                        <span className="text-2xl font-serif text-white ml-1">Jewels</span>
                    </Link>

                    {/* Menu (RIGHT) */}
                    <div className="flex items-center gap-6 justify-end md:pr-4 lg:pr-6">
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/about" className="text-white">About us</Link>

                        <div className="group relative">
                            <button className="text-white">Our Products</button>
                            <div className="absolute left-0 mt-0 w-48 bg-background shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
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

                        <Link href="/guide" className="text-white">Diamond's 4C Guide</Link>
                        <Link href="/blog" className="text-white">Blogs</Link>
                        <Link href="/careers" className="text-white">Career</Link>

                        <Link
                            href="/contact"
                            className="flex items-center gap-2 border-2 border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-accent transition"
                        >
                            <MessagesSquare size={18} />
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden px-6 pb-4 bg-accent">
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
                        className="inline-flex items-center gap-2 mt-3 border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-accent transition-all duration-300"
                    >
                        <MessagesSquare size={16} />
                        Get Quote
                    </Link>
                </div>
            )}
        </nav>


        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-surface border-t border-border mt-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-serif font-bold text-white mb-4">Ishanta Jewels</h3>
                        <p className="text-sm text-white">
                            Crafting timeless elegance through premium diamonds<br/> and exceptional jewelry.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Our Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/natural-diamonds"
                                      className="text-sm text-white">
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

                <div className="border-t border-white/20 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {/* Follow Us Section - Left */}
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Follow us</h4>
                            <div className="flex gap-6">
                                <a
                                    href="https://www.instagram.com/ishanta_jewels_pvt_ltd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61558748786353"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors"
                                    aria-label="Follow us on Facebook"
                                >
                                    <Facebook size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/ishanta-jewels"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors"
                                    aria-label="Follow us on LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://x.com/Ishanta_jewels"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors"
                                    aria-label="Follow us on X"
                                >
                                    <Twitter size={24} />
                                </a>

                                <a
                                    href="https://www.pinterest.com/Ishanta_Jewels/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 transition-colors"
                                    aria-label="Follow us on Pinterest"
                                >
                                    <Pinterest size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="text-center md:text-right">
                            <h4 className="font-semibold mb-4 text-white">Certified by</h4>

                            <div className="flex items-center justify-center md:justify-end gap-4">
                                <Image
                                    src="/logo-igi-inverse.png"
                                    alt="IGI - International Gemological Institute"
                                    width={60}
                                    height={20}
                                />
                                <Image
                                    src="/logo_GIA.png"
                                    alt="GIA - Gemological Institute of America"
                                    width={60}
                                    height={20}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-white">
                    <p>&copy; 2025 Ishanta Jewels Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <WhatsappWidget/>

        </body>
        </html>
    )
}
