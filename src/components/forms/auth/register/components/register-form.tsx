import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useUnit } from 'effector-react';
import {
  $confirmPassword,
  $email,
  $password,
  $registerLoading,
  confirmPasswordChanged,
  emailChanged,
  formSubmitted,
  passwordChanged,
} from '../models/register';

export const RegisterForm = () => {
  const [
    email,
    password,
    confirmPassword,
    registerLoading,
    emailChange,
    passwordChange,
    confirmPasswordChange,
    onFormSubmit,
  ] = useUnit([
    $email,
    $password,
    $confirmPassword,
    $registerLoading,
    emailChanged,
    passwordChanged,
    confirmPasswordChanged,
    formSubmitted,
  ]);

  return (
    <Form layout="vertical" onFinish={onFormSubmit} disabled={registerLoading}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => emailChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => passwordChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[{ required: true, message: 'Please confirm your password!' }]}>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
          value={confirmPassword}
          autoComplete="new-password"
          onChange={(e) => confirmPasswordChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" block color="orange" variant="solid" loading={registerLoading}>
          Зарегестрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
