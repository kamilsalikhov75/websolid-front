'use client';

import { useId } from 'react';

export interface InputProps extends ReactTagProps<'input'> {
  label?: React.ReactNode;
}

export const INPUT_TEST_IDS = {
  CONTAINER: 'input-container',
  FIELD: 'input-field',
  LABEL: 'input-label'
};

export const Input = ({ label, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className='flex flex-col gap-1' data-testid={INPUT_TEST_IDS.CONTAINER}>
      {label && (
        <label className='body-base text-black' data-testid={INPUT_TEST_IDS.LABEL} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className='body-base rounded-[6px] border border-blue-500 p-4 text-black placeholder:text-grey'
        data-testid={INPUT_TEST_IDS.FIELD}
        id={id}
        {...props}
      />
    </div>
  );
};
