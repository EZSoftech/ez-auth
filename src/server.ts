import * as config from 'config';
import * as path from 'path';
import { AbstractServer, EZServerConfig } from 'ez-csf';

export class Server extends AbstractServer {

    getConfig(): EZServerConfig {
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
