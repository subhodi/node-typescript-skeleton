import { Request, Response, NextFunction } from 'express';

import User from "../../models/User";

export let insert = (req: Request, res: Response, next: NextFunction) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
    });
    user.save((err) => {
        if (err) { return next(err); }
        else {
            res.send({
                status: 200,
                message: 'User data insertion successfull'
            })
        }
    });
}

export let get = (req: Request, res: Response, next: NextFunction) => {
    const find = req.params.name ? { 'name': req.params.name } : {};
    User.find(find, (err, docs) => {
        if (err) { return next(err); }
        else {
            res.send({
                status: 200,
                message: docs
            })
        }
    });
}
