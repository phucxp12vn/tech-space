import React from 'react';

interface ButtonPropTypes {
  label: string;
  customClasses?: string;
  children?: React.ReactNode;
}

const ButtonDefault = ({ label, customClasses = "", children }: ButtonPropTypes) => {
  return (
    <button
      type="submit"
      className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 bg-primary rounded-[5px] text-white py-[11px] px-6 ${customClasses}`}
    >
      {children}
      {label}
    </button>
  );
};

export default ButtonDefault;
