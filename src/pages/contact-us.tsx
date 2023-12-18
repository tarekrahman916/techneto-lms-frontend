import RootLayout from "@/components/Layouts/RootLayout";

const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default ContactUsPage;

ContactUsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
