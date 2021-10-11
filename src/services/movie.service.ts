import IMovie from "../models/Movie";

class MovieService {
  async get(id?: string): Promise<IMovie> {
    if (!id) {
      throw Error("id not provided");
    }

    return { id, name: "Star Wars, Taperoá Edition" };
  }

  async create(data: IMovie): Promise<IMovie> {
    if (!data.name) {
      throw Error("name not provided");
    }
    return { id: "1", ...data };
  }

  async list(limit = 10, page = 1): Promise<IMovie[]> {
    return [];
  }

  async update(data: IMovie): Promise<boolean> {
    if (!data.id) {
      throw Error("id not provided");
    }

    if (!data.name) return false;

    return true;
  }
}

export default new MovieService();
