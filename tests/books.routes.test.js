const request = require("supertest");
const app = require("../src/index.js");

describe("GET /books", () => {
  it("responds with JSON array", async () => {
    const response = await request(app).get("/books");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});