// @ts-nocheck
"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
          Liên Hệ Với Tôi
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full lg:w-5/12 !text-gray-500">
          Sẵn sàng sở hữu chiếc Toyota phù hợp nhất? Hãy để lại thông tin qua
          form bên dưới – tôi sẽ liên hệ và đồng hành cùng bạn trên hành trình
          lựa chọn xe dễ dàng, nhanh chóng và hiệu quả!
        </p>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Thông tin liên hệ
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Gửi thông tin và chúng toi sẽ liên hệ với bạn trong vòng 24 giờ.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +84 961 534 861
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  buidinhtuananh2001@mail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Đ. Lê Thái Tổ, Võ Cường, Bắc Ninh
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                {/* @ts-ignore */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                {/* @ts-ignore */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Họ"
                    name="last-name"
                    placeholder="vd. Nguyễn"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Tên"
                    name="first-name"
                    placeholder="eg. A"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                </div>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="first-name"
                    placeholder="eg. nguyenvana@mail.com"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Số điện thoại"
                    name="last-name"
                    placeholder="vd. 09*******"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>

                <p className="block antialiased font-sans font-normal text-inherit !text-blue-gray-500 text-sm mb-2">
                  Bạn cần tư vấn về?
                </p>
                <div className="-ml-3 mb-14 ">
                  <Radio
                    color="gray"
                    name="type"
                    label="Mua xe"
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Tư vấn" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Bảo hành" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Khác" />
                </div>
                <div className="relative w-full min-w-[200px] !min-w-full mb-8">
                  <textarea
                    name=""
                    id=""
                    placeholder=" "
                    className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900 !resize-none"
                  ></textarea>
                  <label
                    htmlFor=""
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-1 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900"
                  >
                    Tin nhắn của bạn
                  </label>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full md:w-fit"
                    color="gray"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
