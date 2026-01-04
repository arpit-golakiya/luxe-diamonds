"use client";

import Select from "react-select";

const requirementOptions = [
    {
        label: "Lab Grown (CVD) Diamonds",
        value: "Lab Grown (CVD) Diamonds",
    },
    {
        label: "Lab Grown (HPHT) Diamonds",
        value: "Lab Grown (HPHT) Diamonds",
    },
    {
        label: "Natural Diamonds",
        value: "Natural Diamonds",
    },
    {
        label: "Custom Jewelry",
        value: "Custom Jewelry",
    },
];

export default function RequirementTypeSelect({ value, onChange }) {
    const selectedOption =
        requirementOptions.find((option) => option.value === value) || null;

    return (
        <Select
            options={requirementOptions}
            value={selectedOption}
            onChange={(option) => onChange(option ? option.value : "")}
            placeholder="Select Type"
            isSearchable={false}
            menuPlacement="auto"
            classNamePrefix="country-select"
        />
    );
}
