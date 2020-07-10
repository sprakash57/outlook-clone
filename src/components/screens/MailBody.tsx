/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { IMails } from '../../interfaces';
import Alert from '../common/Alert';

type IProps = { selected: IMails, onReply(reply: string, id: number): void, onDelete(id: string): void, onArchive(id: string): void };

const MailBody: React.FC<IProps> = ({ selected, onReply, onDelete, onArchive }) => {

    const [hasReplied, setHasReplied] = useState(false);
    const [reply, setReply] = useState('');
    const [deleted, setDeleted] = useState(false);
    const [archived, setArchived] = useState(selected?.archived);

    const handleReply = () => setHasReplied(true);
    const handleCancel = () => setHasReplied(false);
    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => setReply(e.currentTarget.value);
    const handleSend = () => {
        onReply(reply, +selected.id);
        setHasReplied(false);
        setReply('');
    }
    const handleDelete = () => {
        onDelete(selected.id);
        setDeleted(true);
    }
    const handleArchive = () => {
        onArchive(selected.id);
        setArchived(!archived);
    }

    const renderReplies = () => {
        if (selected?.replies.length) {
            return selected.replies.map((reply: string, i) => (
                <article className="row" key={i}>
                    <ReactMarkdown source={reply} />
                    <hr />
                </article>
            ))
        }
        return null;
    }

    const renderBody = () => (
        <article className="row">
            <p>{selected?.id}</p>
            <section className="col">
                <ReactMarkdown source={selected?.desc} />
            </section>
        </article>
    )

    const renderContent = () => {
        if (deleted) return <Alert msg="Mail has been deleted" status={200} />
        if (hasReplied) {
            return (
                <>
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
                    {renderReplies()}
                    {renderBody()}
                </>
            )
        }

        return (
            <>
                <article className="row">
                    <section className="col">
                        <button className="btn btn-success" onClick={handleReply}>Reply</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        <button className={`btn btn-${archived ? 'secondary' : 'primary'}`} onClick={handleArchive}>{`Archive${archived ? 'd' : ''}`}</button>
                    </section>
                </article>
                {renderReplies()}
                {renderBody()}
            </>
        )
    }
    useEffect(() => {
        setDeleted(false);
        setArchived(selected?.archived);
    }, [selected?.id])

    return (
        <section className='container mt-3'>
            {renderContent()}
        </section>
    )
}

export default MailBody;
