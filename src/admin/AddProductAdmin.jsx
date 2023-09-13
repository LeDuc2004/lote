import React, { useState } from "react";
import "./admin.css";
import axios from "axios";

function AddProductAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: "",
    type: "drinks", // Mặc định là "drinks"
    detail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dựa vào giá trị của formData.type để xác định endpoint tương ứng
    const endpoint =
      formData.type === "drinks"
        ? "drinks"
        : "fastfood"
        ? "bestseller"
        : "drinks";

    // Gửi dữ liệu formData lên máy chủ
    axios
      .post(`http://localhost:3000/${endpoint}`, formData)
      .then((response) => {
        console.log("Thêm sản phẩm thành công:", response.data);
        // Reset trường input sau khi thêm sản phẩm
        setFormData({
          name: "",
          img: "",
          price: "",
          type: "drinks",
          detail: "",
        });
      })
      .catch((error) => {
        console.error("Lỗi khi thêm sản phẩm:", error);
      });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="formbold-input-flex">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="now"
                className="formbold-form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name" className="formbold-form-label">
                Name
              </label>
            </div>
            <div>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="img"
                className="formbold-form-input"
                value={formData.img}
                onChange={handleInputChange}
              />
              <label htmlFor="img" className="formbold-form-label">
                Img
              </label>
            </div>
          </div>
          <div className="formbold-input-flex">
            <div>
              <input
                type="number"
                name="price"
                id="price"
                className="formbold-form-input"
                value={formData.price}
                onChange={handleInputChange}
              />
              <label className="formbold-form-label">Price</label>
            </div>
            <div>
              <select
                name="type"
                value={formData.type}
                onChange={handleSelectChange}
              >
                <option value="drinks" type="drinks">
                  {" "}
                  Drink
                </option>
                <option value="fastfood" type="fastfood">
                  {" "}
                  Fast Food
                </option>
                <option value="bestseller" type="bestseller">
                  {" "}
                  Best Seller
                </option>
              </select>
            </div>
          </div>
          <div className="formbold-textarea">
            <textarea
              rows={6}
              name="detail"
              id="detail"
              placeholder="Detail"
              className="formbold-form-input"
              value={formData.detail}
              onChange={handleInputChange}
            />
          </div>
          <div className="formbold-input-file">
            <div className="formbold-filename-wrapper"></div>
            <label htmlFor="upload" className="formbold-input-label"></label>
          </div>
          <button className="formbold-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductAdmin;
