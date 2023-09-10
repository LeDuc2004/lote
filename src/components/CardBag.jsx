import React from "react";
import { Flex, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CardBag = ({item}) => {
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
        marginBottom:"10px"
      }}
    >
      <div className="wrap-img" style={{ height: "70px", width: "80px" }}>
        <img
          style={{ width: "100%" }}
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
        <div>{item.price} x 2</div>
      </div>
      <div className="rash">
        <IconTrash style={{marginTop:"10px"}}/>
      </div>
    </div>
  );
};

export default CardBag;
