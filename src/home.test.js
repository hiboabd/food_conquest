import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import Home from './components/home';
const axios = require('axios')

jest.mock('axios')

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({
    data:
      {
        data: [
          {
            id: 1,
            media_type: 'Test media type',
            media_url: 'Test media url',
          },
          {
            id: 2,
            media_type: 'Test media type',
            media_url: 'Test media url',
          }
        ]
      }
  }))
})

afterEach(cleanup)

it('renders home page with title', async () => {
  await act( async () => {
    const { findByText } = render(<Home />);
    const textElement = await findByText(/Check out my instagram for more/i);
    expect(textElement).toBeInTheDocument();
  });

});

it('returns home page with two image posts', async () => {
  await act( async () => {
    const {findAllByAltText } = render(<Home />);
    const items = await findAllByAltText(/instagram post/)
    expect(items).toHaveLength(2)
  });
});
