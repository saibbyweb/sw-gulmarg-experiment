import { Box, Text } from "@/components";
import { Button, Container } from "@/components/styled";
import { Col, Row } from "antd";
import React from "react";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";

export const Packages = () => {
  const packages = [
    {
      image: "https://i.ibb.co/gTBYBKF/Rectangle-11-1.png",
      title: "Snow Adventure Package",
      description:
        "One of the world’s highest cable cars, offering stunning views of snow-capped peaks and lush valleys.",
    },
    {
      image: "https://i.ibb.co/DYRBN80/Rectangle-11-2.png",
      title: "Family Delight Package",
      description:
        "A paradise for snow lovers and adventurers with activities like skiing, snowboarding, and panoramic views.",
    },
    {
      image: "https://i.ibb.co/5kNt2yy/Rectangle-11-3.png",
      title: "Honeymoon Package",
      description:
        "Asia’s highest-altitude golf course, surrounded by scenic views of both cedar and pine forests.",
    },
  ];

  return (
    <Container>
      <Box py={"6xl"}>
        <Box mb={"xl"}>
          <Text color="primary" variant={"h3"}>
            Our Packages
          </Text>
          <Text variant="H2" mb="xl" color="primary">
            Unmatched Gulmarg Travel Packages
          </Text>
          <Text variant="body" color="primary">
            From thrilling adventures to romantic escapes, explore our curated
            travel packages designed to make your Gulmarg trip unforgettable.
            Explore our curated travel packages specially designed for you.
          </Text>
        </Box>
        <Row gutter={[24, 24]} justify="center">
          {packages.map((packages, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Box
                width={"100%"}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                flexDirection="column"
                backgroundColor="white"
              >
                <Box
                  width={"100%"}
                  height={400}
                  backgroundImage={`url("${packages.image}")`}
                  backgroundPosition="center"
                  backgroundSize="cover"
                />
                <Box p="lg" position={"absolute"} bottom={40} width={"100%"}>
                  <Text
                    fontFamily={"latoBold"}
                    fontSize={24}
                    color="white"
                    mb={"md"}
                  >
                    {packages.title}
                  </Text>
                  <Row align={"middle"}>
                    <Box alignItems={"center"} flexDirection={"row"} mr={"xl"}>
                      <LuSunMoon color="white" size={24} />
                      <Text color="white" ml={"sm"}>
                        3 Days
                      </Text>
                    </Box>
                    <Box alignItems={"center"} flexDirection={"row"}>
                      <LuMoonStar color="white" />
                      <Text color="white" ml={"sm"}>
                        {" "}
                        2 Nights
                      </Text>
                    </Box>
                  </Row>
                  <Box
                    width={"85%"}
                    height={64}
                    borderRadius={"xl"}
                    bg={"black"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mt={"xl"}
                  >
                    <Text color="white"> View Details</Text>
                  </Box>
                </Box>
                <Box position={"absolute"} top={30} left={30}>
                  <Box
                    borderWidth={1}
                    borderColor={"white"}
                    borderStyle={"solid"}
                    borderRadius={"circle"}
                    p={"lg"}
                  >
                    <Text color="white">₹12,999/person</Text>
                  </Box>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Box>
    </Container>
  );
};