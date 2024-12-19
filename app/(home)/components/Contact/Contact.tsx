"use client";

import React from "react";
import { Text, Container, Row } from "@/components";
import { Box } from "@/components";
import styled from "styled-components";
import { BASE_COLORS } from "@/theme";

const BackgroundBox = styled(Box)`
  background-image: url("https://i.ibb.co/ncZKx5C/8a39fbf6d3724c42519c4779d86a715d.jpg");
  background-color: #385e7278;
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 16px;
  background-color: #385e7278;
  color: white;
`;

const SubmitButton = styled.button`
  background-color: ${BASE_COLORS.blue};
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Contact = () => {
  return (
    <Box py={"6xl"} bg={"lightBlue"}>
      <Container>
        <Box>
          <BackgroundBox>
            <Box px={"md"}>
              <Text variant="H1" mb="md" color="white">
                Get Connected With Us
              </Text>
              <Row
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  variant="body"
                  mb="4xl"
                  color="white"
                  width={["100%", "60%"]}
                >
                  Subscribe to get information, latest news and other
                  interesting offers about us
                </Text>
              </Row>
              <Row justifyContent={"space-between"} width={"100%"}>
                <Box width={"49%"}>
                  <Text as="label" mb="xs" color="white">
                    Mobile Number
                  </Text>
                  <Input type="text" placeholder="Enter Your Mobile Number" />
                </Box>
                <Box width={"49%"}>
                  <Text as="label" mb="xs" color="white">
                    Email Address
                  </Text>
                  <Input type="email" placeholder="Enter Your Email Address" />
                </Box>
              </Row>
              <SubmitButton>Submit Response</SubmitButton>
            </Box>
          </BackgroundBox>
        </Box>
      </Container>
    </Box>
  );
};
