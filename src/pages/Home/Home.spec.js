import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../../redux/store';

afterEach(cleanup);
it('renders', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  const head = getByText('Caption Cards');
  expect(head.textContent).toBe('Caption Cards');
});
