"use client";
import styled from "styled-components";
import { Row, Col } from "antd";
import { BASE_COLORS } from "@/theme";
import { Box, Container, HoverBox, Text } from "@/components";

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

// Social Icons Container
const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

// Input Field
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

// Submit Button
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

export const Banner = () => {
  return (
    <BannerBox>
      <Container>
        <Box py={["6xl", "none"]}>
          <Row gutter={[32, 32]} align="middle" justify="center">
            {/* Left Column */}
            <Col xs={24} md={12}>
              <Text variant={"body"} mb={"md"}>
                Discover the Magic of Kashmir
              </Text>
              <Text variant="H1">Your Dream Vacation in Gulmarg Awaits</Text>
              <Text variant="body" mb="md">
                Plan your perfect getaway with customized travel packages,
                exclusive deals, and local expertise. Book now and unlock the
                beauty of the Paradise on Earth!
              </Text>
              <Box
                flexDirection={["column", "row"]}
                alignItems={"center"}
                my={"4xl"}
              >
                <HoverBox
                  backgroundColor="white"
                  color="primary"
                  px="lg"
                  py="md"
                  borderRadius="circle"
                  cursor="pointer"
                  width={171}
                  border={"1px solid white"}
                  mr={["none", "xl"]}
                >
                  Chat With Us
                </HoverBox>
                <Box
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={["center"]}
                  mt={["xl", "none"]}
                >
                  <Text variant={"quote"} color="yellow">
                    100+
                  </Text>
                  <Text variant={"body"} width={"60%"} ml={"md"}>
                    Experienced in Managing Over Gulmarg Packages
                  </Text>
                </Box>
              </Box>
              <SocialIcons>
                <img src="https://i.pravatar.cc/40?img=1" alt="User 1" />
                <img src="https://i.pravatar.cc/40?img=2" alt="User 2" />
                <img src="https://i.pravatar.cc/40?img=3" alt="User 3" />
                <Text ml="sm">+ Thousands more</Text>
              </SocialIcons>
            </Col>

            {/* Right Column */}
            <Col xs={24} md={10}>
              <Box
                backgroundColor="rgba(255, 255, 255, 0.15)"
                borderRadius="12px"
                px={["xl", "2xl"]}
                py={["lg", "3xl"]}
                backdropFilter="blur(10px)"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              >
                <Text variant="H3" fontSize={[20, 24]} mb="md">
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
            </Col>
          </Row>
        </Box>
      </Container>
    </BannerBox>
  );
};
