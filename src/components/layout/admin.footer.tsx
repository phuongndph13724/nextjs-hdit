"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Nguyen Dac Phuong ©{new Date().getFullYear()} Created by @dPCoP
      </Footer>
    </>
  );
};

export default AdminFooter;
