"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const csf_1 = require("@ezsoftech/csf");
class Server extends csf_1.AbstractServer {
    getSwaggerConfig() {
        return {
            apiBaseUrl: '/ez-auth/v1',
            yamlPath: path.resolve(__dirname, './api.yaml'),
            controllerPath: path.resolve(__dirname, './controllers'),
            protectedEndpoints: [
                '/auth/check',
                '/auth/info'
            ],
            corsEndpoints: []
        };
    }
}
exports.Server = Server;

//# sourceMappingURL=server.js.map
