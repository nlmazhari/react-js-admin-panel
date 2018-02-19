import query, { serverUrl } from '../common/Query'
import axios from 'axios'

export const handleLogin = (email, password) => dispatch => {
    const reqData = {
        email,
        password,
    };
    console.log(reqData)
    // query('/api/panel/admin/login', reqData)
    //     .then(resp => {
    //         console.log('====================================');
    //         console.log('login resp', resp)
    //         console.log('====================================');
    //         if (resp.data.authenticated) {
    //             dispatch({ type: 'REQUESTED_LOGIN_SUCCEEDED', user: resp.data });
    //             window.location.pathname = '/home/dashboard'
    //         }
    //         else {
    //             alert('Your email or password is incorrect')
    //         }
    //     })
    //     .catch(error => {
    //         dispatch({ type: 'REQUESTED_LOGIN_REJECTED', message: "Invalid username or password." })
    //         alert("Invalid username or password." );   
    //     })
    window.location.pathname = '/home/dashboard'
}

export const handleLogout = () => dispatch => {
    dispatch({ type: 'REQUEST_LOGOUT' });
    localStorage['loggedIn'] = false
    window.location.pathname = '/'
}