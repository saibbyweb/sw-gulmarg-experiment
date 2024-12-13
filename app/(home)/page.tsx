"use client";
import { Box } from "@/components";
import { Places } from "./components/Places";
import { Packages } from "./components/Packages";
import { Contact } from "./components/Contact";

const Page = () => {
  return (
    <Box>
      <Places />
      <Packages />
      <Contact />
    </Box>
  );
};

export default Page;
