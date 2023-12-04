import RootLayout from "@/components/Layouts/RootLayout";
import AllCourses from "@/components/View/Home/AllCourses";
import Faqs from "@/components/View/Home/Faqs";
import HomeContact from "@/components/View/Home/HomeContact";
import TopBanner from "@/components/View/Home/TopBanner";
import TrendingCourse from "@/components/View/Home/TrenedingCourse";
import Review from "@/components/ui/Review";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Techneto Academy</title>
        <meta
          property="og:title"
          content="Best online education in BD"
          key="title"
        />
      </Head>
      <div>
        <TopBanner />
        <TrendingCourse />
        <div className="bg-gray-200 py-5">
          <AllCourses />
        </div>
        <Faqs />
        <div className="bg-gray-200 py-5">
          <Review />
        </div>
        <HomeContact />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
