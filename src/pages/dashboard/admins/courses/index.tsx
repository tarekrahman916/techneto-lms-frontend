import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Breadcrumb, Button } from "antd";
import Link from "next/link";

const AdminCoursesPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
          ]}
        />
        <Link href="/dashboard/admins/courses/create">
          <Button type="primary" size="large">
            Create Course
          </Button>
        </Link>
      </div>
      <h1>All Courses</h1>
    </div>
  );
};

export default AdminCoursesPage;

AdminCoursesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
