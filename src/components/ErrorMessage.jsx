import React from "react";
import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

const ErrorMessage = ({ text }) => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      color="red"
      radius="md"
      variant="outline"
      mb={10}
    >
      {text}
    </Alert>
  );
};

export default ErrorMessage;
