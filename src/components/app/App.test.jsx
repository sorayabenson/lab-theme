/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import mockGhosts from '../../../fixtures/ghosts.json';

const server = setupServer(
  rest.get(
    'https://personal-ghosts.herokuapp.com/ghosts',
    (req, res, ctx) => {
      return res(
        ctx.json(mockGhosts)
      )
    }
  )
)

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders App', () => {
    render(<App />);

    screen.getByText('ghost flip');
    screen.getByText('flip the switch, flip the ghosts');
    const toggle = screen.getByRole('checkbox', { name: 'theme switch' });
        
  });
});
