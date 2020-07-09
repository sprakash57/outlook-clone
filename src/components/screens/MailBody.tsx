import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IMails } from '../../interfaces';

type IProps = { selected: IMails };

const MailBody: React.FC<IProps> = ({ selected }) => {
    return (
        <>
            <article className="row">
                <section className="col">
                    <button className="btn btn-success">Reply</button>
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-primary">Archive</button>
                </section>
            </article>
            <article className="row">
                <p>{selected?.id}</p>
                <section className="col">
                    <ReactMarkdown source={selected?.desc} />
                </section>
            </article>
        </>
    )
}

export default MailBody;
