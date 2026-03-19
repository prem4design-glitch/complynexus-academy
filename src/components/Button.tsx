import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'small' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-200 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-(--primary) text-white hover:bg-(--primary-50) active:bg-(--primary-25) shadow-sm",
    secondary: "bg-(--grey-3) text-(--black) hover:bg-(--grey)",
    ghost: "bg-transparent text-(--primary) hover:bg-(--primary-10)",
    link: "bg-transparent text-(--primary) hover:underline p-0"
  };

  const sizes = {
    small: "h-9 px-4 text-(--body-2-size) rounded-(--radius-6)",
    default: "h-11 px-5 text-(--body-1-size) rounded-(--radius-8)",
    large: "h-14 px-8 text-(--body-xl-size) rounded-(--radius-10)"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="flex-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-center">{rightIcon}</span>}
    </button>
  );
};
