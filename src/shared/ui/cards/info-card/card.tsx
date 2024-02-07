import { twMerge } from 'tailwind-merge';

export interface CardProps extends ReactTagProps<'div'> {
  /**
   * children
   */
  children: React.ReactNode;
}

export const CARD_TEST_IDS = {
  CHILDREN: 'card-children',
  CONTAINER: 'card-container'
};

export const Card = ({ children, className, ...props }: CardProps) => (
  <div
    data-testid={CARD_TEST_IDS.CONTAINER}
    className={twMerge(
      'h-full w-full rounded-[20px] border border-purple bg-white p-5 shadow-lg',
      className
    )}
    {...props}
  >
    <span data-testid={CARD_TEST_IDS.CHILDREN}>{children}</span>
  </div>
);
