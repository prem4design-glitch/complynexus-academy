import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  sizeVariant?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  hint, 
  sizeVariant = 'medium', 
  leftIcon,
  rightIcon,
  className = '', 
  ...props 
}) => {
  const baseInputStyles = "w-full bg-(--white) border border-(--black-25) transition-all outline-none focus:border-(--primary) focus:ring-1 focus:ring-(--primary-25) disabled:bg-(--grey-3) disabled:border-(--grey) disabled:text-(--black-50) placeholder:text-(--black-50)";
  
  const sizes = {
    small: "h-9 text-(--body-3-size) rounded-(--radius-8)",
    medium: "h-12 text-(--body-2-size) rounded-(--radius-8)",
    large: "h-14 text-(--body-1-size) rounded-(--radius-8)"
  };

  const paddingClasses = {
    small: `${leftIcon ? 'pl-9' : 'pl-3'} ${rightIcon ? 'pr-9' : 'pr-3'}`,
    medium: `${leftIcon ? 'pl-11' : 'pl-4'} ${rightIcon ? 'pr-11' : 'pr-4'}`,
    large: `${leftIcon ? 'pl-13' : 'pl-5'} ${rightIcon ? 'pr-13' : 'pr-5'}`
  };

  const inputClasses = `${baseInputStyles} ${sizes[sizeVariant]} ${paddingClasses[sizeVariant]} ${error ? 'border-(--red) focus:border-(--red)' : ''} ${className}`;

  return (
    <div className="flex flex-col gap-1 w-full max-w-sm">
      {label && (
        <label className="text-sm font-medium text-(--black-75) mb-1">
          {label}
        </label>
      )}
      
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 flex items-center justify-center text-(--black-50)">
            {leftIcon}
          </div>
        )}
        
        <input 
          className={inputClasses} 
          {...props} 
        />

        {rightIcon && (
          <div className="absolute right-3 flex items-center justify-center text-(--black-50)">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <span className="text-xs text-(--red) mt-1">
          {error}
        </span>
      )}
      
      {hint && !error && (
        <span className="text-xs text-(--black-50) mt-1">
          {hint}
        </span>
      )}
    </div>
  );
};
