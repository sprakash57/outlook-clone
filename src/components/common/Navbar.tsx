/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { logout } from '../../actions';
import { IReducer, IState, IMails } from '../../interfaces';

type IProps = { logout(): void, store: IReducer }
type ILocal = { recent: IMails[], archived: IMails[] }


const Navbar: React.FC<IProps> = ({ store, logout }) => {

    const [headerItems, setHeaderItems] = useState<ILocal>({
        recent: [],
        archived: []
    })

    const handleExit = () => {
        logout();
        window.location.reload();
    }

    useEffect(() => {
        if (store.mails.length) {
            const recent = store.mails.filter(mail => mail.recent === true);
            const archived = store.mails.filter(mail => mail.archived === true);
            setHeaderItems({ ...headerItems, recent, archived })
        }
    }, [store.mails]);

    const { recent, archived } = headerItems;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <div className="nav-link">New {recent.length}</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Archived {archived.length}</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Total {store.mails.length}</div>
                    </li>
                </ul>
                <form className="form-inline">
                    <Input type="search" name="search" placeholder="Search" />
                    <button type='button' className="btn btn-danger ml-3" onClick={handleExit}>Exit</button>
                </form>
            </div>
        </nav>
    )
}

const mapStateToProps = (state: IState) => ({ store: state.reducer });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);