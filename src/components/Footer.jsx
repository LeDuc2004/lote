import React from "react";
import "../scss/footer.scss";
import { NAVFOOTER } from "../context/contain";
const CustomFooter = () => {
  return (
    <div className="f-footer">
      <div className="f-top">
        <div className="column-1">
          <img
            src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg"
            alt=""
          />
          <h3>Đăng ký thông tin khuyến mãi</h3>
        </div>
        {NAVFOOTER.map((item) => (
          <div className="column-x">
            <h4>{item.label}</h4>
            {item.text.map((text) => (
              <div style={{cursor:"pointer",marginBottom:"10px"}}>{text}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="f-bottom">© 2022 Lotteria All Rights Reserved Site by LDCC</div>
    </div>
  );
};

export default CustomFooter;
