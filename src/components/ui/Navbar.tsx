import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import { navbarItems } from "@/constants/navbarItems";
import { MenuOutlined } from "@ant-design/icons";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { role } = getUserInfo() as any;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        position: "sticky",
        left: "0",
        top: "0",
        zIndex: "10",
      }}
    >
      <div className=" w-[100%]">
        <Link href="/">
          {/* <Title level={3} className=" mb-0">
              
            </Title> */}
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={60}
            className="mt-8"
          />
        </Link>
      </div>
      <Menu
        className="lg:flex hidden w-[100%]  justify-end"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={navbarItems(role)}
      />
      <Button
        className="lg:hidden border-none outline-none"
        onClick={showDrawer}
      >
        <MenuOutlined className="text-black" />
      </Button>
      <Drawer
        className="lg:hidden"
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu
          disabledOverflow
          theme="light"
          mode="vertical"
          selectedKeys={["1"]}
          items={navbarItems(role)}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;
