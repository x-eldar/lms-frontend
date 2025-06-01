import { Button, Form, Input } from 'antd';
import { FormWrapper, StyledLink } from './styled';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import X from 'store/store';
import { useNavigate } from 'react-router';

export function Auth() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (val: { username: string; password: string }) => {
    const res = await X.login(val);

    if (res) navigate('/posts');
  };

  return (
    <FormWrapper>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        <Form.Item name='username'>
          <Input prefix={<UserOutlined />} size='large' />
        </Form.Item>
        <Form.Item name='password'>
          <Input.Password prefix={<LockOutlined />} size='large' />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Войти
        </Button>
        <StyledLink to='signup'>Зарегистрироваться</StyledLink>
      </Form>
    </FormWrapper>
  );
}
