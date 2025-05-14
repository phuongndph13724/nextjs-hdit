"use client";

import { Typography } from "@material-tailwind/react";
import ProjectCard from "./product-card";

const PROJECTS = [
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
  {
    img: "/image/blog3.jpg",
    title: "Corolla Cross 2024",
    desc: "Thiết kế mới mạnh mẽ, nội thất hiện đại, tiết kiệm nhiên liệu với tùy chọn hybrid. Phù hợp cho cả gia đình và đô thị.",
  },
];

export function Products() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2
          color="blue-gray"
          className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4"
        >
          Sản Phẩm Của Chúng Tôi
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Dù bạn đang tìm kiếm chiếc xe Toyota đầu tiên hay muốn nâng cấp lên
          một phiên bản cao cấp hơn, tôi luôn sẵn sàng giúp bạn biến giấc mơ sở
          hữu xe Toyota thành hiện thực.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Products;
