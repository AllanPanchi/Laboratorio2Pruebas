const express = require('express');
const routes = require('./routes/user.routes'); 

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use('/api/users', routes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;