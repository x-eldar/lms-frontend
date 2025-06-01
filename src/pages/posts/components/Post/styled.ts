import { HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import styled, { css } from 'styled-components';

export const StyledPost = styled(Card)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 20px;
  bottom: 5px;

  & > .ant-badge {
    cursor: pointer;
  }
`;

export const Date = styled.span`
  position: absolute;
  right: 20px;
  bottom: 5px;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const CommentsBlock = styled.div`
  border: 1px solid lightgray;
  padding-inline: 20px;
  padding-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  background-color: lightgray;
  padding: 1px 5px;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledHeartOutlined = styled(HeartOutlined)<{
  $isLiked: boolean;
}>`
  ${({ $isLiked }) =>
    $isLiked &&
    css`
      & > svg {
        background-color: red;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        padding: 2px;
      }
    `}
`;
