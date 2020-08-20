import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/home';
import NavigationBar from './components/navbar';



it('renders instagram feed page when instgram feed link clicked', () => {
  const { getByTestId } = render(<Home/>);


});

it('renders favourites page when favourites link clicked', () => {
  const { getByTestId } = render(<Home />);


});
