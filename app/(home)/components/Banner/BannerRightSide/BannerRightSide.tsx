import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Box, HoverBox, Text } from "@/components";
import { BASE_COLORS } from "@/theme";

const InputField = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(HoverBox)`
  background-color: ${BASE_COLORS.blue};
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${BASE_COLORS.background || "#0056b3"};
  }
`;

export const BannerRightSide = () => {
  return (
    <Box
      style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)" }}
      borderRadius="m"
      px={["xl", "2xl"]}
      py={["lg", "3xl"]}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
    >
      <Text variant="H2" fontSize={[20, 24]} mb="md">
        Plan Your Perfect Escape to Kashmir Today
      </Text>
      <Box my={"4xl"}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <InputField placeholder="Enter Your Firstname" />
          </Col>
          <Col xs={24} md={12}>
            <InputField placeholder="Enter Your Lastname" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <InputField placeholder="Enter Your Mobile Number" />
          </Col>
          <Col xs={24} md={12}>
            <InputField placeholder="Enter Your Email Address" />
          </Col>
        </Row>
      </Box>
      <SubmitButton>Submit Response</SubmitButton>
    </Box>
  );
};
