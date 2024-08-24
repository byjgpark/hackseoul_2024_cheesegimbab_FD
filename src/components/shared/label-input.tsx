import { InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onValueChange?: (value: string) => void; // Custom handler that passes a string value
}

export const LabelInput = ({
                               className,
                               label,
                               onValueChange,
                               ...props
                           }: LabelInputProps) => {
    return (
        <div className={cn("grid w-1/2 items-center", className)}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <Input
                {...props}
                onChange={(e) => onValueChange && onValueChange(e.target.value)}
            />
        </div>
    );
};
