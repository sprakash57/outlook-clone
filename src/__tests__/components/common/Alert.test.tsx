import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../../components/common/Alert';

test('renders learn react link', () => {
    const { getByText } = render(<Alert msg='dummy text' status={200} />);
    const msg = getByText(/dummy text/i);
    expect(msg).toBeInTheDocument();
});
