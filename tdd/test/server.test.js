const supertest = require("supertest");
const request = supertest("http://localhost:3001");
test("Deve responder na pora 3001", () => {
  return request.get("/").then((res) => expect(res.status).toBe(200));
});
