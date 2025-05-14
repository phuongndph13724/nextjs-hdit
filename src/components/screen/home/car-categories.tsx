// @ts-nocheck
"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import CategoryCard from "./category-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Tư vấn chọn xe Toyota phù hợp",
    desc: "Tìm được mẫu xe lý tưởng cho nhu cầu cá nhân hoặc gia đình bạn.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Hỗ trợ tài chính & trả góp",
    desc: "Giải pháp linh hoạt, thủ tục nhanh chóng – dễ dàng sở hữu xe Toyota.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Đăng ký lái thử & trải nghiệm thực tế",
    desc: "Cảm nhận hiệu suất và tiện nghi của Toyota ngay trên vô lăng.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Hậu mãi & bảo dưỡng chính hãng",
    desc: "Dịch vụ chuyên nghiệp – đảm bảo xe bạn luôn vận hành tối ưu.",
  },
];

export function CarCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Hỗ Trợ Các Lĩnh Vực
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Từ tư vấn mua xe đến dịch vụ hậu mãi, chúng tôi luôn sẵn sàng đồng
          hành và hỗ trợ bạn trong mọi lĩnh vực liên quan đến xe Toyota.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Tư vấn trực tiếp – Nhanh chóng & Chính xác
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Sẵn sàng lựa chọn chiếc Toyota phù hợp nhất cho bạn?
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Đội ngũ chuyên viên tư vấn tận tâm sẽ đồng hành cùng bạn từ A đến
              Z.
            </Typography>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-black shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
              Đăng Ký Tư Vấn Ngay
            </button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarCategories;
