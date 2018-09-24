
export async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    console.log("Attempting fetch");
    return fetch('/login', requestOptions)
            .then(handleResponse)
            .then(user => {
                // Login fungerer hvis det følger med en JWT token
                return user;
            });
}


export async function getNotifications(username, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'x-access-token': token },
        body: JSON.stringify({ username }),
    };

    return fetch('/user/notifications/new', requestOptions)
        .then(handleResponse)
        .then(notifications => notifications)
}

export async function updateTokenForUser(username, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            'x-access-token': token },
        body: JSON.stringify({ username }),
    };

    return fetch('/user/token', requestOptions)
        .then(handleResponse)
        .then(token => token)
}


export function logout() {
    // Fjern bruker fra localstorage
    localStorage.removeItem('token');
}

function handleResponse(res) {
    console.log("Handling response", res);
    return res.text().then(text => {
        const data = text && JSON.parse(text);
        if (!res.ok) {
            if (res.status === 401) {
                // log ut if 401 (not authorized) blir returnert
                logout();
            }

            return Promise.reject(data.error);
        }

        return data;
    })
}
