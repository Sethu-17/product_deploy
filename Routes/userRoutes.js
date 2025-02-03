const express = require('express');
const router = express.Router();
const userController = require('../Controller/user_ctrl'); // Adjust the path as needed

router.get('/api/user', userController.getAllUsers);
router.get('/api/user/:id', userController.getSingleUser);
router.post('/api/user', userController.createUser);
router.put('/api/user/:id', userController.updateUser);
router.delete('/api/user/:id', userController.deleteUser);

module.exports = router;
