/* eslint-disable react-hooks/rules-of-hooks */
import { MenuProps } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import { UserOutlined, ProfileOutlined } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const commonItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href="/dashboard/my-profile">My Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}`}>Update Profile</Link>,
          key: `/${role}/profile/update`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const studentItems: MenuProps["items"] = [
    ...commonItems,
    {
      label: <Link href="/dashboard/my-courses">My Courses </Link>,
      icon: <UserOutlined />,
      key: "/dashboard/my-courses",
    },
  ];
  const adminItems: MenuProps["items"] = [
    ...commonItems,
    {
      label: <Link href="/dashboard/admins/all-courses">All Courses </Link>,
      icon: <UserOutlined />,
      key: "/dashboard/admins/all-courses",
    },
    {
      label: <Link href="/dashboard/admins/students">Students </Link>,
      icon: <UserOutlined />,
      key: "/dashboard/admins/students",
    },
    {
      label: <Link href="/dashboard/admins/admin">Admins </Link>,
      icon: <UserOutlined />,
      key: "/dashboard/admins/students",
    },
  ];

  if (role === "student") return studentItems;
  if (role === "admin" || role === "super_admin") return adminItems;
  else return commonItems;
};
