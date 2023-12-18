import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const StudentsPage = () => {
  return (
    <div>
      <h1>All StudentsPage</h1>
    </div>
  );
};

export default StudentsPage;

StudentsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
