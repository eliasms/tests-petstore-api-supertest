const request = require("supertest");
const ApiUrl = "https://petstore.swagger.io/v2";

describe("POST /user", () => {
    it("Create user 'John Bolt' and return 200", () => {
        return request(ApiUrl)
            .post("/user")
            .send({
                "id": 0,
                "username": "john.bolt",
                "firstName": "John",
                "lastName": "Bolt",
                "email": "john.bolt@test.com",
                "password": "Asdfg123",
                "phone": "1198765-4321",
                "userStatus": 0
            })
            .expect(200)
            .then(response => {
                expect(response.status).toEqual(200);
            });
    });
});

describe("GET /user/:username", () => {
    it("Search user 'Bem Bolado' by username and return 200", () => {
        var username="be.bolado";
        return request(ApiUrl)
            .get("/user/" + username)
            .expect(200)
            .then(response => {
                expect(response.status).toEqual(200);
                expect(response.body.firstName).toEqual("Bem");
                expect(response.body.lastName).toEqual("Bolado");
                expect(response.body.email).toEqual("biloxeh350@boldhut.com");
            });

    });
});

describe("GET /user/:username", () => {
    it("Search for invalid user and return 404", () => {
        var username="mr.mxyzptlk";
        var responsePayload = {
            code: 1,
            type: "error",
            message: "User not found"
        }

        return request(ApiUrl)
            .get("/user/" + username)
            .expect(404)
            .then(response => {
                expect(response.status).toEqual(404);
                expect(response.body).toEqual(responsePayload)
            });
    });
});



