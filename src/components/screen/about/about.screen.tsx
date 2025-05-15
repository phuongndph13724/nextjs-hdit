"use client";
import Footer from "@/components/layout/client/footer";
import Navbar from "@/components/layout/client/navbar";
import React from "react";

const AboutScreen = () => {
  return (
    <div className="h-screen flex flex-col justify-between px-8">
      <Navbar />
      <div className="h-full">AboutScreen</div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
