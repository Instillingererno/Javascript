import crypto from 'crypto';
import jwt from 'jsonwebtoken';


// Project imports
import Dao from 'Dao';



module.exports = class UserModel extends Dao {

    getUser(id, callback) {
        super.query(
            "SELECT username, password, salt FROM users WHERE user_id = ?",
            [id],
            callback
        );
    }

    createUser(username, password, salt) {
        super.query(
            "INSERT INTO users (username, password, salt) VALUES (?, ?, ?)",
            [username, password, salt],
            callback
        );
    }

    login(username, password) {

        // TODO : NOT DONE YET, NEEDS TO BE WRITTEN


        const privateKey = (publicKey = "byDis");

        function genRandomString(length) {
            return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex') // Convert to hex format
                .slice(0,length); // Return required number of characters
        }

        function sha256(password, salt) {
            let hash = crypto.createHmac('sha256', salt);
            hash.update(password);
            return hash.digest('hex');
        }

        function generateHashPassword(password) {
            let salt = genRandomString(16);
            let passwordHash = sha256(password, salt);
            return {
                salt: salt,
                hash: passwordHash
            }
        }

    }

};