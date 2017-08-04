const User = require('../db/models').User;
const Books = require('../db/models').Books;

const create = (req, res) => {
    return User
        .create({ username: req.body.username })
        .then(user => res.status(201).send(user))
        .catch(err => res.status(400).send(err));
};

const retrieveAll = (req, res) => {
    return User
        .all()
        .then(users => res.status(200).send(users))
        .catch(err => res.status(400).send(err));
};

/* Books borrowed by user */
const showBorrow = (req, res) => {
    const id = parseInt(req.params.userId);

    return User
        .findById(id, {
            include: [{
                model: Books,
                as: 'books'
            }]
        })
        .then(books => {
            if (!books) {
                return res.status(404).send({
                    message: 'Not found'
                });
            }
            return res.status(200).send(books);
        })
        .catch(err => res.status(400).send(err));
};

/* User borrow book */
const borrow = (req, res) => {
    const userId = parseInt(req.params.userId);

    return Books
        .create({
            title: req.body.title
        })
        .then(books => res.status(201).send(books))
        .catch(err => res.status(400).send(err));
};

module.exports = {
    create,
    retrieveAll,
    showBorrow,
    borrow
};
