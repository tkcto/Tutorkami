import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export default function (req: Request, res: Response, next: NextFunction) {
    const errorFormatter = ({
        location,
        msg,
        param,
        value,
        nestedErrors,
    }: ValidationError) => {
        return { param: param, location: location, message: msg };
    };

    const errors = validationResult(req).formatWith(errorFormatter);

    if (!errors.isEmpty()) {
        const result = {
            status: 1,
            code: 400,
            error: errors.array({ onlyFirstError: true }),
        };

        return res.status(result.code).json(result);
    }

    next();
}
