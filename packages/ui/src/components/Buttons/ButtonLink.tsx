import React from 'react';
import Link from 'next/link';

interface ButtonLinkPropTypes {
  label: string;
  link: string;
  customClasses: string;
  children?: React.ReactNode;
}

const ButtonLink = ({
  label,
  link,
  customClasses,
  children,
}: ButtonLinkPropTypes) => {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
      href={link}
    >
      {children}
      {label}
    </Link>
  );
};

export default ButtonLink;
