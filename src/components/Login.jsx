import { Modal, Button, Group } from "@mantine/core";
import { useForm, isEmail, hasLength } from "@mantine/form";
import { TextInput, Box, Text, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { postData } from "../services";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { createTable } from "../store/createTable";
export default function Login({ opened, open, close }) {
  const [status, setStatus] = useState(true);
  const [serverError, setServerError] = useState("");
  const dispatch = useDispatch();
  const formdk = useForm({
    initialValues: {
      email: "",
      password: "",
      conform: "",
    },

    validate: {
      email: isEmail("Email không hợp lệ"),
      password: hasLength({ min: 6 }, "Mật khẩu phải dài hơn 6 ký tự"),
      conform: (value, values) =>
        value !== values.password ? "Không khớp với mật khẩu" : null,
    },
  });

  const formdn = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Email không hợp lệ"),
      password: hasLength({ min: 6 }, "Mật khẩu phải dài hơn 6 ký tự"),
    },
  });

  function handleResgister(data) {
    let user = {
      ...data,
      bag: [],
    };
    postData("/resgister", user).then((data1) => {
      setServerError(data1.status);
      handleLogin(data)
    });
  }
  function handleLogin(data) {
    postData("/login", data).then((data) => {
      setServerError(data.status);
      if (data.status == "right") {
        localStorage.setItem("token", data.accessToken);
        window.location.href = "/";
      }
    });
  }
  const statusUser = useSelector((state) => state.listTable.statusUser);
  return (
    <>
      {status ? (
        <Modal opened={opened} onClose={close} title="Đăng nhập">
          {serverError == "wrong" ? (
            <ErrorMessage text={"Tài khoản hoặc mật khẩu không chính xác"} />
          ) : (
            ""
          )}
          <Box
            component="form"
            maw={400}
            mx="auto"
            onSubmit={formdn.onSubmit((data) => handleLogin(data))}
          >
            <TextInput
              required
              placeholder="email"
              withAsterisk
              {...formdn.getInputProps("email")}
            />
            <PasswordInput
              required
              placeholder="password"
              withAsterisk
              mt="md"
              {...formdn.getInputProps("password")}
            />
            <Button color={"red"} mt={20} w={"100%"} type="submit">
              Đăng nhập
            </Button>
          </Box>
          <Text
            style={{ cursor: "pointer" }}
            ml={7}
            mt={10}
            c={"blue"}
            fz={14}
            td="underline"
            onClick={() => setStatus(!status)}
          >
            Don't have an account? Register
          </Text>
        </Modal>
      ) : (
        <Modal opened={opened} onClose={close} title="Đăng ký">
          {serverError == "tt" ? (
            <ErrorMessage text={"Tài khoảng đã tồn tại"} />
          ) : (
            ""
          )}

          <Box
            component="form"
            maw={400}
            mx="auto"
            onSubmit={formdk.onSubmit((data) => handleResgister(data))}
          >
            <TextInput
              required
              placeholder="email"
              withAsterisk
              {...formdk.getInputProps("email")}
            />
            <PasswordInput
              required
              placeholder="password"
              withAsterisk
              mt="md"
              {...formdk.getInputProps("password")}
            />
            <PasswordInput
              required
              placeholder="conform password"
              withAsterisk
              mt="md"
              {...formdk.getInputProps("conform")}
            />
            <Button color={"red"} mt={20} w={"100%"} type="submit">
              Đăng ký
            </Button>
          </Box>
          <Text
            style={{ cursor: "pointer" }}
            ml={7}
            mt={10}
            c={"blue"}
            fz={14}
            td="underline"
            onClick={() => setStatus(!status)}
          >
            Have an account? Login
          </Text>
        </Modal>
      )}
    </>
  );
}
