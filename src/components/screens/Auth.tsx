import React, { useState } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { IState, IReducer } from '../../interfaces';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { login } from '../../actions'

interface IProps {
    login(email: string, password: string): void,
    store: IReducer
}

const Auth: React.FC<IProps> = (props) => {

    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.login(e.currentTarget.email.value, e.currentTarget.password.value);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.currentTarget.name]: e.currentTarget.value });
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
                        value={formFields.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formFields.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-primary btn-block">Enter</button>
                </div>
            </form>
        </main>
    )
}

const mapStateToProps = (state: IState) => ({
    store: state.reducer
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth);