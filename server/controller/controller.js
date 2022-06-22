var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    const value = req.body;
    console.log(value);

    if (!req.body) {
        res.status(400).send({
            mesage: 'Content can not be entity'
        });
        return;
    }
    const name = req.body.name;
    console.log(name);
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // Save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');

        })
        .catch(err => {
            res.status(400).send({
                mesage: err.mesage || 'Error creating a create operation'
            });
        })
}

// ===================
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);

    Userdb.findById(id)
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: `Can not find user with ${id}`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error get one user!!!'
            })
        })
}
// ===================

// retrieve and return all users/ single user
exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
            console.log(user)
        })
        .catch(err => {
            res.status(500).send({
                mesage: err.mesage || 'Error get info!'
            });
        })
}

// Update a new users by user id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            mesage: 'Update can not be entity'
        });
    }
    const id = req.params.id;
    console.log(id);
    Userdb.findByIdAndUpdate(id, {
            $set: req.body
        }, {
            new: true
        })
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: `Can not update user with ${id}`
                })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error update!!!'

            })
        })
}

// Delete a user by id
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: `Can not Delete user with ${id}`
                })
            } else {
                res.send({
                    message: 'Delete success!!!'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error delete!!!'
            })
        })
}