let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

let pool = mysql.createPool({
    connectionLimit: 2,
    host: 'mysql.stud.iie.ntnu.no',
    user: 'nilstesd',
    password: 'lqqWcMzq',
    database: 'nilstesd',
    debug: false
});

app.get('/person', (req, res) => {
   console.log('Got /person request from user');
   pool.getConnection((err, connection) => {
       console.log('Connected to database');
       if (err) {
           console.log('Error when connecting to db');
           res.json({ error: 'Error when connecting' });
       } else {
           connection.query(
               'SELECT navn, alder, adresse FROM person',
               (err, rows) => {
                   connection.release();
                   if (err) {
                       console.log(err);
                       res.json({ error: 'Error querying' });
                   } else {
                       console.log(rows);
                       res.json(rows);
                   }
               }
           )
       }
   })
});

app.get('/person/:personId', (req, res) => {
    console.log('Got /person request from user');
    pool.getConnection((err, connection) => {
        console.log('Connected to database');
        if (err) {
            console.log('Error when connecting to db');
            res.json({ error: 'Error when connecting' });
        } else {
            connection.query(
                'SELECT navn, alder, adresse FROM person WHERE id=?',
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.json({ error: 'Error querying' });
                    } else {
                        console.log(rows);
                        res.json(rows);
                    }
                }
            )
        }
    })
});

app.post('/person', (req, res) => {
    console.log('Got POST-request from user');
    console.log('Name: ' + req.body.name);
    pool.getConnection((err, connection) => {
        if(err) {
            console.log('Error at db connection');
            res.json({ error: 'Error at db connection' });
        } else {
            console.log('Received connection');
            let val = [req.body.name, req.body.address, req.body.age];
            connection.query(
                'INSERT INTO person (navn, adresse, alder) VALUES (?,?,?)',
                val,
                err => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({error: 'Error at insert'});
                    } else {
                        console.log('Insert ok');
                        res.send('');
                    }
                }
            )
        }
    })
});

let server = app.listen(8080, () => console.log('App listening on port 8080'));