import React, { useState } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { logout } from '../../actions';
import { IReducer, IState } from '../../interfaces';

type IProps = { logout(): void, store: IReducer }

const Navbar: React.FC<IProps> = ({ store, logout }) => {

    const handleExit = () => {
        logout();
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <div className="nav-link">New</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Archived</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Total</div>
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