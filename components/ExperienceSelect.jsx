"use client";

import Select from "react-select";

const experienceOptions = [
    { label: "0–2 years", value: "0-2" },
    { label: "2–5 years", value: "2-5" },
    { label: "5–10 years", value: "5-10" },
    { label: "10+ years", value: "10+" },
];

export default function ExperienceSelect({ value, onChange }) {
    const selectedOption =
        experienceOptions.find((option) => option.value === value) || null;

    return (
        <Select
            options={experienceOptions}
            value={selectedOption}
            onChange={(option) => onChange(option ? option.value : "")}
            placeholder="Select experience level"
            isSearchable={false}
            menuPlacement="auto"
            classNamePrefix="country-select"
        />
    );
}
