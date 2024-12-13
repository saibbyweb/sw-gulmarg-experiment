"use client";
import { Box } from "@/components";
import { Places } from "./components/Places";
import { Packages } from "./components/Packages";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar/Navbar";

const Page = () => {
  return (
    <Box>
      <Navbar />
      <Places />
      <Packages />
      <Contact />
    </Box>
  );
};

export default Page;
