import React from "react";
import { Flex, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { ShowSuccessToast } from "./toast";
import { useDispatch, useSelector } from "react-redux";

import { createTable } from "../store/createTable";

const CardBag = ({ item }) => {
  const dispatch = useDispatch();

  function handledeleteCard(name) {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Beaer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 404) {
          window.location.href = "/";
        } else {
          return res.json();
        }
      })
      .then(({ user }) => {
        let newBag = user.bag.filter((item) => {
          if (item.name == name) {
            return;
          }
          return item;
        });
        let newUser = {
          ...user,
          bag: newBag,
        };
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Beaer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newUser),
        });
        dispatch(createTable.actions.updateBag(newBag));
      });
  }
  return (
    <div
      className="cardBag"
      style={{
        width: "100%",
        height: "max-content",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        borderBottom: "1px solid lightgray",
        alignItems: "center",
      }}
    >
      <div className="wrap-img" style={{ height: "80px", width: "80px" }}>
        <img
          style={{
            width: "100%",
            borderRadius: "15px",
            height: "100%",
            padding: "12px 0",
          }}
          src={item.img}
          alt=""
        />
      </div>
      <div
        className="wrap-name"
        style={{
          width: "166px",
        }}
      >
        <div
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {item.name}
        </div>
        <div>
          {item.price} x {item?.quantity}
        </div>
      </div>
      <div className="rash">
        <IconTrash
          onClick={() => handledeleteCard(item.name)}
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default CardBag;
