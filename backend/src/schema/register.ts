import { body } from 'express-validator';

const post_local = [
    body('email').isEmail().withMessage(`email should be a valid email`),
    body('name')
        .isAlpha(undefined, {
            ignore: ' -',
        })
        .withMessage(`name should be an alpha character`),
    body('group')
        .isIn(['Client', 'Tutor'])
        .withMessage(`group should be one of: [Client, Tutor]`),
    body('password')
        .isAlphanumeric()
        .withMessage(`password is required`)
        .isLength({ min: 5 })
        .withMessage(`password should be at least 5 characters length`),
];

export default {
    post_local,
};
