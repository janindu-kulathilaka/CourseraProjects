import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="start"
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      width="300px"
    >
      <Box width="100%">
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      <VStack align="start" spacing={2} flex={1}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>

      <Box alignSelf="flex-end">
        <FontAwesomeIcon icon={faArrowRight} />
      </Box>
    </VStack>
  );
};

export default Card;
