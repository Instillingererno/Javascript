
module.exports = class Dao {

    constructor(pool) {
        this.pool = pool;
    }

    query(sql, params, callback) {

        this.pool.getConnection((err, connection) => {
            console.log("dao: Connected to db");

            if (err) {
              console.log("dao: Error connecting");
                callback(500, { error: "DB Connection failed" });
            } else {
                console.log(`dao: Running query: ${sql}`);
                connection.query(sql, params, (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        callback(500, { error: "Error querying " });
                    } else {
                        console.log("dao: Returning rows");
                        callback(200, rows);
                    }
                });
            }
        });
    }
};