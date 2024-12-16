"use client";
import { Box } from "@/components";
import React from "react";
import styled from "styled-components";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  side: "left" | "right";
  children: React.ReactNode;
};

const DrawerCanvas = styled(Box)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.5s ease-in-out;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DrawerContainer = styled(Box)<{
  isOpen: boolean;
  side: "left" | "right";
}>`
  position: fixed;
  top: 0;
  ${({ side }) => side}: 0;
  width: 600px;
  height: 100vh;
  background-color: #fff;
  box-shadow: ${({ side }) =>
    side === "left"
      ? "2px 0 5px rgba(0, 0, 0, 0.3)"
      : "-2px 0 5px rgba(0, 0, 0, 0.3)"};
  transform: ${({ isOpen, side }) =>
    isOpen
      ? "translateX(0)"
      : side === "left"
      ? "translateX(-100%)"
      : "translateX(100%)"};
  transition: all 0.5s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  toggleDrawer,
  side,
  children,
}) => {
  return (
    <DrawerCanvas isOpen={isOpen} onClick={toggleDrawer}>
      <DrawerContainer
        isOpen={isOpen}
        side={side}
        onClick={(e) => e.stopPropagation()}
      >
        <Box>{children}</Box>
      </DrawerContainer>
    </DrawerCanvas>
  );
};
