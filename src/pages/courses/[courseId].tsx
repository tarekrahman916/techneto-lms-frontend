/* eslint-disable react/no-unescaped-entities */
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import image from "../../assets/etabs.jpg";
import ListItem from "@/components/ui/ListItem";
import Heading from "@/components/ui/Heading/Heading";
import { ExportOutlined } from "@ant-design/icons";
import Link from "next/link";

const data = [
  {
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illo.",
  },
  {
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illo.",
  },
  {
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illo.",
  },
  {
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illo.",
  },
];

const CourseDetailPage = () => {
  const router = useRouter();
  const id = router.query.courseId;
  return (
    <div className=" lg:w-[80%] w-[90%] mx-auto">
      <div className="bg gap-6 items-center flex flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-5">
            Advanced Adobe Photoshop For Everyone
          </h1>
          <p className="text-xl tracking-wider font-normal text-gray-700 mb-5">
            The most impressive is collection of share me online college courses
          </p>
          <p className="text-xl font-bold mb-5">Price: 500 BDT</p>
          <Link href={`/courses/enroll/${id}`}>
            <Button type="primary" size="large">
              Enroll Now
              <ExportOutlined />
            </Button>
          </Link>
        </div>
        <div>
          <Image src={image} alt="course_image" width={600} height={400} />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-5">
        <div className="mt-10 lg:w-[60%]">
          <div>
            <Heading title="Course Overview" />
            <p className="text-lg mt-5 tracking-wide font-normal text-gray-700 text-justify">
              In this course take you from the fundamentals and concepts of data
              modeling all the way through anumber of best practices and
              techniques that you’ll need to build data models in your
              organization. You’ll find many By the end of the course, you’ll be
              all set to not only put these principles to works but also to
              maike the key data modeling and design decisions required by the
              info data modeling that transcend the nuts-and-bolts that clearly
              the key covered the course and design patterns.
            </p>
          </div>
          <div className="mt-8 ">
            <Heading title="What You'll Learn in This Course:" />
            <ListItem items={data} />
          </div>
        </div>
        <div className="mt-8 lg:w-[40%]  border-2 border-gray-700 ">
          <div className="bg-[#01574E] h-[60px] w-[100%] flex items-center px-6 mb-5">
            <h3 className="text-white text-2xl">500 BDT</h3>
          </div>
          <div className="px-5">
            <div className="flex justify-between mb-5 text-xl">
              <p>Course level</p>
              <p>Beginner</p>
            </div>
            <hr />
            <div className="flex justify-between mb-5 text-xl">
              <p>Course Duration</p>
              <p>10 Hours</p>
            </div>
            <hr />
            <div className="flex justify-between mb-5 text-xl">
              <p>Total Class</p>
              <p>20+</p>
            </div>
            <hr />
            <div className="flex justify-between mb-5 text-xl">
              <p>Language</p>
              <p>Bangla</p>
            </div>
            <hr />
            <Link href={`/courses/enroll/${id}`}>
              <Button type="primary" size="large" className="mt-10">
                Enroll Now
                <ExportOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-lg tracking-wide font-normal text-gray-700 text-justify">
          In this course take you from the fundamentals and concepts of data
          modeling all the way through anumber of best practices and techniques
          that you’ll need to build data models in your organization. You’ll
          find many examples that clearly the key covered the course By the end
          of the course, you’ll be all set to not only put these principles to
          works but also to maike the key data modeling and design decisions
          required by the info data modeling that transcend the nuts-and-bolts
          that clearly the key covered the course and design patterns.
        </p>
      </div>
    </div>
  );
};

export default CourseDetailPage;

CourseDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
