"use client";
import { useEffect, useState } from "react";

const phrases = [
    `FROM ROUGH TO "WONDER"`,
    `"ADVANCE" TECHNOLOGY & EXPERTISE`,
    `MAXIMIZING THE "BRILLIANCE"`,
    `EXPERIENCE OF "ULTRA LUXURY"`,
    `REFLECTING THE "PROMISE"`,
    `UNLOCKING JOURNEYS WITH "INSPIRING TRAVEL"`,
];

export default function TypingText() {
    const [displayText, setDisplayText] = useState("");
    const [fullText, setFullText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Remove quotes from typing animation, keep them in full text for highlight only.
        const cleanText = phrases[phraseIndex].replace(/"/g, "");
        setFullText(cleanText);
    }, [phraseIndex]);

    useEffect(() => {
        const tick = () => {
            if (!isDeleting) {
                // Typing forward
                setDisplayText(fullText.substring(0, displayText.length + 1));

                if (displayText.length + 1 === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1400);
                }
            } else {
                // Deleting
                setDisplayText(fullText.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        };

        const timeout = setTimeout(tick, 80);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, fullText]);

    // Highlight quoted parts (still using original phrase)
    const highlightFormatted = (() => {
        const original = phrases[phraseIndex];
        let temp = displayText;

        // Replace matching words with highlighted span
        return temp.replace(
            /\b([A-Za-z ]+)\b/g,
            (match) => {
                const regexQuoted = new RegExp(`"${match.trim()}"`);
                // if (regexQuoted.test(original)) {
                //     return `<span class="text-yellow-400 font-semibold">${match}</span>`;
                // }
                return match;
            }
        );
    })();

    return (
        <h2
            className="text-3xl md:text-4xl font-serif font-bold mt-4 min-h-[50px]"
            dangerouslySetInnerHTML={{ __html: highlightFormatted }}
        />
    );
}
