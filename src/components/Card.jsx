import React from "react";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { IconHeartFilled, IconTag } from "@tabler/icons-react";

const CustomCard = ({ item }) => {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder mih={520} mah={521}>
      <Card.Section>
        <Image src={item.img} height={250} alt="Norway" />
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

      <Flex
        mih={50}
        gap="xs"
        justify="start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        {item?.detail?.map((name) => (
          <Text fz="md" c={"gray"}>
            {name}
          </Text>
        ))}

        <div
          style={{ width: "100%", height: "1px", background: "lightgray" }}
        ></div>
      </Flex>

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
        <Group>
          <Text td="line-through" fz={17} c={"gray"}>
            {item.discount}
          </Text>
          {item.discount && (
            <IconTag
              style={{
                width: "19px",
                marginLeft: "-10px",
                marginTop: "5px",
                color: "#ff5b6a",
              }}
            />
          )}
        </Group>
      </Flex>

      <Button color="red" w={"100%"} mt={15}>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};

export default CustomCard;
