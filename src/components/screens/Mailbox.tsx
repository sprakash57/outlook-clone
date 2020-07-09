import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import { IState, IReducer } from '../../interfaces';
import { fetchMails, reply } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import MailItem from './Mailtem';
import MailBody from './MailBody';

type IProps = { store: IReducer, fetchMails(): void, reply(text: string, id: number): void }

const Mailbox: React.FC<IProps> = ({ store, fetchMails, reply }) => {

    const [selectedMail, setSelectedMail] = useState(store.mails[0]);

    const handleSelect = (id: string) => setSelectedMail(store.mails[+id]);
    const handleReply = (text: string, id: number) => reply(text, id);

    useEffect(() => {
        fetchMails();
    }, []);
    console.log("*****", store);
    return (
        <>
            <Navbar />
            <main className='container-fluid'>
                <section className="row">
                    <section className='col-3'>
                        {store.mails.map(mail => <MailItem key={mail.id} mail={mail} onSelect={handleSelect} />)}
                    </section>
                    <section className='col-9'>
                        <MailBody selected={selectedMail || store.mails[0]} onReply={handleReply} />
                    </section>
                </section>
            </main>
        </>
    )
}

const mapStateToProps = (state: IState) => ({
    store: state.reducer
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ fetchMails, reply }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);