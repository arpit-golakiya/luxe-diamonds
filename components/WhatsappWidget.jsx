"use client";
import { useState } from "react";

export default function WhatsappWidget() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 z-[9999] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
            >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-14 h-14" />
            </button>

            {/* Chat Widget */}
            {open && (
                <div className="fixed bottom-24 right-5 z-[9999] w-80 bg-white rounded-xl shadow-2xl overflow-hidden animate-slide-up">
                    {/* Header */}
                    <div className="bg-green-700 text-white p-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-lg">Ishanta Jewels</h3>
                            <p className="text-xs opacity-80">Typically replies within minutes</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Message Area */}
                    <div className="p-4 bg-[#ece5dd] text-sm">
                        <div className="bg-white p-3 inline-block rounded-lg shadow">
                            Feel free to ask for help!
                        </div>
                    </div>

                    {/* Bottom Button */}
                    <a
                        href="https://wa.me/918487818980?text=Hi%20I%20would%20like%20to%20know%20more"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-600 text-white text-center py-3 font-medium hover:bg-green-700 transition"
                    >
                        Start Chat
                    </a>
                </div>
            )}

            {/* Animation */}
            <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
        </>
    );
}
