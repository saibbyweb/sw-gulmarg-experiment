import { Box, Text } from "@/components";
import { Container } from "@/components/styled";
import { Col, Row } from "antd";
import React from "react";

export const Places = () => {
  const places = [
    {
      image: "https://i.ibb.co/gTBYBKF/Rectangle-11-1.png",
      title: "Gulmarg Gondola",
      description:
        "One of the world’s highest cable cars, offering stunning views of snow-capped peaks and lush valleys.",
    },
    {
      image: "https://i.ibb.co/DYRBN80/Rectangle-11-2.png",
      title: "Apharwat Peak",
      description:
        "A paradise for snow lovers and adventurers with activities like skiing, snowboarding, and panoramic views.",
    },
    {
      image: "https://i.ibb.co/5kNt2yy/Rectangle-11-3.png",
      title: "Gulmarg Golf Course",
      description:
        "Asia’s highest-altitude golf course, surrounded by scenic views of both cedar and pine forests.",
    },
    {
      image: "https://i.ibb.co/KDy5VFC/Rectangle-11-1.png",
      title: "Khilanmarg",
      description:
        "A picturesque valley offering mesmerizing views of the Himalayas, just a short trek from Gulmarg.",
    },
    {
      image: "https://i.ibb.co/ZBqz5M8/Rectangle-11.png",
      title: "Alpathar Lake",
      description:
        "A stunning high-altitude lake located near Apharwat Peak. Its frozen waters are often a breathtaking experience in summer.",
    },
  ];

  return (
    <Container>
      <Box>
        <Text color="primary" variant={"h3"} display={"block"}>
          where Beauty meets serenity
        </Text>
        <Text variant="H2" mb="xl" color="primary" display={"block"}>
          Things to visit in Gulmarg
        </Text>
        <Text variant="body" color="primary" mb={"xl"}>
          Gulmarg, known as the "Meadow of Flowers," is a breathtaking hill
          station in Kashmir and a popular tourist destination. From
          breathtaking cable car rides to tranquil lakes and snow-capped peaks,
          Gulmarg offers unforgettable adventures and serene escapes.
        </Text>
      </Box>
      <Row gutter={[24, 24]} justify="center">
        {places.map((place, index) => (
          <Col xs={24} sm={12} md={index === 1 ? 16 : 8} key={index}>
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
                backgroundImage={`url("${place.image}")`}
                backgroundPosition="center"
                backgroundSize="cover"
              />
              <Box p="lg" position={"absolute"} bottom={40}>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};
