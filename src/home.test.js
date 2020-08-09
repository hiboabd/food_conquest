import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Instagram Feed/i);
  expect(linkElement).toBeInTheDocument();
});
