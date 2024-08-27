import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

/// https://www.npmjs.com/package/joi?activeTab=readme
export function validate(schema: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}
