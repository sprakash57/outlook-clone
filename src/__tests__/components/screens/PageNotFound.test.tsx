import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from '../../../components/screens/PageNotFound';

test('renders learn react link', () => {
    const { getByText } = render(<PageNotFound />);
    const msg = getByText(/Looks like/i);
    expect(msg).toBeInTheDocument();
});
