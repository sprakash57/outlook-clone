import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../interfaces';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, store, ...rest }: any) => {
    return <Route {...rest} render={props => store.isAuthenticated
        ? React.createElement(component, props)
        : <Redirect to='/' />
    }
    />
}
const mapStateToProps = (state: IState) => ({
    store: state.reducer.authData
});

export default connect(mapStateToProps)(PrivateRoute);
