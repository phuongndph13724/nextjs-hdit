"use client";
import { sendRequest } from "@/utils/api";
import { useHasMounted } from "@/utils/customHook";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  notification,
  Steps,
  theme,
} from "antd";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Login",
    status: "finish",
    icon: <UserOutlined />,
  },
  {
    title: "Verification",
    status: "finish",
    icon: <SolutionOutlined />,
  },
  {
    title: "Done",
    status: "wait",
    icon: <SmileOutlined />,
  },
];

const ModalReactive = (props: any) => {
  const { open, setOpen, userEmail } = props;
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [userId, setUserId] = useState(null);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const hasMounted = useHasMounted();

  useEffect(() => {
    if (userId) {
      form1.setFieldValue("_id", userId);
    }
  }, [userId]);

  useEffect(() => {
    if (userEmail) {
      form.setFieldValue("userEmail", userEmail);
    }
  }, [userEmail]);

  if (!hasMounted) return <></>;

  const onFinishStep0 = async (values: any) => {
    const { userEmail } = values;
    const res = await sendRequest<IBackendRes<any>>({
      method: "POST",
      url: "/v1/auth/retryCodeVerify",
      body: {
        email: userEmail,
      },
    });
    if (res.data._id) {
      setUserId(res.data._id);
      setCurrent(1);
    } else {
      notification.error({ message: "Đã có lỗi xảy ra" });
    }
  };

  const onFinishStep1 = async (values: any) => {
    const { code, _id } = values;
    const res = await sendRequest<IBackendRes<any>>({
      method: "POST",
      url: "/v1/auth/checkCodeVerify",
      body: {
        _id,
        code,
      },
    });
    if (res.data.isCheckCodeExpiredBefore === true) {
      setCurrent(2);
    } else {
      notification.error({ message: "Đã có lỗi xảy ra" });
    }
  };
  return (
    <>
      <Modal
        open={open}
        title="Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        maskClosable={false}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div style={{ marginTop: 24 }}>
            {current > 0 && current !== steps.length - 1 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  message.success("Processing complete!");
                  setCurrent(0);
                  setOpen(false);
                }}
              >
                Done
              </Button>
            )}
          </div>
        )}
      >
        <Steps current={current} items={items} />
        <div className="my-8">
          {current === 0 && (
            <div>
              <p>Tài khoản của bạn chưa được kích hoạt!</p>
              <Form
                name="verify"
                form={form}
                onFinish={onFinishStep0}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item label="Email" name="userEmail">
                  <Input disabled />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
          {current === 1 && (
            <div>
              <p>Nhập vào mã xác thực tài khoản</p>
              <Form
                name="verifyCode"
                form={form1}
                onFinish={onFinishStep1}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item hidden name="_id">
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Code"
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
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
          {current === 2 && (
            <div>
              <p>Kích hoạt thành công, vui lòng đăng nhập lại.</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalReactive;
