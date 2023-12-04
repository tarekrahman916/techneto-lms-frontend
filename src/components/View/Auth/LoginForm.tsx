/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Form, Input, message, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { LoginOutlined } from "@ant-design/icons";
const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onFinish = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User logged in successfully!");
      }

      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} className="text-center">
        Sign in
      </Title>

      <Form.Item
        name="email"
        hasFeedback
        label="Email address"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your email.",
          },
          {
            type: "email",
            message: "Your email is invalid.",
          },
        ]}
      >
        <Input placeholder="Email" size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        hasFeedback
        label="Password"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your password.",
          },
          { min: 6, message: "Password must be minimum 6 characters." },
        ]}
      >
        <Input.Password placeholder="Password" size="large" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot ml-5" href="#">
          Forgot password?
        </a>
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        shape="round"
        icon={<LoginOutlined />}
        size="large"
        className="w-full"
      >
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
