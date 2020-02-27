import React from 'react'
import { render } from '@testing-library/react'
import About from './views/About'

test('Render about text', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/Hi I'm/i);
  expect(linkElement).toBeInTheDocument();
});
