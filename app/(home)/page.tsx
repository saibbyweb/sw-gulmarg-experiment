"use client";
import { Box } from "@/components";
import { Places } from "./components/Places";
import { Packages } from "./components/Packages";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Banner } from "./components/Banner";

const Page = () => {
  return (
    <Box>
      <Navbar />
      <Banner />
      <Places />
      <Packages />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Page;
