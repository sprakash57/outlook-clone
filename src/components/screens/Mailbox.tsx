/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import { IState, IReducer, IMails } from '../../interfaces';
import { fetchMails, reply, deleteMail, archiveMail } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import MailItem from './Mailtem';
import MailBody from './MailBody';

type IProps = {
    store: IReducer,
    fetchMails(): void,
    reply(text: string, id: number): void,
    deleteMail(id: string): void,
    archiveMail(id: string): void
}

const Mailbox: React.FC<IProps> = ({ store, fetchMails, reply, deleteMail, archiveMail }) => {

    const [selectedMail, setSelectedMail] = useState<IMails>();
    const [serchedMail, setSearchedMail] = useState<IMails[]>();

    const handleSelect = (id: string) => {
        const mail = store.mails.find((mail: IMails) => mail.id === id);
        setSelectedMail(mail);
    }
    const handleReply = (text: string, id: number) => reply(text, id);
    const handleDelete = (id: string) => deleteMail(id);
    const handleArchive = (id: string) => archiveMail(id);
    const handleSearch = (searched: IMails[]) => {
        setSearchedMail(searched);
    }

    const renderMails = () => {
        let renderEl = store.mails;
        if (serchedMail?.length) renderEl = serchedMail;
        return renderEl.map(mail => <MailItem key={mail.id} mail={mail} onSelect={handleSelect} />);
    }

    useEffect(() => {
        fetchMails();
    }, []);

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <main className='container-fluid'>
                <section className="row">
                    <section className='col-3'>
                        {renderMails()}
                    </section>
                    <section className='col-9'>
                        <MailBody
                            selected={selectedMail || store.mails[0]}
                            onReply={handleReply}
                            onDelete={handleDelete}
                            onArchive={handleArchive}
                        />
                    </section>
                </section>
            </main>
        </>
    )
}

const mapStateToProps = (state: IState) => ({
    store: state.reducer
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    fetchMails, reply, deleteMail, archiveMail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);