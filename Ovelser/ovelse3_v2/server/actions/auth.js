import crypto from 'crypto';
import jwt from 'jsonwebtoken';




import { findUserByUsername, findUserById } from './users';


function signup(data) {

}

function validateSignUpData(data) {

}

function login(username, pwd) {

}

function check(authKey) {

}

function logout(authKey) {

}

function generateUniqueAuthToken(user) {
    
}




module.exports = {
    login,
    check,
    logout,
    signup,
};

