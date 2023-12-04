/* eslint-disable react/no-unescaped-entities */
import LoginForm from "@/components/View/Auth/LoginForm";
import { Button, Col, Row } from "antd";
import React from "react";
import loginImage from "../assets/login-image.png";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { SelectOutlined } from "@ant-design/icons";

const LoginPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <div>
          <LoginForm />
          <div className="overlay-panel overlay-right bg-gradient ">
            <p className="my-3">
              If you don't have an account, let's enter your personal details
              and start journey with us
            </p>
            <div className="flex  justify-center">
              <Link href="/register">
                <Button shape="round" icon={<SelectOutlined />} size="large">
                  Create new account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
