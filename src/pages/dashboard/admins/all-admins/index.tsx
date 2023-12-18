import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const AllAdminsPage = () => {
  return (
    <div>
      <h1>All Admins</h1>
    </div>
  );
};

export default AllAdminsPage;

AllAdminsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
