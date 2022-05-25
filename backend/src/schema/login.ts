import { body } from 'express-validator';

const post_local = [
    body('email').isEmail().withMessage(`email should be a valid email`),
    body('password')
        .isAlphanumeric()
        .withMessage(`password is required`)
        .isLength({ min: 5 })
        .withMessage(`password should be at least 5 characters length`),
    body('group')
        .isIn(['Super', 'Admin', 'Client', 'Tutor'])
        .withMessage(`group should be one of: [Super, Admin, Client, Tutor]`),
];

export default {
    post_local,
};
