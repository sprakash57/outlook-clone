import React from 'react';
import { IMailItem } from '../../interfaces';

const MailItem: React.FC<IMailItem> = ({ mail, onSelect }) => {

    const handleClick = () => {
        onSelect(mail.id);
    }

    return (
        <article className="row mail-item" onClick={handleClick}>
            <section className="col">
                <h4>{mail.title}</h4>
                <small>{mail.desc.substring(0, 80)}...</small>
            </section>
        </article>
    )
}

export default MailItem;