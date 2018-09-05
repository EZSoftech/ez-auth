import * as Promise from 'bluebird';
import {
    dbo,
    EZIError,
    generateAccessToken,
    generateRefreshToken
} from '@ezsoftech/csf';

const REFRESH_TOKENS: Map<string, string> = new Map();

export function login(username: string, password: string): Promise<any> {
    return new Promise<any>((resolve: (authInfo: any) => void, reject: (err: EZIError) => void) => {
        let queryString = `
        SELECT
            *
            FROM
                ezi_user
            WHERE
                username = '${username}'
        `;
        dbo.query(queryString, true).then(result => {
            if (result.length > 0) {
                if (result[0].password === password) {
                    let accessToken = generateAccessToken({ username: username, password: password });
                    let refreshToken = generateRefreshToken();
                    REFRESH_TOKENS.set(username, refreshToken);
                    resolve({
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    });
                } else {
                    reject(new EZIError(401, 'Invalid password'));
                }
            } else {
                reject(new EZIError(404, 'Invalid username'));
            }
        }, (err) => {
            reject(err);
        });
    });
}
