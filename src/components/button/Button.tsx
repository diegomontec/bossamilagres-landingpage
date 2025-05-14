import { CButton } from "@coreui/react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className = "inline-block bg-[#8d8b6f] w-full text-white py-2 text-base font-medium transition-colors duration-300 hover:bg-[#7b7960] rounded-full"
,
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
      color="success"
    >
      {children}
    </CButton>
  );
}
