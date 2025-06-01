import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import X from 'store/store';

function PostModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onCreate = async () => {
    await X.createPost(title, content);
    X.fetchPosts();
    setIsModalOpened(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpened(true)}>Добавить пост</Button>
      <Modal
        open={isModalOpened}
        onOk={onCreate}
        onCancel={() => setIsModalOpened(false)}
        title='Добавление поста'
      >
        <Input
          placeholder='Название'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <TextArea
          style={{ resize: 'none' }}
          rows={4}
          onChange={(e) => setContent(e.target.value)}
        />
      </Modal>
    </>
  );
}

const ObservedPostModal = observer(PostModal);

export { ObservedPostModal as PostModal };
