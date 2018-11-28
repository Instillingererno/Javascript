const app = module.exports = require('express')();


app.get('/', (req, res) => {
    res.send({ msg: 'hello! Server is working' });
});


app.use('/user', require('./user'));

app.use('/auth', require('./auth'));


// Catch all routes
app.all('*', (req, res) => {
    res.status(404).send({ msg: "Not found" });
});