import RootLayout from "@/components/Layouts/RootLayout";

const CoursesPage = () => {
  return (
    <div>
      <h1>Courses</h1>
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
