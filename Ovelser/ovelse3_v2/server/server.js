import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';



// Project imports
import routes from 'routes';


const server = express();
server.use(express.static('build'));
server.use(bodyParser.json());


// MySQL init
const pool = mysql.createPool({
    connectionLimit: 2,
    host: "mysql.stud.iie.ntnu.no",
    user: "sveinuov",
    password: "44joRTCx",
    database: "sveinuov",
    debug: false
});


// Routing
app.use('/api', routes);



const port = process.env.PORT || 3000;

console.log("Listening on port: " + port);
server.listen(port);


/*

// Håndterer login og sender JWT-token tilbake som JSON
server.post("/login", (req, res) => {
    console.log("Attempting login for user: " + req.body.username);
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("DB error: " + err);
            res.status(500);
            res.json({ error: "Unable to fetch db connection" });
        } else {
            connection.query(
                "SELECT * FROM users WHERE username = ?", [req.body.username],
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.status(404);
                        res.json({ error: "User doesn't exist" });
                    } else {
                        if (rows[0].password === sha256(req.body.password, rows[0].salt)) {
                            console.log("Attempt was successful");
                            let token = jwt.sign({ username: req.body.username }, privateKey, {
                                expiresIn: 60*30  // Expires in 30 minutes
                            });
                            res.json({ jwt: token, username: rows[0].username });
                        } else {
                            console.log("Attempt was unsuccessful");
                            res.status(401);
                            res.json({ error: "Wrong username or password" });
                        }
                    }
                }
            )
        }
    });
});


// Plasser denen MIDDLEWARE-funksjonen
// foran alle endepunktene under samme path
server.use("/api", (req, res, next) => {
    let token = req.headers["x-access-token"];

    jwt.verify(token, publicKey, (err, decoded) => {
        if (err) {
            console.log("Token was NOT accepted");
            res.status(401);
            res.json({ error: "Not authorized" });
        } else {
            console.log("Token was accepted for user: " + decoded.username);
            next();
        }
    });
});

server.get("/api/person", (req, res) => {
    // TODO: Skal returnere en liste med personer
    res.json([{ name: "Heisann" }]);
});

server.get("/api/person/:personId", (req, res) => {
    // TODO: Skal returnere personen med id req.params.personId
    res.josn({ name: "Heisann" });
});

server.post("/api/person", (req, res) => {
    // TODO: SKal legge til en ny person i DB
    res.send("");
});


*/


