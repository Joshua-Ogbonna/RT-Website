import { Flex, Text } from "@chakra-ui/react";

const FirstSDG = () => {
  return (
    <Flex
      bg={"pink300"}
      flexDir={"column"}
      mt={5}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
      >
        <Flex
          bg={"green300"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={"40px"}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
          >
            Our Commitment - SDG 4
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", lg: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
          >
            Aligned with the United Nations Sustainable Development Goal 4 (Quality Education), RoadTrip Community recognizes the significance of continuous education in the tech industry. We aim to raise awareness about the importance of education and lifelong learning by providing access to resources, networking opportunities, and mentorship to help our members achieve their professional goals.
          </Text>
          <Flex
            bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            border={"2px solid #000"}
            m={"auto"}
          ></Flex>
        </Flex>
        <Flex
          bg={"#FAD5CE"}
          maxW={"588px"}
          h={{ base: "675px", md: "866px" }}
          w={"100%"}
          color={"black100"}
          px={{ base: "16px", md: "40px" }}
          flexDir={"column"}
          pb={{ base: "48px", md: "40px" }}
        >
          <Text
            fontFamily={"clash"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={700}
            pb={"17px"}
            pt={{ base: "48px", md: "64px" }}
          >
            Our Commitment - SDG 5
          </Text>
          <Text
            fontFamily={"manrope"}
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={600}
            pb={{ base: "16px", md: "40px" }}
          >
            Dedicated to promoting diversity and inclusion in the tech industry, RoadTrip Community aligns with the United Nations Sustainable Development Goal 5 (Gender Equality). We strive to create a community where everyone feels welcome and respected, breaking down gender barriers, and empowering individuals to thrive in the tech industry, regardless of their gender or background.
          </Text>
          <Flex
            bg={"#E1E6E3"}
            maxW={"508px"}
            w={"100%"}
            h={{ base: "373px", md: "522px" }}
            border={"2px solid #000"}
            // alignItems={"center"}
            m={"auto"}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default FirstSDG;
