export class ClientReq {

    private url: string; 

    constructor(url: string) {
        this.url = url;
    };

    async getRequest(path: string): Promise<Response> {
        return await fetch(this.url+path);
    }
}