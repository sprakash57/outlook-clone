import React from 'react';
import { IMails } from '../../interfaces';

type IProps = { mail: IMails, onSelect(id: string): void }

const MailItem: React.FC<IProps> = ({ mail, onSelect }: IProps) => {

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