import { Swagger20Request as SwaggerRequest } from 'swagger-tools';
import { Response, NextFunction } from 'express';

export function login(req: SwaggerRequest<any>, res: Response, next: NextFunction): void {
    res.json({ success: true });
}
