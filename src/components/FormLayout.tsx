import React from 'react';
import logo from '../assets/logo.png';

interface FormLayoutProps {
  heading?: string;
  subheading?: string;
  children?: React.ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  heading = "Heading",
  subheading = "Subheading",
  children
}) => {

  return (
    <div className="w-full max-w-(--form-width) bg-white border border-(--border-card) rounded-(--radius-18) space-y-(--gap-24) p-6 pt-8 flex flex-col items-center">

      {/* Header Container */}
      <div className="flex flex-col items-center text-center gap-(--gap-34) w-full">
        <div className="w-[200px] h-auto">
          <img src={logo} alt="ComplyNexus Academy" className="w-full h-full object-contain" />
        </div>

        <div className="flex flex-col gap-(--gap-12)">
          <h2 className="font-(--weight-bold)">{heading}</h2>
          <p className="body-1 text-(--black-75) font-(--weight-semibold)">{subheading}</p>
        </div>
      </div>

      <div className="w-full">
        {children}
      </div>
    </div>
  );
};
