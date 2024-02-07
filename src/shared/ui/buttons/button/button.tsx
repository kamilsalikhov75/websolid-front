export interface ButtonProps extends ReactTagProps<'button'> {
  children: React.ReactNode;
}

export const BUTTON_TEST_IDS = { CHILDREN: 'button-children', CONTAINER: 'button-container' };

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className='flex w-full justify-center rounded-full bg-blue-500 px-5 py-[10px] transition-colors hover:bg-blue-300'
    data-testid={BUTTON_TEST_IDS.CONTAINER}
    {...props}
  >
    <span className='body-lg text-white' data-testid={BUTTON_TEST_IDS.CHILDREN}>
      {children}
    </span>
  </button>
);
