import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const CourseEditPage = () => {
  return (
    <div>
      <h1>Edit Course</h1>
    </div>
  );
};

export default CourseEditPage;

CourseEditPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
