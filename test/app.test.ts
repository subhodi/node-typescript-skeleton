import * as request from "supertest";
import * as app from "../src/app";

describe("GET /", () => {
  it("should return 200", (done) => {
    request(app).get("/api/home")
      .expect(200, done);
  });
});

describe("POST /home", () => {
  it("should return 200", (done) => {
    request(app).post("/api/home/home")
      .expect(200, done);
  });
});