import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import { IState, IReducer, IMails } from '../../interfaces';
import { fetchMails } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import MailItem from './Mailtem';
import MailBody from './MailBody';

type IProps = { store: IReducer, fetchMails(): void }

const Mailbox: React.FC<IProps> = ({ store, fetchMails }) => {

    const [selectedMail, setSelectedMail] = useState(store.mails[0]);

    const handleSelect = (id: string) => {
        setSelectedMail(store.mails[+id]);
    }

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
                        <MailBody selected={selectedMail || store.mails[0]} />
                    </section>
                </section>
            </main>
        </>
    )
}

const mapStateToProps = (state: IState) => ({
    store: state.reducer
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ fetchMails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);