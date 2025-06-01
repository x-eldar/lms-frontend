import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import { FormWrapper } from './styled';
import type { DefaultOptionType } from 'antd/es/select';
import X from 'store/store';
import { useNavigate } from 'react-router';

const options: DefaultOptionType[] = [
  {
    label: <span>Мужской</span>,
    value: 'M',
  },
  {
    label: <span>Женский</span>,
    value: 'F',
  },
];

export function Signup() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (val: any) => {
    const response = await X.signup({
      ...val,
      first_name: val.name,
      last_name: val.surname,
    });

    if (response) navigate('/posts');
  };

  return (
    <FormWrapper>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              rules={[{ required: true }]}
              label='Логин'
              name='username'
            >
              <Input />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Город' name='city'>
              <Input />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Имя' name='name'>
              <Input />
            </Form.Item>
            <Space.Compact style={{ width: '100%' }}>
              <Form.Item
                rules={[{ required: true }]}
                label='Возраст'
                name='age'
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                label='Пол'
                name='gender'
                style={{ width: '100%' }}
              >
                <Select options={options} placeholder='' />
              </Form.Item>
            </Space.Compact>
          </Col>
          <Col span={12}>
            <Form.Item
              rules={[{ required: true }]}
              label='Пароль'
              name='password'
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              label='Повторите пароль'
              name='password2'
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              label='Фамилия'
              name='surname'
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              label='Эл. почта'
              name='email'
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
}
