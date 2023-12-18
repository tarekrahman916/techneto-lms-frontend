import DashboardLayout from "@/components/Layouts/DashboardLayout";
import CourseDetailsForm from "@/components/View/CourseForms/CourseDetailsForm";
import CourseVideosForm from "@/components/View/CourseForms/CourseVideosForm";
import StepperForm from "@/components/ui/StepperForm/StepperForm";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

const CourseCreatePage = () => {
  const steps = [
    {
      title: "Course Details",
      content: <CourseDetailsForm />,
    },
    {
      title: "Course Videos",
      content: <CourseVideosForm />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    values.image = "hello Iamge";
    const { courseFeatures } = values;
    const features = courseFeatures.split(",");
    values.courseFeatures = features;

    // console.log(values);
  };

  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: <Link href="/dashboard/admins/courses">Courses</Link>,
            },
          ]}
        />
      </div>
      <h1>Create course</h1>
      <div>
        <StepperForm
          submitHandler={(value) => {
            handleStudentSubmit(value);
          }}
          steps={steps}
        />
      </div>
    </div>
  );
};

export default CourseCreatePage;

CourseCreatePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
