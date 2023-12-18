import DashboardLayout from "@/components/Layouts/DashboardLayout";
import CardThree from "@/components/ui/Card/CardThree";
import React from "react";

const MyCourses = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 grid-cols-1">
      <CardThree />
      <CardThree />
      <CardThree />
    </div>
  );
};

export default MyCourses;

MyCourses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
