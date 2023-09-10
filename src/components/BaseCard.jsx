import React from "react";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { IconHeartFilled, IconTag } from "@tabler/icons-react";

const BaseCard = ({ item }) => {
    function handleAdd(params) {
        
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

      <Button color="red" w={"100%"} mt={15} onClick={()=>handleAdd()}>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};

export default BaseCard;
