import React, { useState, useEffect } from "react";
import "../scss/giohang.scss";
import {
  Header,
  MediaQuery,
  Burger,
  Text,
  Grid,
  Box,
  Flex,
  Anchor,
  Button,
} from "@mantine/core";
import { Image } from "@mantine/core";
import { createStyles, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Group, rem } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";
import { createTable, fetchBestSeller } from "../store/createTable";
import CardBag from "./CardBag";
import openDeleteModal from "./TableConform";
import TableConform from "./TableConform";

const useStyles = createStyles((theme) => ({
  BaseAnchor: {
    color: "black",
    fontSize: 16,
    fontWeight: 700,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    "&:hover": {
      borderTop: "2px solid white",
      borderBottom: "2px solid #ff5b6a",
      color: "#ff5b6a",
      textDecoration: "none",
    },
  },
  BaseAnchorActive: {
    fontSize: 16,
    fontWeight: 700,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",

    borderTop: "2px solid white",
    color: "#ff5b6a",
    borderBottom: "2px solid #ff5b6a",
    "&:hover": {
      textDecoration: "none",
    },
  },
  icon: {
    boxShadow: "0 4px 8px rgba(0,0,0,.15)",
    borderRadius: "50%",
    margin: "0 10px !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const CustomHeader = () => {
  const pathName = window.location.pathname;
  const { classes } = useStyles();
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [openNav, setopenNav] = useState(false);
  const token = localStorage.getItem("token");
  const [EmailUser, setEmailUser] = useState("");
  const [NavChose, setNavChose] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
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
          setEmailUser(user.email);
          dispatch(createTable.actions.updateBag(user.bag));
        });
    }
  }, []);

  const Bag = useSelector(({ listTable }) => listTable);
  function calcPrice(arr) {
    let formatter = new Intl.NumberFormat("vi-VN");
    let price = 0;
    arr.forEach((item) => {
      price = price + Number(item.price.replace(/\./g, "")) * item.quantity;
    });
    return formatter.format(price);
  }
  function handleOpen(text) {
    setNavChose(text);
    setopenNav(!openNav);
    toggle();
  }
  function logout() {
    localStorage.setItem("token", "");
    window.location.href = "/";
  }
  return (
    <Header height={{ base: 100 }} px="md">
      <Grid
        justify="space-between"
        align="center"
        style={{ height: "100%" }}
        m={0}
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          style={{ height: "100%" }}
        >
          <Box w={67} h={67} mx={30}>
            <Anchor href="/">
              <Image
                mx="auto"
                radius="md"
                src="/lotteria_logo.svg"
                alt="LOGO LOTE"
              />
            </Anchor>
          </Box>
          <Flex
            mih={100}
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Anchor
              className={
                pathName.includes("/fastfood")
                  ? classes.BaseAnchorActive
                  : classes.BaseAnchor
              }
              href="/fastfood"
            >
              FAST FOOD
            </Anchor>
            <Anchor
              className={
                pathName.includes("/drinks")
                  ? classes.BaseAnchorActive
                  : classes.BaseAnchor
              }
              href="/drinks"
            >
              DRINKS
            </Anchor>
          </Flex>
        </Box>

        <Box style={{ display: "flex" }}>
          <Box w={40} h={40} mx={30} className={classes.icon}>
            <Image
              p={10}
              src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
              alt="LOGO LOTE"
              onClick={() => handleOpen("login")}
            />
          </Box>
          <Box w={40} h={40} mx={30} className={classes.icon}>
            <div
              id="giohang"
              data-filter={Bag.bag.length > 0 ? Bag.bag.length : 0}
            >
              <img
                onClick={() => handleOpen("bag")}
                src="https://www.lotteria.vn/grs-static/images/icon-cart.svg"
                alt=""
              />
            </div>
          </Box>
        </Box>
      </Grid>
      {token ? (
        <Drawer.Root
          mt={100}
          position="right"
          size={"xs"}
          opened={openNav}
          onClose={() => setopenNav(!openNav)}
        >
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Header>
              {NavChose == "bag" ? (
                <Drawer.Title fw={500}>Giỏ hàng</Drawer.Title>
              ) : (
                <Drawer.Title fw={500}>Thông tin tài khoản</Drawer.Title>
              )}

              <Drawer.CloseButton />
            </Drawer.Header>
            <Drawer.Body style={{ height: "calc(100% - 54px)" }}>
              <div
                className="ttuser"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                {NavChose == "bag" ? (
                  <div
                    style={{
                      overflowY: "scroll",
                      maxHeight: "400px",
                      borderBottom: "2px solid #ff5b6a",
                    }}
                  >
                    {Bag.status == "idle"
                      ? Bag.bag.map((item, index) => (
                          <CardBag key={index} item={item} />
                        ))
                      : ""}
                  </div>
                ) : (
                  <div>{EmailUser}</div>
                )}
                {NavChose == "bag" && Bag?.bag?.length > 0 ? (
                  <div
                    style={{
                      fontSize: "17px",
                      color: "#ff5b6a",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    Tổng giá tiền:{" "}
                    {Bag.status == "idle" ? calcPrice(Bag.bag) : ""} đ
                  </div>
                ) : (
                  ""
                )}

                <Group position="start">
                  {NavChose == "bag" ? (
                   <TableConform price={calcPrice(Bag.bag)}/>
                  ) : (
                    <Button
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => logout()}
                      w={"100%"}
                      color="red"
                    >
                      Đăng xuất
                    </Button>
                  )}
                </Group>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      ) : (
        <Login opened={opened} open={open} close={close} />
      )}
    </Header>
  );
};

export default CustomHeader;
