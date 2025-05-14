"use client";

import { CrownOutlined } from "@ant-design/icons";
import { Result } from "antd";
import Navbar from "./client/navbar";
import Banner from "../screen/home/banner";
import Products from "../screen/home/product";
import CarCategories from "../screen/home/car-categories";
import Testimonial from "../screen/home/testimonial";
import ContactForm from "../screen/contact-form";
import Footer from "./client/footer";

const HomePage = () => {
  return (
    // <div style={{ padding: 20 }}>
    //   <Result
    //     icon={<CrownOutlined />}
    //     title="Fullstack Next/Nest - createdBy @dPCoP"
    //   />
    // </div>
    <>
      <Navbar />
      <Banner />
      <CarCategories />
      <Products />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
