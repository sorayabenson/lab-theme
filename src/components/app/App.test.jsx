/**
 * @jest-environment jsdom
 */

import React from 'react';
import { findAllByRole, render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event'
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

  it('renders App', async () => {
    render(<App />);

    await screen.findByText('ghost flip');
    await screen.findByText('flip the switch, flip the ghosts');
    const toggle = await screen.findByRole('checkbox', { name: 'theme switch' });
    
    const ul = await screen.findByRole('list', { name: 'ghosts' });
    await screen.findAllByRole('listitem', { name: 'ghost' });
    expect(ul).toMatchSnapshot();
    
    await screen.findAllByTestId('up');

    userEvent.click(toggle);

    await screen.findAllByTestId('down');
  });
});
