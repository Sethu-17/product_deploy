const User = require('../Model/user'); // Assuming your User model is saved as user.js

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Get a single user by ID or email
exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }); // Or use email here, like { email: req.params.id }
        if (!user) return res.status(404).json({ msg: 'User not found' });

        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: 'Email already exists' });

        // Create new user
        const newUser = new User({ name, email, password, role });
        await newUser.save();

        res.status(201).json(newUser); // Send 201 status for successful creation
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Update user details
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) return res.status(404).json({ msg: 'User not found' });

        res.json({ msg: 'User updated successfully', updatedUser });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Optional: Delete user (just in case)
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ msg: 'User not found' });

        res.json({ msg: 'User deleted successfully', deletedUser });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
