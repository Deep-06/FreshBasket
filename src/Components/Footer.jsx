import img from "../Images/Elegant_Online_Shopping_Logo_Template-removebg-preview (3) (1).jpg"

import {
  HStack,
  Heading,
  Link,
  VStack,
  Box,
  Container,
  Stack,
  Text,
  Button,
  Grid,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box padding={"30px 30px 10px 30px"} bg={"#13162f"} color="white">


      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={15}

      >
        <VStack alignItems={"flex-start"}>
          <Heading as={"h3"} size={"md"}>
            Company
          </Heading>
          <hr style={{ width: '65px' }} />
          <Link>About Us</Link>
          <Link>Blog</Link>
          <Link>Collection</Link>
          <Link>Contact Us</Link>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading as={"h3"} size={"md"}>
            Support
          </Heading>
          <hr style={{ width: '65px' }} />
          <Link>Help Center</Link>
          <Link>Safety Center</Link>
          <Link>Get Support Now</Link>
          <Link>Community Guidelines</Link>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading as={"h3"} size={"md"}>
            Legal
          </Heading>
          <hr style={{ width: '40px' }} />
          <Link>Cooking Policy</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Law Enforcement</Link>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading as={"h3"} size={"md"}>
            Install App
          </Heading>
          <hr style={{ width: '70px' }} />
          <Image
            _hover={{ cursor: "pointer" }}
            src={
              "https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
            }
            width={"150px"}
            objectFit={"cover"}
          />

          <Image
            marginTop={'-20px'}
            _hover={{ cursor: "pointer" }}
            src={img}
            width={"150px"}
            objectFit={"cover"} border={"none"}
          />
          <HStack display={'flex'} spacing={10} marginLeft={'10px'}>
            <FaTwitter className="footer-icon" />
            <FaYoutube className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </HStack>
        </VStack>
      </Grid>
      <Stack
        border="none"
        marginTop={"10px"}
        paddingTop={"20px"}
        paddingBottom={'10px'}
        justifyContent="space-around"
        alignItems={{ base: "flex-start", md: "center", lg: "center" }}
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Text>Copyright © {new Date().getFullYear()} FreshBasket, All Rights Reserved</Text>
      </Stack>
    </Box>
  );
};

export default Footer;