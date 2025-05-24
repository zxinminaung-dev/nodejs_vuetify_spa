const e = require("express");

const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'johnsmith@gmail.com' }]

exports.GetAll = (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
}

exports.GetById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

exports.Create = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser);
}

exports.Update = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex].name = req.body.name;
        users[userIndex].email = req.body.email;
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

exports.Delete = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}   