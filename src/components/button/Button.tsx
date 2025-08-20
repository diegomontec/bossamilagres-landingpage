import { CButton } from "@coreui/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string; // pode ser "#id" ou "https://..."
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  offset?: number; // altura do header fixo (px)
  target?: "_blank" | "_self"; // se for link externo
}

const customButton = {
  "--cui-btn-color": "#ffffff",
  "--cui-btn-bg": "#8d8b6f",
};

export default function Button({
  children,
  className = "w-full hover:bg-[#5a5947]",
  href,
  onClick,
  type = "button",
  disabled = false,
  offset = 0,
  target = "_self",
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Evita comportamento padrão se tiver href
    if (href) {
      e.preventDefault();
      e.stopPropagation();

      // Caso seja um link interno (#id)
      if (href.startsWith("#")) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      // Caso seja um link externo
      else if (/^https?:\/\//.test(href)) {
        window.open(href, target);
      }
    }

    // Se tiver onClick, executa
    if (onClick) onClick();
  };

  return (
    <CButton
      onClick={handleClick}
      type={type}
      shape="rounded-3"
      className={`customButton ${className}`}
      style={customButton as React.CSSProperties}
      disabled={disabled}
    >
      {children}
    </CButton>
  );
}
