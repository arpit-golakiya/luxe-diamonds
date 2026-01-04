"use client";

import Select from "react-select";

export default function PositionSelect({ value, onChange, jobOpenings }) {
    const positionOptions = jobOpenings.map((job) => ({
        label: job.title,
        value: job.title,
    }));

    const selectedOption =
        positionOptions.find((option) => option.value === value) || null;

    return (
        <Select
            options={positionOptions}
            value={selectedOption}
            onChange={(option) => onChange(option ? option.value : "")}
            placeholder="Select a position"
            isSearchable
            menuPlacement="auto"
            classNamePrefix="country-select"
            isDisabled={!jobOpenings.length}
        />
    );
}
