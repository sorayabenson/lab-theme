import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Ghost from './Ghost';

describe('App component', () => {

  it('renders App', () => {
    render(<Ghost />);
        
  });
});
