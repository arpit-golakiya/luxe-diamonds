// components/icons/Pinterest.tsx
import React from "react"

const Pinterest = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 2C6.48 2 3 5.64 3 9.76c0 2.42 1.36 3.77 2.22 3.77.35 0 .55-.98.55-1.26 0-.33-.9-1.11-.9-2.58 0-3.05 2.3-5.18 5.29-5.18 2.57 0 4.48 1.46 4.48 4.11 0 1.99-.8 5.73-3.39 5.73-.94 0-1.75-.68-1.75-1.66 0-1.43.99-2.81.99-4.32 0-2.54-3.6-2.08-3.6.98 0 .63.08 1.32.36 1.9l-1.48 6.3c-.44 1.88-.06 4.19-.03 4.42.02.13.18.16.25.06.1-.13 1.45-1.8 1.9-3.64l.78-3.08c.41.78 1.62 1.47 2.9 1.47 3.82 0 6.41-3.48 6.41-8.13C19.78 5.1 16.29 2 12 2z" />
    </svg>
)

export default Pinterest
