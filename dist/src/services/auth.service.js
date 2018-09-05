"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const csf_1 = require("@ezsoftech/csf");
const REFRESH_TOKENS = new Map();
function login(username, password) {
    return new Promise((resolve, reject) => {
        let queryString = `
        SELECT
            *
            FROM
                ezi_user
            WHERE
                username = '${username}'
        `;
        csf_1.dbo.query(queryString, true).then(result => {
            if (result.length > 0) {
                if (result[0].password === password) {
                    let accessToken = csf_1.generateAccessToken({ username: username, password: password });
                    let refreshToken = csf_1.generateRefreshToken();
                    REFRESH_TOKENS.set(username, refreshToken);
                    resolve({
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    });
                }
                else {
                    reject(new csf_1.EZIError(401, 'Invalid password'));
                }
            }
            else {
                reject(new csf_1.EZIError(404, 'Invalid username'));
            }
        }, (err) => {
            reject(err);
        });
    });
}
exports.login = login;

//# sourceMappingURL=auth.service.js.map
