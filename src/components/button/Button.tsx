import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "inline-block bg-[#8d8b6f] text-white px-32 py-2 rounded-full text-base font-medium no-underline transition-colors duration-300 hover:bg-[#7b7960] ";

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }} className={`${baseStyle} ${className}`}>
        {children}
      </a>
    ); 
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
}
