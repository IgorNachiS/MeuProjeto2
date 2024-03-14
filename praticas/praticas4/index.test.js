const supertest = require("supertest");

const app = require("./index");

const request = supertest(app);

test("Você fez uma requisição GET /", async function () {
  const response = await request.get("/");
  expect(response.status).toBe(200);
});

test("Você fez uma requisição POST /", async function () {
  const response = await request.post("/");
  expect(response.status).toBe(201);
});

test("Você fez uma requisição PUT /", async function () {
  const response = await request.put("/");
  expect(response.status).toBe(200);
});

test("204 /", async function () {
  const response = await request.delete("/");
  expect(response.status).toBe(204);
});
