import React, { useState } from "react";
import "./admin.css";

function TaskAdmin() {
  return (
    <div className="flexTask">
      <div className="renderDataDasboardCategori">
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
              <th> Type </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td className="idAdmin">dd</td>
              <td className="nameAdmin"> dd </td>

              <td className="actionAdmin">
                <ul style={{ padding: "5px 0px 0px 0px" }}>
                  <li className="editProductAdmin"> Sửa </li>
                  <li className="deleteProductAdmin"> Xóa</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <from>
          <input placehodler="Thêm categori" />
          <button> Submit </button>
        </from>
      </div>
    </div>
  );
}

export default TaskAdmin;
