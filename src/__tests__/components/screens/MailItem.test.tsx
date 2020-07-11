import React from 'react';
import { render } from '@testing-library/react';
import MailItem from '../../../components/screens/Mailtem';
import { IMailItem } from '../../../interfaces';

test('renders learn react link', () => {
    const props: IMailItem = {
        mail: { id: '0', title: 'React', desc: 'desc', archived: true, recent: false, replies: [] },
        onSelect: jest.fn()
    }
    const { getByText } = render(<MailItem {...props} />);
    const title = getByText(/React/i);
    expect(title).toBeInTheDocument();
});
