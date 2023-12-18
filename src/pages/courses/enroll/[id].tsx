import RootLayout from "@/components/Layouts/RootLayout";
import Heading from "@/components/ui/Heading/Heading";
import { isLoggedIn } from "@/services/auth.service";
import {
  Button,
  Row,
  Col,
  Form,
  Typography,
  Input,
  Select,
  message,
} from "antd";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const { Title } = Typography;

const EnrollPage = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const id = router.query.id;
  const isLogged = isLoggedIn();
  const pathName = `/courses/enroll/${id}`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isLogged && isClient) {
    router.push({
      pathname: "/login",
      query: { from: pathName },
    });
  }

  const onFinish = async (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const courseName = "Advance Auto Cad";

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="p-6 bg-gray-200 ">
      <div className="container grid gap-6 mx-auto  lg:grid-cols-2 ">
        <div>
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
              {courseName}
            </Title>
            <Form.Item
              name="method"
              label="PaymentMethod"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
            >
              <Select
                defaultValue="bkash"
                size="large"
                onChange={handleChange}
                options={[
                  { value: "bkash", label: "Bkash" },
                  { value: "nagad", label: "Nagad" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Sender Mobile No"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your mobile no.",
                },
              ]}
            >
              <Input placeholder="Mobile No" size="large" />
            </Form.Item>
            <Form.Item
              name="transactionId"
              label="Transaction Id"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input transaction Id.",
                },
              ]}
            >
              <Input placeholder="Transaction Id" size="large" />
            </Form.Item>

            <Button
              type="primary"
              className="form-submit-btn w-full"
              htmlType="submit"
              shape="round"
              size="large"
            >
              Enroll
            </Button>
          </Form>
        </div>
        <div>
          <div className="my-6">
            <h3 className="text-2xl text-gray-800">Follow Instruction: </h3>
            <p className="text-[20px] text-gray-700 mt-3">
              Send your course fee to bkash / Nagad account
            </p>
            <ul className="text-lg mt-5">
              <li>Bkash (Personal): 0161111111</li>
              <li>Nagad (Personal): 0161111111</li>
            </ul>

            <p className="text-lg font-medium mt-6 text-justify">
              After sending fee use Transaction ID (TrxID) and sender mobile
              number for completing your enroll request. When we receive your
              enroll request, we will active this within 10-15 min, then you can
              start learning. For further help contact helpline. Within 10AM to
              8:PM helpline service is available - Mobile: 8801774688159 |
              WhatsApp: 8801774688159
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollPage;

EnrollPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
