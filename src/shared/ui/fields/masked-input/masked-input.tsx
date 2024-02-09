'use client';

import { useMaskito } from '@maskito/react';
import type { MaskitoOptions } from '@maskito/core';
import { PhoneMask } from '@/shared/utils/masks';
import { useId } from 'react';

export type MaskType = 'phone' | 'custom';

interface MaskitoOptionsRequired {
  maskType?: 'custom';
  maskitoOptions: MaskitoOptions;
}

interface MaskitoOptionsNotRequired {
  maskType: MaskType;
  maskitoOptions?: MaskitoOptions;
}

export type MaskedInputProps = ReactTagProps<'input'> &
  (MaskitoOptionsRequired | MaskitoOptionsNotRequired) & {
    label?: React.ReactNode;
  };

export const MASKS = {
  phone: PhoneMask
};

export const MASKED_INPUT_TEST_IDS = {
  CONTAINER: 'maskedInput-container',
  FIELD: 'maskedInput-field',
  LABEL: 'maskedInput-label'
};

export const MaskedInput = ({
  maskitoOptions,
  maskType = 'custom',
  label,
  ...props
}: MaskedInputProps) => {
  const id = useId();
  const options = maskType === 'custom' ? maskitoOptions : MASKS[maskType];
  const ref = useMaskito({ options });

  return (
    <div className='flex flex-col gap-1' data-testid={MASKED_INPUT_TEST_IDS.CONTAINER}>
      {label && (
        <label
          className='body-base text-black'
          data-testid={MASKED_INPUT_TEST_IDS.LABEL}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className='body-base rounded-[6px] border border-blue-500 p-4 text-black placeholder:text-grey'
        data-testid={MASKED_INPUT_TEST_IDS.FIELD}
        id={id}
        {...props}
      />
    </div>
  );
};
