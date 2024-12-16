import { Box, CenterBox, HoverBox, Row, Text } from "@/components";
import { navbarItems } from "@/constant/navbarItems";
import { BASE_COLORS, BASE_FONTS } from "@/theme";
import styled from "styled-components";

const Banner = styled(Box)`
  background-image: url("https://i.ibb.co/WGcwx6k/image.png");
  background-color: #385e72;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: white;
  padding: 20px;
`;

const ChatButton = styled(HoverBox)`
  height: 48px;
  border-radius: 8px;
  background-color: ${BASE_COLORS.primary || "#007bff"};
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
`;

export default function Footer() {
  return (
    <Banner>
      <Box pt={"4xl"}>
        <Text fontSize={40} fontFamily={BASE_FONTS.instink} fontWeight="bold">
          Your Dream Vacation Awaits
        </Text>
        <Text fontSize={20}>Discover The Magic Of Kashmir</Text>
      </Box>
      <Box mt={"5xl"}>
        <Text fontSize={20} mb={"lg"}>
          Need Help Planning Your Trip?
        </Text>
        <ChatButton>Chat with Us Now</ChatButton>
      </Box>
      <Box>
        <Box
          as="ul"
          flexDirection="row"
          gap={["3xl", "5xl"]}
          margin="none"
          padding="none"
          mt={"6xl"}
        >
          {navbarItems.map((item, index) => (
            <CenterBox as="li" key={index}>
              <Text
                as="a"
                href={item.href}
                color="white"
                fontSize={["8px", 16]}
              >
                {item.label}
              </Text>
            </CenterBox>
          ))}
        </Box>
      </Box>
      <Box border={"1px solid white"} width={["90%", "80%"]} my={"3xl"}></Box>
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        width={["90%", "80%"]}
      >
        <Text fontSize={["12px", 16]}>
          © Copyright 2022, All Rights Reserved by{" "}
        </Text>
        <Row
          justifyContent="space-between"
          alignItems={"center"}
          mt={["lg", "none"]}
        >
          <Text fontSize={["12px", 16]}>Terms & Conditions</Text>
          <Text fontSize={["12px", 16]}>Privacy Policy</Text>
        </Row>
      </Box>
    </Banner>
  );
}
