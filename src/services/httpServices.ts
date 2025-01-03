import axios from "axios";

export default class HttpService {
  instance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: { key: "861a7903b4474782a2c751a0380c02da" },
  });

  endPoint: string = "";
  controller: AbortController = new AbortController();

  get() {
    return this.instance.get(this.endPoint, {
      signal: this.controller.signal,
    });
  }

  cancel() {
    this.controller.abort();
  }
}
