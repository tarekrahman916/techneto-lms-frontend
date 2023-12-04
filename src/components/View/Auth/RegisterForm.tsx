/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, Row, Col } from "antd";
import { useRouter } from "next/navigation";
import { UserAddOutlined } from "@ant-design/icons";

const { Title } = Typography;

type FieldType = {
  fullName?: string;
  contactNumber?: string;
  email?: string;
  password?: string;
};

const RegisterForm: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
  };

  const validation = (rule: any, value: any, callback: any) => {
    if (checked) {
      return callback();
    }
    return callback("Please agree Terms of Use & Privacy policy");
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
        Create Account
      </Title>

      <Row gutter={{ xs: 8, sm: 16 }}>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name="firstName"
            label="First name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your first name.",
              },
              {
                min: 2,
                message: "Your first name must be at least 2 characters.",
              },
            ]}
          >
            <Input placeholder="First name" size="large" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name="lastName"
            label="Last name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your last name.",
              },
              {
                min: 2,
                message: "Your last name must be at least 2 characters.",
              },
            ]}
          >
            <Input placeholder="Last name" size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="email"
        label="Email address"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        hasFeedback
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

      <Row gutter={{ xs: 8, sm: 16 }}>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            hasFeedback
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
        </Col>

        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Confirm your password.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Form.Item
          name="agree"
          valuePropName="checked"
          noStyle
          rules={[{ validator: validation }]}
        >
          <Checkbox checked={checked} onChange={onCheckboxChange}>
            I agree to <a href="#">Terms of Use & Privacy policy</a>.
          </Checkbox>
        </Form.Item>
      </Form.Item>

      <Button
        type="primary"
        className="form-submit-btn w-full"
        htmlType="submit"
        shape="round"
        icon={<UserAddOutlined />}
        size="large"
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default RegisterForm;
