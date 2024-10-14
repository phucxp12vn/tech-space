import Link from 'next/link';
import Image from 'next/image';

import { CardItemProps } from '../../types/cards';

const Card = ({ imageSrc, title, content }: CardItemProps) => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      {imageSrc && (
        <Link className="block px-4 pt-4" href="#">
          <Image className="h-[238px] object-cover" src={imageSrc} alt="cards" width="432" height='238'/>
        </Link>
      )}
      <div className="p-6">
        <h4 className="mb-3 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{title ?? ''}</Link>
        </h4>
        <p className="w-full max-w-[290px] font-medium">{content ?? ''}</p>
      </div>
    </div>
  );
};

export default Card;
