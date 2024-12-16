"use client";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Box, Container } from "@/components";
import { BannerLeftSide } from "./BannerLeftSide/BannerLeftSide";
import { BannerRightSide } from "./BannerRightSide";

const BannerBox = styled(Box)`
  background-image: url("https://i.ibb.co/WGcwx6k/image.png");
  background-color: #00000075;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Banner = () => {
  return (
    <BannerBox>
      <Container>
        <Box py={["6xl", "none"]}>
          <Row gutter={[32, 32]} align="middle" justify="center">
            <Col xs={24} md={12}>
              <BannerLeftSide />
            </Col>
            <Col xs={24} md={10}>
              <BannerRightSide />
            </Col>
          </Row>
        </Box>
      </Container>
    </BannerBox>
  );
};
