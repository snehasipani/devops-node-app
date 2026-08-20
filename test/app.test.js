const request = require("supertest");
const app = require("../src/app");

describe("Application API", () => {

    test("GET / should return application information", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("DevOps Node.js Application");
    });

    test("GET /health should return healthy", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("GET /api/info should return application information", async () => {
        const response = await request(app).get("/api/info");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("DevOps CI/CD Demo");
    });

});