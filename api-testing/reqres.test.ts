import { beforeAll, describe, expect, test } from 'vitest';
import { ClientReq } from './reqresUtils';


describe('Reqres api automation tests', ()=>{
    let recObj: ClientReq;

    beforeAll(()=>{
         recObj = new ClientReq('https://reqres.in/')

    })
    test('GET call - List Users', async ()=>{
        const response = await recObj.getRequest('api/users?page=2');
        expect(response.status).to.equal(200);

        const resBody = await response.json(); // convert response to a json format
        const parsedData = await JSON.parse(JSON.stringify(resBody));  // parsing the data from json response 

        //response attributes -- data attribute is list
        const dataAttribute = parsedData.data;
        console.log(dataAttribute);
        expect(dataAttribute.length).to.equal(6);

        //first data
        const firstData = dataAttribute[0]
        console.log(firstData);
        const idFirst = firstData.id;
        console.log(idFirst);
        expect(idFirst).to.equal(7);
        const nameFirst = firstData.first_name;
        expect(nameFirst).to.equal('Michael');
        const emailFirst = firstData.email;
        expect(emailFirst).to.contain('reqres.in');
    })

    test.only('POST call - CREATE', async ()=> {
        const response = await recObj.postRequest('api/users', {
            "name": "morpheus",
            "job": "leader"
        })
        expect(response.status).to.equal(201);
        const resBody: object = await response.json();
        console.log(resBody);

        const resParsed = JSON.parse(JSON.stringify(resBody));
        expect(resParsed.name).to.equal('morpheus');
        expect(resParsed.job).to.equal('leader');
        const createdAt:TimeRanges = resParsed.createdAt;
        const createdAtSplit = createdAt.toString().split("T");
        const createdDate = createdAtSplit[0];
        const dateFormat = await recObj.dateOperations(createdDate, "yyyy-mm-dd");
        expect(createdDate).to.equal(dateFormat);
        // const isValid = await recObj.isValidDate(createdDate)
        // expect(isValid).to.equal(true);    

    })
})