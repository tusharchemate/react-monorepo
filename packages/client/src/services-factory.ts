import { PostService } from "./services/demo-service/service";
import { AxiosInstance } from "axios";

export class ServicesFactory {
  private postService?: PostService;
  private _axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
    //also add logger as well
  }

  get PostService(): PostService {
    if (!this.postService) {
      this.postService = new PostService(this._axiosInstance);
    }
    return this.postService;
  }
}
