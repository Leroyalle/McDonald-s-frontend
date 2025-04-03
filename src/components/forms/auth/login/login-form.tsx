import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  $email,
  $loginLoading,
  $password,
  emailChanged,
  formSubmitted,
  passwordChanged,
} from './model';
import { useUnit } from 'effector-react';

export const LoginForm = () => {
  const [email, password, loginLoading, emailChange, passwordChange, onFormSubmit] = useUnit([
    $email,
    $password,
    $loginLoading,
    emailChanged,
    passwordChanged,
    formSubmitted,
  ]);

  return (
    <Form layout="vertical" onFinish={onFormSubmit} disabled={loginLoading}>
      <Form.Item name="email" rules={[{ required: true, message: 'Пожалуйста введите email!' }]}>
        <Input
          prefix={<UserOutlined />}
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={(e) => emailChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
        <Input.Password
          prefix={<LockOutlined />}
          autoComplete="current-password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => passwordChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button block htmlType="submit" color="orange" variant="solid" loading={loginLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
