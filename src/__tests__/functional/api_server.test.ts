import request from "supertest";

describe("Server test", () => {
  beforeAll(async () => {});

  it("should health check", async () => {
    expect(
      await (
        await request(global.testServer).get("/health")
      ).statusCode
    ).toEqual(200);
  });

  it("should health check ping pong", async () => {
    expect(
      await (
        await request(global.testServer).get("/ping")
      ).text
    ).toMatchInlineSnapshot('"pong"');
  });

  it("should not found", async () => {
    expect(
      await (
        await request(global.testServer).get(
          "/W%#$ERTGFBSETRASTDGBVCadsgvberewd"
        )
      ).statusCode
    ).toEqual(400);
  });

  it("should returns header of who makes request", async () => {
    const customHeader = {
      tic: "tac",
      ping: "pong",
      good: "programmer",
      super: "test",
    };

    const response = await request(global.testServer)
      .get("/who")
      .set(customHeader);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(customHeader);
  });
});
