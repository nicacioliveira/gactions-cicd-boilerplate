import MovieService from "../../../../services/movie.service";

describe("Movie Service", () => {
  it("should get movie", async () => {
    const res = await MovieService.get("1234");
    expect(res).toMatchObject({ id: "1234" });
  });

  it("should throw get movie error", async () => {
    const fx = () => MovieService.get();
    expect(fx).rejects.toThrowError("id not provided");
  });

  it("should create movie", async () => {
    const res = await MovieService.create({ name: "Lalaland" });
    expect(res).toMatchObject({ name: "Lalaland" });
  });

  it("should throw create movie error", async () => {
    const fx = () => MovieService.create({});
    expect(fx).rejects.toThrowError("name not provided");
  });

  it("should list movies", async () => {
    const res = await MovieService.list();
    expect(res).toMatchObject([]);
  });

  it("should update movie", async () => {
    const res = await MovieService.update({
      id: "1",
      name: "A volta dos que não foram",
    });
    expect(res).toBe(true);
  });

  it("should throw update movie error", async () => {
    const fx = () => MovieService.update({ name: "Um código qualquer" });
    expect(fx).rejects.toThrowError("id not provided");
  });

  it("should not movie update", async () => {
    const res = await MovieService.update({ id: "1" });
    expect(res).toBe(false);
  });
});
