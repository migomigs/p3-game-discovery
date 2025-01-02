import HttpService from "./httpServices";

class GamesService extends HttpService {
  endPoint = "/games";
}

export default new GamesService();
