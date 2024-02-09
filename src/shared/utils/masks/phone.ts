import type { MaskitoOptions, MaskitoPreprocessor } from '@maskito/core';
import {
  maskitoAddOnFocusPlugin,
  maskitoCaretGuard,
  maskitoPrefixPostprocessorGenerator,
  maskitoRemoveOnBlurPlugin
} from '@maskito/kit';

function createCompletePhoneInsertionPreprocessor(): MaskitoPreprocessor {
  const trimPrefix = (value: string): string => value.replace(/^(\+?7?\s?8?)\s?/, '');
  const countDigits = (value: string): number => value.replace(/\D/g, '').length;

  return ({ elementState, data }) => {
    const { value, selection } = elementState;

    return {
      data: countDigits(data) >= 11 ? trimPrefix(data) : data,
      elementState: {
        selection,
        value: countDigits(value) > 11 ? trimPrefix(value) : value
      }
    };
  };
}

export const PhoneMask: MaskitoOptions = {
  mask: [
    '+',
    '7',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/
  ],
  plugins: [
    maskitoAddOnFocusPlugin('+7 '),
    maskitoRemoveOnBlurPlugin('+7 '),
    // Forbids to put caret before non-removable country prefix
    // But allows to select all value!
    maskitoCaretGuard((value, [from, to]) => [from === to ? '+7 '.length : 0, value.length])
  ],
  postprocessors: [
    // non-removable country prefix
    maskitoPrefixPostprocessorGenerator('+7 ')
  ],
  preprocessors: [createCompletePhoneInsertionPreprocessor()]
};
