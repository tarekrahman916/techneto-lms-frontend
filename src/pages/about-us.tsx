import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutUsPage;

AboutUsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
