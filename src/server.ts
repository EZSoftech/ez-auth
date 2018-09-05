import * as config from 'config';
import * as path from 'path';
import { AbstractServer, EZISwaggerConfig } from '@ezsoftech/csf';

export class Server extends AbstractServer {

    getSwaggerConfig(): EZISwaggerConfig {
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
