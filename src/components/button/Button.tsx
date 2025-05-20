import { CButton } from "@coreui/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const customButton = {
  '--cui-btn-color': '#ffffff',
  '--cui-btn-bg': '#8d8b6f',
};

export default function Button({
  children,
  className = "w-full hover:bg-[#7b7960]",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <CButton
      onClick={handleClick}
      type={type}
      shape="rounded-3"
      className={`customButton ${className}`}
      style={customButton as React.CSSProperties}
    >
      {children}
    </CButton>
  );
}
