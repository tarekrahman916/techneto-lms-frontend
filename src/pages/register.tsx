/* eslint-disable react/no-unescaped-entities */
import LoginForm from "@/components/View/Auth/LoginForm";
import { Button, Col, Row } from "antd";
import React from "react";
import loginImage from "../assets/login-image.png";
import Image from "next/image";
import RegisterForm from "@/components/View/Auth/RegisterForm";
import RootLayout from "@/components/Layouts/RootLayout";
import { SelectOutlined } from "@ant-design/icons";
import Link from "next/link";

const RegisterPage = () => {
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
          <RegisterForm />
          <div className="overlay-panel overlay-right bg-gradient ">
            <p className="my-3">
              If you have already an account, let's enter your personal details
              and start journey with us
            </p>
            <div className="flex  justify-center">
              <Link href="/login">
                <Button shape="round" icon={<SelectOutlined />} size="large">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
