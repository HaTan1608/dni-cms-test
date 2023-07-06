import { Form, Input, message } from "antd";
import React from "react";
import brandImg from "../images/brand.jpg";

const SignIn = () => {
  const [formInfo] = Form.useForm();
  const handleFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="signin__mainBackground">
      <div className="signin__background">
        <img src={brandImg} alt="" />
      </div>
      <div className="signin">
        <Form form={formInfo} onFinish={handleFinish} className="signin__form">
          <div className="signin__form__info">
            <p className="signin__form__info__header">DNI CMS</p>
          </div>
          <span>
            Tên đăng nhập <span style={{ color: "red" }}>*</span>
          </span>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          <span>
            Mật khẩu <span style={{ color: "red" }}>*</span>
          </span>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
          >
            <Input placeholder="Nhập mật khẩu" />
          </Form.Item>

          <div className="signin__form__submit">
            <div onClick={() => formInfo.submit()}>Gửi thông tin</div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
