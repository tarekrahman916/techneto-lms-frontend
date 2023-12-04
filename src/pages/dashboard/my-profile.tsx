import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const MyProfile = () => {
  return (
    <div>
      <h1>My Profile</h1>
    </div>
  );
};

export default MyProfile;

MyProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
