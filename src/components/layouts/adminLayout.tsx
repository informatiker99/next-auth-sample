import React, { ReactNode } from "react";
import Header from "@/components/admin/header";
const adminLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default adminLayout;
