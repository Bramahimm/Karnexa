"use client";

import { useCursor } from "@/components/shared/CursorProvider";
import { cn } from "@/lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
}

export function ContactInput({
  label,
  isTextArea,
  className,
  ...props
}: InputProps) {
  const { setCursorState } = useCursor();
  const Element = isTextArea ? "textarea" : "input";

  return (
    <div className="group relative w-full mb-8">
      <label className="block text-sm uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-accent-primary">
        {label}
      </label>
      <Element
        {...props}
        onFocus={() => setCursorState("text")}
        onBlur={() => setCursorState("default")}
        className={cn(
          "w-full bg-transparent border-b border-white/10 py-4 outline-none transition-all",
          "focus:border-accent-primary focus:ring-0",
          "placeholder:text-white/10",
          className
        )}
      />
    </div>
  );
}
