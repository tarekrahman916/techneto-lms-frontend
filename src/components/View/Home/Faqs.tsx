/* eslint-disable react/no-unescaped-entities */
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import image from "../../../assets/coice.gif";
import Image from "next/image";
import Heading from "@/components/ui/Heading/Heading";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems = [
  {
    key: "1",
    label: " Expert Instructors",
    children: (
      <p>
        At Impact academy, we pride ourselves on having a team of expert
        instructors who are leaders in their respective fields. Our instructors
        bring a wealth of knowledge, practical experience, and a passion for
        teaching to ensure you receive top-notch education.
      </p>
    ),
  },
  {
    key: "2",
    label: "Flexibility and Convenience:",
    children: (
      <p>
        Life is busy, and we understand that. That's why we provide flexibility
        in your learning journey. Our online platform allows you to access
        course materials at your own pace, from anywhere in the world. Learn
        when it's convenient for you without compromising on the quality of
        education.
      </p>
    ),
  },
  {
    key: "3",
    label: " Supportive Learning Community:",
    children: (
      <p>
        Join a vibrant community of learners from around the globe. Our platform
        fosters collaboration, discussion, and networking opportunities. Connect
        with like-minded individuals, share insights, and grow together as you
        progress through your courses.
      </p>
    ),
  },
];

const Faqs = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse  items-center justify-center my-5">
      <div>
        <Image src={image} width={400} height={400} alt="about" />
      </div>
      <div className="lg:w-[50%]">
        <div className="mb-6">
          <Heading title="Why you choice us ?" />
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={getItems}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Faqs;
