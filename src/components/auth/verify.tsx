"use client";
import React from "react";
import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { sendRequest } from "@/utils/api";
import { useRouter } from "next/navigation";

const Verify = (props: any) => {
  const { id } = props;
  const router = useRouter();
  const onFinish = async (values: any) => {
    const { _id, code } = values;
    const res = await sendRequest<IBackendRes<any>>({
      method: "POST",
      url: "/v1/auth/checkCodeVerify",
      body: {
        _id,
        code,
      },
    });

    if (+res?.statusCode === 201) {
      notification.success({
        message: "Kích hoạt tài khoản thành công!",
      });
      router.push(`/auth/login`);
    } else {
      notification.error({
        message: res.message,
      });
    }
  };

  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Kích hoạt tài khoản {id}</legend>

          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item hidden label="ID" name="_id" initialValue={id}>
              <Input />
            </Form.Item>
            <h1 className="text-2xl folt-bold">
              Điền mã code được gửi đến email để kích hoạt tài khoản.
            </h1>
            <br />
            <br />
            <Form.Item
              label="Verify code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your code!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link href={"/"}>
            <ArrowLeftOutlined /> Quay lại trang chủ
          </Link>
          <Divider />
          <div style={{ textAlign: "center" }}>
            Quay lại trang đăng nhập?{" "}
            <Link href={"/auth/login"}>Đăng nhập</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default Verify;
