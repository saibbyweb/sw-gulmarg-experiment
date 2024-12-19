"use client";
import { CenterBox, Text } from "@/components";

export const TestComponent: React.FC = () => {
  return (
    <CenterBox width={"100%"} height={"100%"}>
      <Text color="white" variant="H2">
        Test Component
      </Text>
    </CenterBox>
  );
};
