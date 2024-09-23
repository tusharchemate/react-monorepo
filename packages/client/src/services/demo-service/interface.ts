import { GetPostsResponse, PostsPayload } from "./api-view";

export interface IPostsService {
  getPosts(postId: number): Promise<GetPostsResponse>;
  createPosts(updateData: PostsPayload, postId: number): Promise<void>;
}
