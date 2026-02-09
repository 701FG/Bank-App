import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "primary" | "ghost";
  icon?: ReactNode;
}

const Button = ({ tone = "primary", icon, children, ...props }: ButtonProps) => {
  return (
    <button className={`button button--${tone}`} {...props}>
      {icon ? <span className="button__icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
};

export default Button;
