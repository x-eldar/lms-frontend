import { createBrowserRouter } from 'react-router';
import { Body } from 'components/layout';
import { Auth } from 'pages/auth';
import { PostsList } from 'pages/posts';
import { Signup } from 'pages/signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      { path: 'signup', element: <Signup /> },
      {
        path: 'posts',
        element: <PostsList />,
      },
    ],
  },
]);
