import { Post } from './components/Post';
import { Container } from './styled';
import { useEffect } from 'react';
import X from 'store/store';
import { observer } from 'mobx-react-lite';
import { PostModal } from './components/Modal';

function PostsList() {
  useEffect(() => {
    X.getUser();
    X.fetchPosts();
  }, []);

  return (
    <Container>
      <PostModal />
      {X.posts?.map((post) => (
        <Post
          userInitials={`${post.author.first_name[0]}${post.author.last_name[0]}`}
          content={post.content}
          title={post.title}
          commentsCount={+post.comments_count}
          likesCount={+post.likes_count}
          createdDate={post.created_at}
          key={post.id}
          id={post.id}
          isLiked={post.is_liked}
        />
      ))}
    </Container>
  );
}

const ObservedPostsList = observer(PostsList);

export { ObservedPostsList as PostsList };
