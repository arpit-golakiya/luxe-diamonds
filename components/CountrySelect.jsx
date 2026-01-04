"use client";

import Select from "react-select";
import countries from "../lib/data/countries.json"

const countryOptions = countries.map((country) => ({
    label: country,
    value: country,
}));

export default function CountrySelect({ value, onChange }) {
    const selectedOption =
        countryOptions.find((option) => option.value === value) || null;

    return (
        <Select
            options={countryOptions}
            value={selectedOption}
            onChange={(option) => onChange(option ? option.value : "")}
            placeholder="Select Country"
            isSearchable
            menuPlacement="auto"
            classNamePrefix="country-select"
        />
    );
}
