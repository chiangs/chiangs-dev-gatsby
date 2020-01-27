import * as React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

test('loads the button default', async () => {
  const label = `Label`;
  const { getByTestId } = render(<Button>{label}</Button>);
});
