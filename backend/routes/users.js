const router = require('express').Router();
let User = require('../models/user.model');

// url in this case will be: .../users/
router.route('/').get((req, res) => { 
    User.find() // a mongoose method to list all users in database
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// url in this case will be: .../users/add
router.route('/add').post((req, res) => { 
    const username = req.body.username;
    const newUser = new User({ username });
    newUser.save() // save new user to database
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;