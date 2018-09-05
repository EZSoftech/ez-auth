"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EZResponse {
    constructor(data, status, message) {
        if (Array.isArray(data)) {
            this.data = data;
        }
        else {
            this.data = [data];
        }
        this.status = status || true;
        this.message = message || '';
    }
}
exports.EZResponse = EZResponse;

//# sourceMappingURL=ez-response.js.map
