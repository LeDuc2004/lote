import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { createTable } from "../store/createTable";
import { useDispatch, useSelector } from "react-redux";
import { ShowSuccessToast } from "./toast";

export default function TableConform({ price }) {
  const dispatch = useDispatch();

  function handleConform() {
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
        let newUser = {
          ...user,
          bag: [],
        };
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Beaer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newUser),
        });
        dispatch(createTable.actions.updateBag([]));
        ShowSuccessToast("Thanh toán thành công");
      });
  }
  const openModal = () =>
    modals.openConfirmModal({
      title: "Thanh Toán",
      centered: true,
      children: (
        <Text size="sm">
          Bạn có muốn thanh toán với tổng giá tiền là {price} đ
        </Text>
      ),
      labels: { confirm: "Xác nhận", cancel: "Hủy" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => handleConform(),
    });

  return (
    <Button onClick={openModal} color="red" w={"100%"}>
      Thanh toán
    </Button>
  );
}
