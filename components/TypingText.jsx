"use client"
import { useEffect, useState } from "react"

const phrases = [
    { text: `FROM ROUGH TO WONDER`, highlight: "WONDER" },
    { text: `ADVANCE TECHNOLOGY & EXPERTISE`, highlight: "EXPERTISE" },
    { text: `MAXIMIZING THE BRILLIANCE`, highlight: "BRILLIANCE" },
    { text: `EXPERIENCE OF ULTRA LUXURY`, highlight: "LUXURY" },
    { text: `REFLECTING THE PROMISE`, highlight: "PROMISE" },
    { text: `UNLOCKING JOURNEYS WITH INSPIRING TRAVEL`, highlight: "INSPIRING TRAVEL" },
]

export default function TypingText() {
    const [displayText, setDisplayText] = useState("")
    const [fullText, setFullText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        setFullText(phrases[phraseIndex].text)
    }, [phraseIndex])

    useEffect(() => {
        const tick = () => {
            if (!isDeleting) {
                // Typing forward
                setDisplayText(fullText.substring(0, displayText.length + 1))

                if (displayText.length + 1 === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1400)
                }
            } else {
                // Deleting
                setDisplayText(fullText.substring(0, displayText.length - 1))

                if (displayText.length === 0) {
                    setIsDeleting(false)
                    setPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }

        const timeout = setTimeout(tick, 80)
        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, fullText])

    const renderHighlightedText = () => {
        const highlightWord = phrases[phraseIndex].highlight
        const parts = []
        const currentIndex = 0

        // Find where the highlight word starts in the full text
        const highlightStartIndex = fullText.indexOf(highlightWord)
        const highlightEndIndex = highlightStartIndex + highlightWord.length

        // Iterate through displayed text and apply highlighting
        for (let i = 0; i < displayText.length; i++) {
            const char = displayText[i]

            // Check if current character is within the highlight word range
            if (i >= highlightStartIndex && i < highlightEndIndex) {
                parts.push(
                    <span key={i} className="text-blue-700 font-semibold">
            {char}
          </span>,
                )
            } else {
                parts.push(<span key={i}>{char}</span>)
            }
        }

        return parts
    }

    return <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 min-h-[50px]">{renderHighlightedText()}</h2>
}
