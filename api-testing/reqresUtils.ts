export class ClientReq {

    private url: string;

    constructor(url: string) {
        this.url = url;
    };

    async getRequest(path: string): Promise<Response> {
        return await fetch(this.url + path);
    }

    async postRequest(path: string, body: object): Promise<Response> {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        return await fetch(this.url + path, requestOptions);
    }

    async dateOperations(dateInput: string, format: string): Promise<string> {
        let dateObj = new Date(dateInput);
        let day = dateObj.getDate();
        const dayFinal = day < 10 ? '0' + day : day;
        let month = dateObj.getMonth() + 1;
        const monthFinal = month < 10 ? '0' + month : month;
        let year = dateObj.getFullYear();
        let finalDate: string= "";

        if (format === 'yyyy-mm-dd') {
            finalDate = `${year}-${monthFinal}-${dayFinal}`;
        } else if (format === 'dd/mm/yyyy') {
            finalDate = `${dayFinal}-${monthFinal}-${year}`;
        }

        return finalDate;

    }

    async isValidDate(stringDate: string) {
        const regex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/;
        return regex.test(stringDate);
    }
}