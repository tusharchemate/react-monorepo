import { GetPostsResponse, PostsPayload } from "./api-view";
import { IPostsService } from "./interface";
import { AxiosError, AxiosInstance } from "axios";

export class PostService implements IPostsService {
  axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getPosts(postId: number): Promise<GetPostsResponse> {
    try {
      const url = `posts/${postId}`;
      const response = await this.axios.get<GetPostsResponse>(url, {});
      return response?.data;
    } catch (error: AxiosError | any) {
      throw new Error(
        error?.response?.data?.message || "Error while fetching post"
      );
    }
  }

  createPosts(updateData: PostsPayload, postId: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
