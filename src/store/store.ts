import { Api } from 'api';
import { makeAutoObservable, runInAction } from 'mobx';
import type { IPost, IUser } from 'types';

class PostsStore {
  posts: IPost[] | null = null;
  currentUser: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getUser = async () => {
    try {
      const { data } = await Api.getUser();
      runInAction(() => (this.currentUser = data));
    } catch (error) {
      console.error(error);
    }
  };

  fetchPosts = async () => {
    try {
      const { data } = await Api.getList();
      runInAction(() => (this.posts = data));
    } catch (error) {
      console.error(error);
    }
  };

  createPost = async (title: string, content: string) => {
    try {
      Api.createPost(title, content);
    } catch (err) {
      console.error(err);
    }
  };

  likePost = async (id: number) => {
    try {
      await Api.likePost(id);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  createComment = async (postId: number, text: string) => {
    try {
      const res = await Api.createComment(postId, text);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  logout = async () => {
    this.currentUser = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  signup = async (payload: IUser) => {
    try {
      const { data }: { data: IUser } = await Api.signup(payload);
      if (data.tokens) {
        localStorage.setItem('access_token', data.tokens.access);
        localStorage.setItem('refresh_token', data.tokens.refresh);
        runInAction(() => (this.currentUser = data));
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  login = async (payload: { password: string; username: string }) => {
    try {
      const { data }: { data: IUser } = await Api.login(payload);

      if (data && data.tokens) {
        localStorage.setItem('access_token', data.tokens.access);
        localStorage.setItem('refresh_token', data.tokens.refresh);
        runInAction(() => (this.currentUser = data));
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}

export default new PostsStore();
