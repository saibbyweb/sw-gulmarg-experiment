"use client";
import { Box, CenterBox, Container, Text } from "@/components";
import React from "react";

// Array of navbar items
const navbarItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Popular Destinations", href: "#popular-destinations" },
  { label: "Contact with us", href: "#contact" },
  { label: "Our Packages", href: "#our-packages" },
];

export const Navbar = () => {
  return (
    <Container>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="md"
        backgroundColor="white"
        py={"xl"}
      >
        <CenterBox>
          <Text>Logoipsum</Text>
        </CenterBox>

        <Box as="ul" flexDirection="row" gap="xl" margin="none" padding="none">
          {navbarItems.map((item, index) => (
            <CenterBox as="li" key={index}>
              <Text as="a" href={item.href} color="primary">
                {item.label}
              </Text>
            </CenterBox>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
