import { Button, Form, Input } from 'antd';
import { KeyOutlined } from '@ant-design/icons';
import { useUnit } from 'effector-react';
import { $code, $codeVerifyLoading, codeChanged, formSubmitted } from '../models/verify-code';

export const ConfirmCodeForm = () => {
  const [code, codeVerifyLoading, codeChange, onSubmit] = useUnit([
    $code,
    $codeVerifyLoading,
    codeChanged,
    formSubmitted,
  ]);

  return (
    <Form layout="vertical" onFinish={onSubmit} disabled={codeVerifyLoading}>
      <Form.Item name="code" rules={[{ required: true, message: 'Пожалуйста введите код!' }]}>
        <Input
          prefix={<KeyOutlined />}
          placeholder="Код подтверждения"
          autoComplete="one-time-code"
          maxLength={6}
          value={code}
          onChange={(e) => codeChange(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={codeVerifyLoading}>
          Подтвердить
        </Button>
      </Form.Item>

      <div className="text-center text-sm text-gray-500">
        Код подтверждения отправлен на ваш email
      </div>
    </Form>
  );
};
