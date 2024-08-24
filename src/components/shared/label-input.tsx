// import { cn } from "@/lib/utils";
// interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLAttributes } from 'react'
import { cn } from "@/lib/utils"

interface LabelInputProps extends HTMLAttributes<HTMLDivElement>{
    type: string; 
    placeholder: string;
}

export const LabelInput = ({className, children, ...props}: LabelInputProps) => {
  return (
    <div className={cn("grid w-full max-w-sm items-center", className)}>
      <Label htmlFor={`${children}`}>{children}</Label>
      <Input type={props.type} id="email" placeholder={`${props.placeholder}`} />
    </div>
  );
};
