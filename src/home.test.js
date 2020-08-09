import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/home';

test('renders home page with title', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Instagram Feed/i);
  expect(linkElement).toBeInTheDocument();
});
