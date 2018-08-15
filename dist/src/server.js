"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const path = require("path");
const ez_csf_1 = require("ez-csf");
class Server extends ez_csf_1.AbstractServer {
    getConfig() {
        return {
            port: config.get('port'),
            swagger: {
                apiBaseUrl: '/ez-auth/v1',
                yamlPath: path.resolve(__dirname, './api.yaml'),
                controllerPath: path.resolve(__dirname, './controllers'),
                protectedEndpoints: [
                    '/get-user-info'
                ],
                corsEndpoints: []
            },
            db: {
                database: '',
                host: '',
                password: '',
                user: ''
            }
        };
    }
}
exports.Server = Server;

//# sourceMappingURL=server.js.map
