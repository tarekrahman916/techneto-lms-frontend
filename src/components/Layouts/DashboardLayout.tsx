import { Layout } from "antd";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../ui/Sidebar";
import Loading from "../ui/Loading";

const { Content } = Layout;

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  const isUserLogged = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isUserLogged) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [isUserLogged, router]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <Layout className="layout ">
      <Navbar />
      <Content style={{ background: "#fff" }}>
        <Sidebar>
          <div>{children}</div>
        </Sidebar>
      </Content>
      <Footer />
    </Layout>
  );
};

export default DashboardLayout;
