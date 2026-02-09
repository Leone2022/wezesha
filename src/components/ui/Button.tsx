"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
} & (
  | ({ href: string; target?: string; rel?: string } & Record<string, unknown>)
  | ({ href?: never } & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "children" | "className"
    >)
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-green-primary text-white hover:bg-green-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-green-dark text-white hover:bg-green-darker shadow-md hover:shadow-lg",
  outline:
    "border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white",
  ghost: "text-green-dark hover:bg-green-primary/10",
  gold: "bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props as {
      href: string;
      target?: string;
      rel?: string;
    };
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > & { href?: never };

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
