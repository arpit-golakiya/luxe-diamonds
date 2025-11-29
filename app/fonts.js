import localFont from "next/font/local";

export const recoleta = localFont({
    src: [
        {
            path: "../public/fonts/Recoleta/recoleta-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Recoleta/recoleta-medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Recoleta/recoleta-bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--recoleta",
});
