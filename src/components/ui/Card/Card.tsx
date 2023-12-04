import { Card } from "antd";
import Image from "next/image";
import image from "../../../assets/course.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const CourseCard = () => (
  <Card hoverable bodyStyle={{ padding: "0px" }}>
    <div className="relative h-[200px] bg-slate-200">
      <Image
        width={400}
        height={200}
        alt="example"
        src={image}
        className="w-[100%] "
        style={{ borderRadius: "8px 8px 0px 0px" }}
      />
      <div
        style={{ borderRadius: "20px 0px 0px 0px" }}
        className="bg-slate-800 h-10 w-[80%] absolute bottom-0 right-0 flex justify-center"
      >
        <div className="flex items-center justify-center text-white">
          <h3>Price: 500 BDT</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h1 className="text-xl font-bold text-slate-800">
        The Complete JavaScript Course 2023
      </h1>
      <Link href="/courses/1">
        <button className="px-2 py-2 mt-3  border-none outline-none text-white   rounded-md   tracking-wider hover:tracking-widest bg-[#01574E]  duration-150 cursor-pointer">
          Enroll Courses
          <ArrowRightOutlined className="ml-2" />
        </button>
      </Link>
    </div>
  </Card>
);

export default CourseCard;
