"use client";
import React from "react";
import styled from "styled-components";
import { Box, HoverBox, Text } from "@/components";

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

export const BannerLeftSide = () => {
  return (
    <>
      <Text variant={"body"} mb={"md"}>
        Discover the Magic of Kashmir
      </Text>
      <Text variant="H1">Your Dream Vacation in Gulmarg Awaits</Text>
      <Text variant="body" mb="md">
        Plan your perfect getaway with customized travel packages, exclusive
        deals, and local expertise. Book now and unlock the beauty of the
        Paradise on Earth!
      </Text>
      <Box flexDirection={["column", "row"]} alignItems={"center"} my={"4xl"}>
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
    </>
  );
};
