import { Form, Input, message } from "antd";
import React from "react";
import brandImg from "../images/brand.jpg";
const FormScreen = () => {
  const [formInfo] = Form.useForm();
  const handleFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="mainBackground">
      <div className="formScreen__background">
        <img src={brandImg} alt="" />
      </div>
      <div className="formScreen">
        <Form
          form={formInfo}
          onFinish={handleFinish}
          className="formScreen__form"
        >
          <div className="formScreen__form__info">
            <div className="formScreen__form__info__bar"></div>
            <p className="formScreen__form__info__header">
              THAM GIA NHÓM TÍN HIỆU PRIVATE - DNI INVEST
            </p>
            <p className="formScreen__form__info__subInfo">
              Do Channel chủ yếu cập nhật các lịch livestream + thông tin của
              các AD. Vì vậy, các lệnh hằng ngày sẽ được bắn vào các nhóm tín
              hiệu Private của DNI. Bạn chỉ cần điền form với các thông tin dưới
              đây. Và chờ trong vòng 24H support sẽ liên hệ và hỗ trợ bạn vào
              nhóm.
              <br />
              <br />
              <b>
                NHÓM KHÔNG QUY ĐỊNH SỐ VỐN, KHÔNG THU BẤT KỲ CHI PHÍ NÀO CỦA AE
                CỘNG ĐỒNG DNI.
              </b>
              <br />
              <br />
              Chỉ cần bạn giao dịch dưới link ủng hộ DNI dưới đây:
              <br />
              <br />
              &nbsp;- &nbsp;Link Exness:{" "}
              <a href="https://one.exness-track.com/a/t1k4u1k4">
                &nbsp;https://one.exness-track.com/a/t1k4u1k4
              </a>
              <br />
              Hoặc nhập id giới thiệu <b>8845268</b>
              <br />
              <br />
              <br />- Hoặc Đổi tài khoản dưới link DNI:{" "}
              <a href="https://drive.google.com/file/d/10T6_vyQc6AXJi-aWRNdc8RvcuizM_ss_/view?usp=sharing">
                Đổi link ref DNI
              </a>
              <br />
              <br />
              Nếu chưa biết cách tạo Exness và MT5/MT4 thì xem clip:&nbsp;
              <a href="https://dniinvest.bcns.ai/huongdan">
                Hướng dẫn cho người mới
              </a>
              &nbsp;
              <br />
              <br />
              Mọi thắc mắc xin liên hệ đội ngũ Support:&nbsp;
              <br />
              <b>*Hỗ trợ Exness: </b>
              <br />
              <a href="https://t.me/Quynhanh_DNI">Quỳnh Anh</a>
              <br />
              <a href="https://t.me/Quocphong_DNI">Quốc Phòng</a>
              <br />
              <a href="https://t.me/HangNguyen007">Hằng Nguyễn</a>
              <br />
              <br />
              Cảm ơn sự ủng hộ của các bạn rất nhiều
            </p>
          </div>
          <div className="formScreen__form__input">
            <span>
              Họ Và Tên <span>*</span>
            </span>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              Số Điện Thoại - Chính <span>*</span>
            </span>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập số Điện Thoại - Chính" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              Số Điện Thoại - Số Zalo <span>*</span>
            </span>
            <Form.Item
              name="zalo"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập số Điện Thoại - Số Zalo" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              User Telegram của bạn là gì? <span>*</span>
            </span>
            <Form.Item
              name="telegram"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập User Telegram của bạn" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              Gmail đăng ký tài khoản Exness
              <span>*</span>
            </span>
            <Form.Item
              name="mail"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập Gmail đăng ký tài khoản Exness" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              ID đang giao dịch <span>*</span>
            </span>
            <Form.Item
              name="idtrade"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input placeholder="Nhập ID đang giao dịch" />
            </Form.Item>
          </div>
          <div className="formScreen__form__input">
            <span>
              Bạn đang giao dịch với số vốn bao nhiêu ? Và mong muốn lợi nhuận
              bao nhiêu % / năm ? <span>*</span>
            </span>
            <Form.Item
              name="loinhuan"
              rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div
            className="formScreen__form__input"
            style={{ paddingBottom: "12px" }}
          >
            <p>
              <b>
                <i>Link đăng ký tài khoản mới:</i>
              </b>
            </p>
            <a href="https://one.exnesstrack.com/intl/vi/a/dniinvest">
              https://one.exnesstrack.com/intl/vi/a/dniinvest
            </a>
            <br />
            <br />

            <p>
              <b>
                <i>Link hướng dẫn đổi mã đối tác:</i>
              </b>
            </p>
            <a href="https://drive.google.com/file/d/1I0o5puZmopfUXIKY0NYZhpHFS3Wah6Nb/view?usp=sharing">
              Đổi link ref DNI
            </a>
            <br />
            <br />

            <p>
              <b>
                <i>Mã đối tác:</i>&nbsp;8845268
              </b>
            </p>
          </div>
          <div className="formScreen__form__submit">
            <div onClick={() => formInfo.submit()}>Gửi thông tin</div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormScreen;
