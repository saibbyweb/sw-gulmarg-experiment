"use client";
import React from "react";
import { Box, Text } from "@/components";
import { Container } from "@/components/styled";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Define Type for Places
interface Place {
  image: string;
  title: string;
  description: string;
}

// Places Data
const places: Place[] = [
  {
    image: "https://i.ibb.co/gTBYBKF/Rectangle-11-1.png",
    title: "Gulmarg Gondola",
    description: "One of the world’s highest cable cars, offering stunning views of snow-capped peaks and lush valleys.",
  },
  {
    image: "https://i.ibb.co/DYRBN80/Rectangle-11-2.png",
    title: "Apharwat Peak",
    description: "A paradise for snow lovers and adventurers with activities like skiing, snowboarding, and panoramic views.",
  },
  {
    image: "https://i.ibb.co/5kNt2yy/Rectangle-11-3.png",
    title: "Gulmarg Golf Course",
    description: "Asia’s highest-altitude golf course, surrounded by scenic views of both cedar and pine forests.",
  },
  {
    image: "https://i.ibb.co/KDy5VFC/Rectangle-11-1.png",
    title: "Khilanmarg",
    description: "A picturesque valley offering mesmerizing views of the Himalayas, just a short trek from Gulmarg.",
  },
  {
    image: "https://i.ibb.co/ZBqz5M8/Rectangle-11.png",
    title: "Alpathar Lake",
    description: "A stunning high-altitude lake located near Apharwat Peak. Its frozen waters are often a breathtaking experience in summer.",
  },
];

// Props for PlaceCard
interface PlaceCardProps {
  place: Place;
  index: number;
}

// PlaceCard Component
const PlaceCard: React.FC<PlaceCardProps> = ({ place, index }) => (
  <Box width="100%" borderRadius="xl" overflow="hidden" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" flexDirection="column" backgroundColor="white" position="relative">
    <Box width="100%" height={400} backgroundImage={`url("${place.image}")`} backgroundPosition="center" backgroundSize="cover" />
    <Box p="lg" position="absolute" bottom={40}>
      <Text variant="quote" mb="sm" color="white">
        {place.title}
      </Text>
      <Box width={index === 1 ? "60%" : "90%"}>
        <Text variant="small" color="white">
          {place.description}
        </Text>
      </Box>
    </Box>
  </Box>
);

export const Places: React.FC = () => {
  return (
    <Container>
      <Box py="6xl" my="6xl">
        {/* Title Section */}
        <Box py="6xl">
          <Text color="primary" variant="H2" display="block">
            where Beauty meets serenity
          </Text>
          <Text variant="H2" mb="xl" color="primary" display="block">
            Things to visit in Gulmarg
          </Text>
          <Text variant="body" color="primary" mb="xl">
            {`Gulmarg, known as the "Meadow of Flowers," is a breathtaking hill station in Kashmir and a popular tourist destination. From breathtaking cable car rides to tranquil
            lakes and snow-capped peaks, Gulmarg offers unforgettable adventures and serene escapes.`}
          </Text>
        </Box>

        {/* Desktop View */}
        <Box display={["none", "block"]}>
          <Row gutter={[24, 24]} justify="center">
            {places.map((place, index) => (
              <Col xs={24} sm={12} md={index === 1 ? 16 : 8} key={index}>
                <PlaceCard place={place} index={index} />
              </Col>
            ))}
          </Row>
        </Box>

        {/* Mobile View - Swiper */}
        <Box display={["block", "none"]}>
          <Swiper spaceBetween={20} slidesPerView={1.2} pagination={{ clickable: true }} modules={[Pagination]}>
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <PlaceCard place={place} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};
