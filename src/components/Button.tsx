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
    small: "h-6 px-3 text-xs rounded-(--radius-2)",
    default: "h-8 px-4 text-sm rounded-(--radius-8)",
    large: "h-10 px-6 text-base rounded-(--radius-8)"
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
