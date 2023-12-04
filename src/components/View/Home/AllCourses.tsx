import CourseCard from "@/components/ui/Card/Card";
import Heading from "@/components/ui/Heading/Heading";

const AllCourses = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="mb-6">
        <Heading title="All Courses" />
      </div>
      <div className="grid lg:grid-cols-3 justify-center align-middle items-center gap-8">
        {new Array(6).fill(null).map((item) => (
          <CourseCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
