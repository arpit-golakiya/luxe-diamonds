// app/fonts/index.ts
import localFont from "next/font/local";

export const recoleta = localFont({
    src: [
        { path: "../public/fonts/Recoleta/Recoleta-Regular-New.woff2", weight: "400" },
        { path: "../public/fonts/Recoleta/Recoleta-Medium-New.woff2", weight: "500" },
        { path: "../public/fonts/Recoleta/Recoleta-SemiBold-New.woff2", weight: "600" },
        { path: "../public/fonts/Recoleta/Recoleta-Bold-New.woff2", weight: "700" },
    ],
    variable: "--font-serif", // ✅ this is the key
    display: "swap",
});
