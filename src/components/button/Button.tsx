import { CButton } from "@coreui/react";

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
  '--cui-hover-btn-bg': '#7b7960',
}

export default function Button({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <CButton
      href={href}
      onClick={onClick}
      type={type}
      shape="rounded-3"
      className={className}
      style={customButton as React.CSSProperties}
    >
      {children}
    </CButton>
  );
}