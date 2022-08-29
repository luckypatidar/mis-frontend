import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

export default function PrivateRoute({ component: Component, roles, ...rest }) {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const [user, setUser] = useState(userInfo ? jwtDecode(userInfo?.token) : {});

    return (
        <Route {...rest} render={props => {
            if (!userInfo) {
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            } else {
                if (!roles.includes(user.userType))
                    return <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
            }
            return <Component {...props} />
        }} />
    )

}
