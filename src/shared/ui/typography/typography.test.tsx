import { render, screen } from '@testing-library/react';

import type { TypographyProps, TypographyTag } from './typography';
import { TYPOGRAPHY_TEST_IDS, Typography } from './typography';

const typographyProps = {
  children: 'typography text',
  variant: 'title-1'
} satisfies TypographyProps<TypographyTag>;

describe('Typography variants', () => {
  const typographyVariants: TypographyProps<TypographyTag>['variant'][] = [
    'title-1',
    'title-2',
    'title-3',
    'body-base',
    'body-lg',
    'body-xl',
    'body-2xl'
  ];

  typographyVariants.forEach((typographyVariant) => {
    test(`should correct show ${typographyVariant} variant when provided`, () => {
      render(<Typography {...typographyProps} variant={typographyVariant} />);

      const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

      expect(container).toHaveClass(typographyVariant);
    });
  });
});

describe('Typography', () => {
  test('should render div tage by default', () => {
    render(<Typography {...typographyProps} />);

    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

    expect(container.tagName).toBe('DIV');
  });
});
