import { twMerge } from 'tailwind-merge';

export interface IconButtonProps extends ReactTagProps<'button'> {
  /**
   * icon
   */
  icon: React.ReactNode;
  /**
   * icon classname
   */
  iconClassName?: string;
}

export const ICON_BUTTON_TEST_IDS = {
  CONTAINER: 'iconButton-container',
  ICON: 'iconButton-icon'
};

/**
 * IconButton Component
 */

export const IconButton = ({ icon, className, iconClassName, ...props }: IconButtonProps) => (
  <button className={twMerge(className)} data-testid={ICON_BUTTON_TEST_IDS.CONTAINER} {...props}>
    {icon && (
      <span className={twMerge(iconClassName)} data-testid={ICON_BUTTON_TEST_IDS.ICON}>
        {icon}
      </span>
    )}
  </button>
);
