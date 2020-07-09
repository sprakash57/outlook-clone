import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import { IState, IReducer, IMails } from '../../interfaces';
import { fetchMails, reply, deleteMail } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import MailItem from './Mailtem';
import MailBody from './MailBody';

type IProps = { store: IReducer, fetchMails(): void, reply(text: string, id: number): void, deleteMail(id: string): void }

const Mailbox: React.FC<IProps> = ({ store, fetchMails, reply, deleteMail }) => {

    const [selectedMail, setSelectedMail] = useState<IMails>();

    const handleSelect = (id: string) => {
        const mail = store.mails.find((mail: IMails) => mail.id === id);
        setSelectedMail(mail);
    }
    const handleReply = (text: string, id: number) => reply(text, id);
    const handleDelete = (id: string) => deleteMail(id);

    useEffect(() => {
        fetchMails();
    }, []);

    return (
        <>
            <Navbar />
            <main className='container-fluid'>
                <section className="row">
                    <section className='col-3'>
                        {store.mails.map(mail => <MailItem key={mail.id} mail={mail} onSelect={handleSelect} />)}
                    </section>
                    <section className='col-9'>
                        <MailBody
                            selected={selectedMail || store.mails[0]}
                            onReply={handleReply}
                            onDelete={handleDelete}
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ fetchMails, reply, deleteMail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);