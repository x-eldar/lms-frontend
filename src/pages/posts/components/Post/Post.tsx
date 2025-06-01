import { CommentOutlined } from '@ant-design/icons';
import {
  ActionButtonsContainer,
  AddCommentWrapper,
  ButtonContainer,
  CommentsBlock,
  Date,
  StyledHeartOutlined,
  StyledPost,
} from './styled';
import dayjs from 'dayjs';
import { Avatar, Button, Input, List } from 'antd';
import { useState } from 'react';
import type { IComment } from 'types';
import { Api } from 'api';
import X from 'store/store';
import { observer } from 'mobx-react-lite';
import 'dayjs/locale/ru';

interface IPostProps {
  title: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdDate: string;
  userInitials: string;
  id: number;
  isLiked: boolean;
}

function Post(props: IPostProps) {
  const {
    content,
    title,
    commentsCount,
    likesCount,
    createdDate,
    userInitials,
    id,
    isLiked,
  } = props;

  const [isCommentsOpened, setIsCommentsOpened] = useState(false);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(likesCount);
  const [comms, setComms] = useState(commentsCount);

  const openComments = async () => {
    setIsCommentsOpened(!isCommentsOpened);
    const { data } = await Api.getCommentsForPost(id);

    setComments(data);
  };

  const addComment = async () => {
    const res = await X.createComment(id, commentText);
    if (res?.status !== 201) return;

    const { data } = await Api.getCommentsForPost(id);
    setComments(data);
    setCommentText('');
    setComms((prev) => prev + 1);
  };

  const getFormattedDate = (date: string) =>
    dayjs(date).locale('ru').format('DD MMMM, HH:mm');

  const onLike = async () => {
    const res = await X.likePost(id);
    if (res) {
      if (liked) {
        setLikes((prev) => prev - 1);
      } else {
        setLikes((prev) => prev + 1);
      }
      setLiked(!liked);
    }
  };

  return (
    <>
      <div>
        <StyledPost extra={<Avatar>{userInitials}</Avatar>} title={title}>
          {content}
          <br />
          <br />
          <ActionButtonsContainer>
            <ButtonContainer>
              <StyledHeartOutlined $isLiked={liked} onClick={onLike} />
              {likes}
            </ButtonContainer>
            <ButtonContainer onClick={openComments}>
              <CommentOutlined />
              {comms}
            </ButtonContainer>
          </ActionButtonsContainer>
          <Date>{getFormattedDate(createdDate)}</Date>
        </StyledPost>
        {isCommentsOpened && (
          <CommentsBlock>
            <List
              dataSource={comments ? comments : undefined}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar>
                        {item.author.first_name[0] + item.author.last_name[0]}
                      </Avatar>
                    }
                    title={`${item.author.first_name} ${item.author.last_name}`}
                    description={item.text}
                  />
                  <span>{getFormattedDate(item.created_at)}</span>
                </List.Item>
              )}
            />
            <AddCommentWrapper>
              <Input
                onChange={(e) => setCommentText(e.target.value)}
                style={{ width: '400px' }}
                value={commentText}
              />
              <Button onClick={addComment} type='primary'>
                Отправить
              </Button>
            </AddCommentWrapper>
          </CommentsBlock>
        )}
      </div>
    </>
  );
}

const ObservedPost = observer(Post);

export { ObservedPost as Post };
