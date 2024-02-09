import * as MASKS from '@/shared/utils/masks';

type MaskOptions = Record<keyof typeof MASKS, any>;
export const MASK_OPTIONS = Object.entries(MASKS).reduce<MaskOptions>(
  (acc, [maskName, maskOptions]) => {
    acc[maskName.replace(/Mask$/i, '') as keyof typeof MASKS] = maskOptions;
    return acc;
  },
  {} as MaskOptions
);
