import { Card, Divider } from "antd";
import Link from "next/link";

const CardTwo = () => {
  return (
    <Link href="/courses/1" className="no-underline">
      <Card
        style={{ margin: "15px 0px" }}
        className="bg-gray-800  "
        bodyStyle={{ color: "#fff" }}
      >
        <h1 className="text-xl">The Complete JavaScript Course 2023 </h1>
        <Divider className="border-2 border-white" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo
          quos cum voluptates assumenda officiis...
        </p>
      </Card>
    </Link>
  );
};

export default CardTwo;
