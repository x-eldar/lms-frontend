type TGender = 'M' | 'F';

export interface IAuthor {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  posts_count: string;
  age: number;
  city: string;
  gender: TGender;
}
export interface IPost {
  id: number;
  author: IAuthor;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  likes_count: string;
  comments_count: string;
  is_liked: boolean;
}
export interface IComment {
  id: number;
  post: number;
  post_title: string;
  author: IAuthor;
  text: string;
  created_at: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
  age: number;
  city: string;
  gender: TGender;
  tokens?: {
    access: string;
    refresh: string;
  };
}
