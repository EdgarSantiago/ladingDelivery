import { ButtonGroupProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ButtonG({
  children,
  my,
  mx,
  w,
  boxShadow,
}: ButtonGroupProps) {
  return (
    <Text
      boxShadow={boxShadow}
      textAlign={"center"}
      fontSize={["sm", "md", "lg"]}
      w={w}
      py={[3, 3, 4]}
      px={[4, 6, 8]}
      my={my}
      mx={mx}
      bg="#ffffff"
      borderRadius={"36px"}
      fontWeight={"bold"}
      border="5px solid #111111"
    >
      {children}
    </Text>
  );
}
