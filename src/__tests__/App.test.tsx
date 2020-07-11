import React from 'react';
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({
  reducer: {
    authData: { isAuthenticated: false, msg: '', status: 500 }
  }
})

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
