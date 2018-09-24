export default function reducer(state = {
    user: { username: 'Create user / Login' },
    notifications: [],
    fetched: false,
    fetching: false,
    error: null,
}, action) {

    switch (action.type) {

        case "USER_GET": {
            return {...state, fetching: true}
        }

        case "LOGIN_SUCCESSFUL": {
            return {...state, fetched: true, user: action.payload, fetching: false}
        }

        case "LOGIN_REJECTED": {
            return {...state, error: action.payload, fetching: false}
        }

        case "NOTIFICATIONS_SUCCESSFUL": {
            return {...state, notifications: action.payload, fetching: false}
        }

        case "NOTIFICATIONS_REJECTED": {
            return {...state, error: action.payload, fetching: false}
        }

        case "TOKEN_SUCCESSFUL": {
            return {...state, fetching: false }
        }

        case "TOKEN_UNSUCCESSFUL": {
            return {...state, error: action.payload, fetching: false}
        }

        default: return {...state}

    }

}
