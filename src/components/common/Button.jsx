import { ArrowRight } from "lucide-react";

export default function Button({ children, href, variant = "primary", className = "" }) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
    </a>
  );
}
