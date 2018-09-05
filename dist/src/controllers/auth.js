"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authService = require("../services/auth.service");
const ez_response_1 = require("../models/ez-response");
function login(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    authService.login(username, password).then((authInfo) => {
        res.json(new ez_response_1.EZResponse(authInfo));
    }, (err) => {
        res.status(err.status).json({
            message: err.message,
            stack: err.stack
        });
    });
}
exports.login = login;
function check(req, res, next) {
    res.json({ success: true });
}
exports.check = check;
function info(req, res, next) {
    res.json({ success: true });
}
exports.info = info;

//# sourceMappingURL=auth.js.map
