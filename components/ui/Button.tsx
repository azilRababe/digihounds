import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { CoolMode } from "@/components/ui/cool-mode";

interface ButtonProps {
  content: string;
  className?: string;
  // onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, className }) => {
  return (
    <CoolMode>
      <div className="z-10 flex items-center justify-center">
        <ShimmerButton className="shadow-2xl" background="#b71c1c">
          <span
            className={`${className}"whitespace-pre-wrap text-center leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md`}
          >
            {content}
          </span>
        </ShimmerButton>
      </div>
    </CoolMode>
  );
};

export default Button;
