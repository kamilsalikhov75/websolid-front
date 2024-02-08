import { cn } from '@/shared/utils/helpers';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

export type ImageCardProps = LinkProps &
  ReactTagProps<'a'> & {
    /**
     * image source
     */
    imageSrc: string;
    /**
     * image alt
     */
    imageAlt: string;

    /**
     * title
     */
    title: React.ReactNode;
    /**
     * description
     */
    description: React.ReactNode;
  };

export const IMAGE_CARD_TEST_IDS = {
  CONTAINER: 'imageCard-container',
  DESCRIPTION: 'imageCard-description',
  IMAGE: 'imageCard-image',
  TEXT_CONTAINER: 'imageCard-text-container',
  TITLE: 'imageCard-title'
};

export const ImageCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  ...props
}: ImageCardProps) => (
  <Link
    className={cn('flex flex-col rounded-[20px] bg-white shadow-lg', className)}
    data-testid={IMAGE_CARD_TEST_IDS.CONTAINER}
    {...props}
  >
    <Image
      alt={imageAlt}
      className='rounded-t-[20px]'
      data-testid={IMAGE_CARD_TEST_IDS.IMAGE}
      height={684}
      src={imageSrc}
      width={1200}
    />
    <div className='flex flex-col gap-[10px] p-5' data-testid={IMAGE_CARD_TEST_IDS.TEXT_CONTAINER}>
      <span className='title-3' data-testid={IMAGE_CARD_TEST_IDS.TITLE}>
        {title}
      </span>
      <span className='text-base' data-testid={IMAGE_CARD_TEST_IDS.DESCRIPTION}>
        {description}
      </span>
    </div>
  </Link>
);
