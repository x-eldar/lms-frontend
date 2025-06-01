import type { AxiosResponse } from 'axios';
import type { IComment, IPost, IUser } from 'types';
import api from './apiConfig';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

interface IApi {
  getList: () => Promise<AxiosResponse<IPost[]>>;
  getCommentsForPost: (id: number) => Promise<AxiosResponse<IComment[]>>;
  signup: (payload: IUser) => Promise<AxiosResponse<IUser>>;
  login: (payload: {
    username: string;
    password: string;
  }) => Promise<AxiosResponse<IUser>>;
  createPost: (title: string, content: string) => Promise<void>;
  getUser: () => Promise<AxiosResponse<IUser>>;
  createComment: (postId: number, text: string) => Promise<{ status: number }>;
  likePost: (id: number) => Promise<void>;
}

export const Api: IApi = {
  getList: () => api.get('/api/posts'),
  getCommentsForPost: (id) => api.get(`/api/posts/${id}/comments`),
  signup: (payload) => axios.post(`${API_URL}/api/register/`, payload),
  login: (payload) => axios.post(`${API_URL}/api/api/token/`, payload),
  createPost: (title, content) =>
    api.post(`${API_URL}/api/posts/`, { title, content }),
  getUser: () => api.get(`${API_URL}/api/profile/`),
  createComment: (postId, text) =>
    api.post(`${API_URL}/api/posts/${postId}/comments/`, { text }),
  likePost: (id) => api.post(`${API_URL}/api/posts/${id}/like/`),
};
