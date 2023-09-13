import React, { useState } from "react";
import "./admin.css";

function OrderAdmin() {
  return (
    <div className="renderDataDasboardOrder">
      <table>
        <thead>
          <tr
            style={{
              backgroundColor: "black",
              height: "40px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <th> #</th>
            <th> Name </th>
            <th> Total </th>
            <th> Số Lượng </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td className="idAdmin">ư</td>
            <td className="nameAdmin"> ssssssssssssssssssssssssssssss</td>

            <td className="priceAdmin"> ư</td>
            <td className="numberAdmin">ư </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderAdmin;
