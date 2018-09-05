export class EZResponse {
    status: boolean;
    message: string;
    data: Array<any>;

    constructor(data: Array<any>, status?: boolean, message?: string) {
        if (Array.isArray(data)) {
            this.data = data;
        } else {
            this.data = [data];
        }
        this.status = status || true;
        this.message = message || '';
    }

}
