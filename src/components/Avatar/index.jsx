import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { statisticsCircle } from "../../config/colors";

const AvatarDemo = () => {
  return (
    <Flex css={{ gap: 20 }}>
      <AvatarRoot>
        <AvatarImage></AvatarImage>
        <AvatarFallback>PD</AvatarFallback>
      </AvatarRoot>
    </Flex>
  );
};

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#EFF1F7",
  color: statisticsCircle,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Flex = styled("div", { display: "flex" });

export default AvatarDemo;
