import { render, screen } from '@testing-library/react';
import { INPUT_TEST_IDS, Input } from './input';
import type { InputProps } from './input';

const inputProps = {} satisfies InputProps;

describe('Input', () => {
  test('should display container', () => {
    render(<Input {...inputProps} />);

    const container = screen.getByTestId(INPUT_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display field', () => {
    render(<Input {...inputProps} />);

    const field = screen.getByTestId(INPUT_TEST_IDS.FIELD);

    expect(field).toBeInTheDocument();
  });

  test('should not display label', () => {
    render(<Input {...inputProps} />);

    const label = screen.queryByTestId(INPUT_TEST_IDS.LABEL);

    expect(label).not.toBeInTheDocument();
  });

  test('should display label', () => {
    const labelText = 'label';
    render(<Input {...inputProps} label={labelText} />);

    const label = screen.getByTestId(INPUT_TEST_IDS.LABEL);

    expect(label).toBeInTheDocument();
    expect(label.textContent).toBe(labelText);
  });
});
