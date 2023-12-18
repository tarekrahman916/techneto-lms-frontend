import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import FormInput from "@/components/ui/Form/FormInput";

const CourseVideosForm = () => {
  const [inputList, setInputList] = useState([{ name: "", link: "" }]);

  const handleInput = () => {
    setInputList([...inputList, { name: "", link: "" }]);
  };

  const handleInputRemove = (i: number) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
          Guardian information
        </p>
        {inputList.map((x, i) => {
          return (
            <Row
              key={i}
              className="items-center"
              gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}
            >
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput name="courseVideos.name" label="Name" size="large" />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  name="courseVideos.link"
                  label="Video Link"
                  size="large"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                {inputList.length !== 1 && (
                  <Button
                    className="mt-4 bg-red-500 text-white"
                    size="large"
                    onClick={() => handleInputRemove(i)}
                  >
                    Remove
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button
                    className="mt-4 ml-2"
                    type="primary"
                    size="large"
                    onClick={handleInput}
                  >
                    Add More
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </div>
    </>
  );
};

export default CourseVideosForm;
