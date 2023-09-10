import React from "react";
import { Card } from "@mantine/core";
import { Skeleton } from "@mantine/core";

const CardSeleton = () => {
  return (
    <Card p={0} shadow="sm" radius="md" withBorder mih={320} mah={521}>
      <Skeleton height={150} mb="md" w={"100%"} />
      <Skeleton
        height={30}
        ml={"xs"}
        w={"80%"}
        mb={"xs"}
        px={"sm"}
        radius="xs"
      />
      <Skeleton height={40} ml={"xs"} w={"40%"} px={"sm"} radius="xs" />
      <Skeleton height={40} mt={"md"} mx={"xs"} w={"90%"} radius="xs" />
    </Card>
  );
};

export default CardSeleton;
