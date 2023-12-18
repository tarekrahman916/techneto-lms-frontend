import FormInput from "@/components/ui/Form/FormInput";
import FormSelectField from "@/components/ui/Form/FormSeletctField";
import FormTextArea from "@/components/ui/Form/FormTextArea";
import UploadImage from "@/components/ui/Form/UploadImage";
import { courseLevelOptions } from "@/constants/global";
import { Col, Row } from "antd";

const CourseDetailsForm = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Course Details
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="title" size="large" label="Title" />
          </Col>

          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="sortDescription"
              size="large"
              label="Sort Description"
            />
          </Col>

          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <UploadImage name="file" />
          </Col>

          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="price" size="large" label="Price" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="totalClass"
              size="large"
              label="Total Class"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="duration"
              size="large"
              label="Duration"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size="large"
              name="courseLevel"
              options={courseLevelOptions}
              label="Course Level"
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea name="description" label="Description" rows={6} />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea name="courseFeatures" label="Features" rows={6} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CourseDetailsForm;
