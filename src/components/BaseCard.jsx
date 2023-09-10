import React from "react";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { IconHeartFilled, IconTag } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { createTable } from "../store/createTable";
import { putData } from "../services";
import { ShowSuccessToast } from "./toast";

const BaseCard = ({ item }) => {
  const dispatch = useDispatch();

  function handleAdd(card) {
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
        const exiting = user.bag.find((item) => {
          return item.name == card.name;
        });
        if (exiting) {
          let newBag = user.bag.map((item) => {
            if (item.name == exiting.name) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
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
          })
          ShowSuccessToast("Thêm vào giỏ hàng thành công")
          dispatch(createTable.actions.updateBag(newBag));
        } else {
          let newBag = [...user.bag, { ...card, quantity: 1 }];
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
          })
          ShowSuccessToast("Thêm vào giỏ hàng thành công")
          dispatch(createTable.actions.addProduct({ ...card, quantity: 1 }));
        }
      });
  }
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder mih={320} mah={521}>
      <Card.Section>
        <Image src={item.img} height={190} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs" noWrap>
        <Text
          fz={21}
          weight={500}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "80%",
          }}
        >
          {item.name}
        </Text>
        <IconHeartFilled style={{ color: "red", marginTop: "4px" }} />
      </Group>

      <div
        style={{ width: "100%", height: "1px", background: "lightgray" }}
      ></div>

      <Flex
        gap="xs"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Group>
          <Text fz={25} fw={700} c={"#ff5b6a"}>
            {item.price}
          </Text>
          <Text fz={25} fw={700} c={"#ff5b6a"} ml={-10} td="underline">
            đ
          </Text>
        </Group>
      </Flex>

      <Button color="red" w={"100%"} mt={15} onClick={() => handleAdd(item)}>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};

export default BaseCard;
