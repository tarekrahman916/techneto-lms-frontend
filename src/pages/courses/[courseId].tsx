import { useRouter } from "next/router";
import React from "react";

const CourseDetailPage = () => {
  const router = useRouter();
  const id = router.query.courseId;
  return (
    <div>
      <h1>Single Course Id:{id} </h1>
    </div>
  );
};

export default CourseDetailPage;
