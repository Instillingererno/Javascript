const app = module.exports = require('express')();

const { loggedIn, loggedOut } = require('../auth');

const { login, logout, refresh, register } = require('../actions/').auth;

app.post('/register', (req, res) => {
    register(req.body)
        .then((token, username) => res.json({
            jwt: token,
            username: username,
        }))
        .catch((err) => {
            res.status(400).json({ error: "Register failed", err });
        });
});

app.post('/login', loggedOut, (req, res) => {
    login(req.body)
        .then((token, username) => res.json({
            jwt: token,
            username: username,
        }))
        .catch(() => {
            res.status(400).send({ error: "Login failed" });
        });
});

app.get('/logout', loggedIn, (req, res) => {
    logout(req.authKey).then(() => res.send({ error: 'logged out' }));
});