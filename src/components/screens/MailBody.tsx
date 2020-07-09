import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { IMails } from '../../interfaces';

type IProps = { selected: IMails, onReply(reply: string, id: number): void };

const MailBody: React.FC<IProps> = ({ selected, onReply }) => {

    const [hasReplied, setHasReplied] = useState(false);
    const [reply, setReply] = useState('');

    const handleReply = () => setHasReplied(true);
    const handleCancel = () => setHasReplied(false);
    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => setReply(e.currentTarget.value);
    const handleSend = () => {
        onReply(reply, +selected.id);
        setHasReplied(false);
        setReply('');
    }

    return (
        <>
            {hasReplied
                ? <>
                    <article className="row">
                        <section className="col">
                            <button className="btn btn-success" onClick={handleSend}>Send</button>
                            <button className="btn btn-info" onClick={handleCancel}>Cancel</button>
                        </section>
                    </article>
                    <article className="row">
                        <section className="col">
                            <textarea className="form-control" rows={4} value={reply} onChange={handleChange} />
                        </section>
                    </article>
                </>
                : <article className="row">
                    <section className="col">
                        <button className="btn btn-success" onClick={handleReply}>Reply</button>
                        <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-primary">Archive</button>
                    </section>
                </article>
            }
            {selected?.replies.length
                ? selected.replies.map((reply: string, i) => (
                    <article className="row" key={i}>
                        <ReactMarkdown source={reply} />
                        <hr />
                    </article>
                ))
                : null
            }
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
