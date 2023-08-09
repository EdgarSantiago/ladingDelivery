import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

export default function Alert() {
  const [display, setdisplay] = useState("flex");

  return (
    <Flex
      display={display}
      top={0}
      position={"relative"}
      height="68px"
      bg="#E2F3BB"
      px={[2, 4, 6, 8]}
      textAlign={"center"}
    >
      <Text m="auto" fontSize={["sm", "sm", "md", "lg"]}>
        Start a free trial and enjoy 3 months of Shopify for $ 1/month on select
        plans.{" "}
        <chakra.span textDecoration={"underline"} fontWeight={"bold"}>
          Sign up now
        </chakra.span>
      </Text>
      <SmallCloseIcon
        position={"absolute"}
        fontSize={[20, 20, 25, 30]}
        right={[2, 2, 4]}
        top="50%"
        transform={"translateY(-50%)"}
        onClick={() => setdisplay("none")}
      />
    </Flex>
  );
}
