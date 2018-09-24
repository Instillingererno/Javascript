import { login, getNotifications, updateTokenForUser } from '../services';


export function loginUser(username, password, callback = () => {}) {
    return dispatch => {
        console.log("Dispatching request");
        dispatch(request());

        console.log("Running login from services");
        login(username, password)
            .then(user => {
                console.log("Login was successful, dispatching success");
                dispatch(success(user));
                localStorage.setItem('token', user.jwt);
                localStorage.setItem('user', JSON.stringify(user));
                callback(true);
            }, error => {
                console.log("Login was unsuccessful, dispatching failure");
                dispatch(failure(error));
                callback(false);
            })
    };

    function request() { return { type: "USER_GET" } }
    function success(user) { return { type: "LOGIN_SUCCESSFUL", payload: user } }
    function failure(error) { return { type: "LOGIN_REJECTED", payload: error } }
}

export function getNewNotifications(username, callback = () => {}) {
    return dispatch => {
        console.log("Dispatching request");
        dispatch(request());

        console.log("Running getNotifications from services");
        getNotifications(username, localStorage.getItem("token"))
            .then(notifications => {
                console.log("Get notifications was successful, dispatching success");
                dispatch(success(notifications));
                callback(true);
            }, error => {
                console.log("Get notifications was unsuccessful, dispatching failure");
                dispatch(failure(error));
                callback(false);
            });

    };

    function request() { return { type: "USER_GET" } }
    function success(notifications) { return { type: "NOTIFICATIONS_SUCCESSFUL", payload: notifications } }
    function failure(error) { return { type: "NOTIFICATIONS_REJECTED", payload: error } }
}

export function updateToken(username, callback = () => {}) {
    return dispatch => {
        console.log("Dispatching request");
        dispatch(request());

        console.log("Running updateToken from services");
        updateTokenForUser(username, localStorage.getItem("token"))
            .then(response => {
                console.log("Updating token was successful, dispatching success");
                localStorage.setItem("token", response.jwt);
                callback(true);
            }, error => {
                console.log("Updating token was unsuccessful, dispatching failure");
                dispatch(failure(error));
                callback(false);
            })
    };

    function request() { return { type: "USER_GET" } }
    function success(token) { return { type: "TOKEN_SUCCESSFUL", payload: token } }
    function failure(error) { return { type: "TOKEN_UNSUCCESSFUL", payload: error } }
}
