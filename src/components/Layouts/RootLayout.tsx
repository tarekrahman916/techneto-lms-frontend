import { Layout } from "antd";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import TopNavbar from "../ui/TopNavbar";

const { Content } = Layout;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="layout bg-white">
      <TopNavbar />
      <Navbar />
      <Content style={{ padding: "20px 10px" }}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default RootLayout;
