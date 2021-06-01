const express = require('express');
const router = express.Router();
const usersController = require('./controller');

router.get('/api/v1/users', usersController.getAllUsers);
router.get('/api/v1/users/:id' , usersController.getUser);
router.post('/api/v1/users' , usersController.addUser);
router.put('/api/v1/users/:id' , usersController.editUser);
router.delete('/api/v1/users/:id' , usersController.deleteUser);

module.exports = router;