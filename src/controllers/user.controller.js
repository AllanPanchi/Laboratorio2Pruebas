// controllers/user.controller.js

let users = []; // <-- Esta variable global

function getAllUsers(req, res) {
    res.json(users);
}

function createUser(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    const newUser = {
        id: Date.now(), // Simple ID generation
        name,
        email
    };

    users.push(newUser);

    return res.status(201).json(newUser);
}

module.exports = {
    getAllUsers,
    createUser,
};