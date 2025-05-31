const express = require('express');
const {createUser, getAllUsers} = require('../controllers/user.controller');


const router = express.Router();
// Define the routes for user operations
router.get('/', getAllUsers); // Get all users
router.post('/', createUser); // Create a new user

module.exports = router;