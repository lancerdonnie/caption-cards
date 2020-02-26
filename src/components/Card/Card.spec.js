import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from './Card';
import store from '../../redux/store';

afterEach(cleanup);
it('renders', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Card caption={'i pray everyday'} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
