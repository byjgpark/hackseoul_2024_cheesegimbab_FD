import * as React from "react";

interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-700 text-sm font-medium">{value}%</span>
        </div>
    );
};
