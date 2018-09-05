import { Response, NextFunction } from 'express';
import { EZIRequest, EZIError } from '@ezsoftech/csf';
import * as authService from '../services/auth.service';
import { EZResponse } from '../models/ez-response';

export function login(req: EZIRequest, res: Response, next: NextFunction): void {
    let username = req.body.username;
    let password = req.body.password;
    authService.login(username, password).then((authInfo) => {
        res.json(new EZResponse(authInfo));
    }, (err: EZIError) => {
        res.status(err.status).json({
            message: err.message,
            stack: err.stack
        });
    });
}

export function check(req: EZIRequest, res: Response, next: NextFunction): void {
    res.json({ success: true });
}

export function info(req: EZIRequest, res: Response, next: NextFunction): void {
    res.json({ success: true });
}
