/* eslint-disable react-hooks/rules-of-hooks */
import { removeUserInfo } from "@/services/auth.service";
import { Button, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const navbarItems = (role: string) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    removeUserInfo("accessToken");
    router.reload();
  };

  const commonItems: MenuProps["items"] = [
    {
      label: <Link href="/">Home </Link>,
      key: "/home",
    },
    {
      label: <Link href="/courses">Courses </Link>,
      key: "/courses",
    },
    {
      label: <Link href="/about-us">About </Link>,
      key: "/about-us",
    },
    {
      label: <Link href="/contact-us">Contact </Link>,
      key: "/contact-us",
    },
  ];

  const defaultItems: MenuProps["items"] = [
    ...commonItems,
    {
      label: <Link href="/login">Login </Link>,
      key: "/login",
    },
  ];
  const authorizedItems: MenuProps["items"] = [
    ...commonItems,
    {
      label: <Link href="/dashboard/my-profile">Dashboard </Link>,
      key: "/dashboard",
    },
    {
      label: (
        <Button onClick={handleLogout} type="primary">
          Logout
        </Button>
      ),
      key: "/logout",
    },
  ];

  if (role && isClient) return authorizedItems;
  return defaultItems;
};
