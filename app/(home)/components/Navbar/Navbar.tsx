"use client";
import React, { useState } from "react";
import { Box, CenterBox, Container, Text } from "@/components";
import { navbarItems } from "@/constant/navbarItems";
import { Drawer } from "@/components/Drawer";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons/fi

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Container>
      {/* Navbar Wrapper */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="md"
        backgroundColor="white"
        py={"xl"}
      >
        {/* Logo */}
        <CenterBox>
          <Text fontSize="lg" fontWeight="bold">
            Logoipsum
          </Text>
        </CenterBox>

        {/* Desktop Menu */}
        <Box
          as="ul"
          flexDirection="row"
          gap="xl"
          margin="none"
          padding="none"
          display={["none", "flex"]} // Hide on mobile
        >
          {navbarItems.map((item, index) => (
            <CenterBox as="li" key={index}>
              <Text as="a" href={item.href} color="primary">
                {item.label}
              </Text>
            </CenterBox>
          ))}
        </Box>

        <Box
          display={["block", "none"]}
          onClick={toggleDrawer}
          cursor="pointer"
        >
          <FiMenu size={24} color="#333" />
        </Box>
      </Box>

      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} side="right">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p="lg"
          borderBottom="1px solid #ddd"
        >
          <Box />
          <Box onClick={toggleDrawer} cursor="pointer">
            <FiX size={24} color="#333" />
          </Box>
        </Box>

        <Box p="lg" flexDirection="column" gap="lg">
          {navbarItems.map((item, index) => (
            <Box key={index}>
              <Text
                as="a"
                href={item.href}
                color="primary"
                fontSize="md"
                onClick={toggleDrawer}
              >
                {item.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};
