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
        var username = "be.bolado";
        var responsePayload = {
            "id": 9013685127327373747,
            "username": "be.bolado",
            "firstName": "Bem",
            "lastName": "Bolado",
            "email": "biloxeh350@boldhut.com",
            "password": "biloxeh350",
            "phone": "1198765-4321",
            "userStatus": 0
        }
        return request(ApiUrl)
            .get("/user/" + username)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(responsePayload);
            });
    });
});

describe("GET /user/:username", () => {
    it("Search for invalid user and return 404", () => {
        var username = "mr.mxyzptlk";
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

describe("PUT /user:username", () => {
    it("Update email, password and password for user 'ratonhnhake.ton' and return 200", () => {
        var username = "ratonhnhake.ton";
        var responsePayload = {
            code: 200,
            type: "unknown",
            message: "9013685127327374000"
        }
        //ToDo: Investigate why the Return ID differs from the request ID

        return request(ApiUrl)
            .put("/user/" + username)
            .send({
                "id": 9013685127327374203,
                "username": "ratonhnhake.ton",
                "firstName": "Ratonhnhake",
                "lastName": "Ton",
                "email": "ratonhnhake.ton@creed.com",
                "password": "Creed",
                "phone": "1194567-1234",
                "userStatus": 0
            })
            .expect(200)
            .then(response => {
                expect(response.status).toEqual(200);
                expect(response.body).toEqual(responsePayload)
            });

    });
});

