import { getAxiosInstance } from "./axios-instance";
import { Config } from "./config/config";
import { AxiosInstance } from "axios";
import { GetPostsResponse } from "./services/demo-service/api-view";
import { ServicesFactory } from "./services-factory";

export class MyOrgClient {
  private _config: Config;
  private _axiosInstance?: AxiosInstance;
  private _servicesFactory?: ServicesFactory;

  constructor(config: Config) {
    this._config = config;
  }

  /**
   * Initializes the MyOrgClient by setting up the Axios instance
   * and creating the services factory.
   */
  async init(): Promise<void> {
    this._axiosInstance = getAxiosInstance(this._config);
    this._servicesFactory = new ServicesFactory(this._axiosInstance);
  }

  /**
   * Option 1: Get posts by ID using a method
   * Retrieves a post based on the provided post ID.
   * @param postId - The ID of the post to retrieve
   * @returns Promise containing the post response
   */
  // async getPosts(postId: number): Promise<GetPostsResponse> {
  //   const postService = this._servicesFactory?.PostService;

  //   if (!postService) {
  //     throw new Error("Post Service not found");
  //   }

  //   return await postService.getPosts(postId);
  // }

  /**
   * Option 2: Expose PostService directly through a getter.
   * Retrieves the PostService instance from the services factory.
   * Throws an error if the factory hasn't been initialized.
   *
   * @returns The PostService instance
   */
  get PostService() {
    if (!this._servicesFactory) {
      throw new Error("Services factory not initialized");
    }
    return this._servicesFactory.PostService;
  }
}
