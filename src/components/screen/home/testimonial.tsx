"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <h3 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold lg:max-w-xs">
                Tư vấn & Hỗ trợ Khách hàng – Toyota
              </h3>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                Tôi sẵn sàng hỗ trợ bạn chọn đúng mẫu xe, tư vấn trả góp, đăng
                ký lái thử và giải đáp mọi thắc mắc – nhanh chóng, rõ ràng, tận
                tâm.
              </p>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
                Bùi Đình Tuấn Anh
              </h6>
              <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal mb-5 !text-gray-500">
                Saler @ TOYOTA.
              </p>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar/avt1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer inline-block relative object-cover object-center w-9 h-9 rounded-md opacity-50 ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar/avt2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer inline-block relative object-cover object-center w-9 h-9 rounded-md opacity-50 ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/avatar/avt3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer inline-block relative object-cover object-center w-9 h-9 rounded-md opacity-50 ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar/avt${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
