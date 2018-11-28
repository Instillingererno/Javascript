
const { auth } = require('../actions/auth');

function loggedIn(req, res, next) {
    const authKey = getAuthKeyFromRequest(req);

    auth.check(authKey)
        .then((user) => {
            req.user = user;
            req.authKey = authKey;
            next();
        })
        .catch((err) => {
            res.status(401).send({ error: err })
        })
}

function loggedOut(req, res, next) {
    const authKey = getAuthKeyFromRequest(req);

    auth.check(authKey)
        .then((user) => {
            res.status(400).send({ msg: "Already logged in" });
        })
        .catch(() => next());
}


function getAuthKeyFromRequest(req) {
    return req.header["x-access-token"];
}

module.exports = {
    loggedIn,
    loggedOut
};