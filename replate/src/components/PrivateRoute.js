import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const fetchToken = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={(props) => {
                if(fetchToken) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/' />;
                }
            }}
        />
    );
};

export default PrivateRoute;