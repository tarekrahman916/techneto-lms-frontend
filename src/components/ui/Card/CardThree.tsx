import { Button, Card } from "antd";
import React from "react";
import image from "../../../assets/etabs.jpg";
import Image from "next/image";

const CardThree = () => {
  return (
    <div className=" w-[100%] flex flex-col lg:flex-row gap-2 items-center bg-gray-900 text-gray-100 p-5">
      <div className="w-[50%]">
        <Image src={image} alt="image" width={250} height={150} />
      </div>

      <div>
        <h1 className="text-2xl font-medium">
          Advanced Adobe Photoshop For Everyone
        </h1>
        <hr className="mt-2" />
        <Button type="primary" size="large" className="w-full mt-5">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CardThree;
