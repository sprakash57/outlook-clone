import React from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { IState, IReducer } from '../../interfaces';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { login } from '../../actions'
import Alert from '../common/Alert';
import { Redirect } from 'react-router-dom';

type IProps = {
    login(email: string, password: string): void,
    store: IReducer
}

const Auth: React.FC<IProps> = (props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.login(e.currentTarget.email.value, e.currentTarget.password.value);
    }

    const { message, status, isAuthenticated } = props.store.authData;

    if (isAuthenticated) {
        return <Redirect to='/mailbox' />
    }

    return (
        <main className='login-form'>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center mb-5">Login</h5>
                <div className="form-group">
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-primary btn-block">Enter</button>
                </div>
            </form>
            {message && <Alert msg={message} status={status} />}
        </main>
    )
}

const mapStateToProps = (state: IState) => ({
    store: state.reducer
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
