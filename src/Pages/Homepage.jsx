import React from "react";
import styled from 'styled-components';
import {
  Box,
  Heading,
  Text,
  Image,
  GridItem,
  Grid,
} from "@chakra-ui/react";
 import img from "../Images/pngwing.com.png";

const app = `https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=600`;
const c =
  "https://housing.com/news/wp-content/uploads/2022/11/The-best-green-leafy-vegetables-to-add-to-your-diet.jpg";
const bread =
  "https://cdn.pixabay.com/photo/2021/06/14/07/36/product-6335145_1280.jpg";

export const Homepage = () => {
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:"#FFC9AD",backgroundImage: `url(${img})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <H1> 10% off on your first purchase</H1>
    </div>
      {/* <Box
        maxW="95%"
        h={"100vh"}
        margin={"0px auto"}
        backgroundColor="#FFC9AD"
        backgroundImage={img}
        borderRadius={"10px"}
      >
        <Heading
          w="40%"
          textAlign={"left"}
          padding={"70px 50px"}
          fontSize="60px"
          color="#ff6700"
        >
          10% off on your first purchase
        </Heading>

        </Grid>
      </Box> */}
      

      <Box maxW="100%" padding='20px'>
        <Heading textAlign={"left"} p="10px" fontSize="40px" color={"#323139"}>
          Categories
        </Heading>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={10}>
          <GridItem
            w="100%"
            borderRadius="20px"
            backgroundColor="#ffcccb"
            backgroundImage={app}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"0px 150px"}
            // bcackgroundSize=" "
            h="400px"
          >
            <Text
              textAlign="center"
              w="100%"
              fontWeight={600}
              fontSize={35}
              color="#ff5552"
              pt='10%'
            >
              Fresh Fruits
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="400px"
            borderRadius="20px"
            backgroundColor="#fdd38c"
            backgroundImage={bread}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"0px 150px"}
            backgroundSize={"cover"}
          >
            <Text
              textAlign="center"
              w="100%"
              fontWeight={600}
              fontSize={35}
              color="#ff9a2e"
               pt='10%'
            >
              Fresh Dairy
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="400px"
            borderRadius="20px"
            backgroundColor="#b9fec2"
            backgroundImage={c}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition={"0px 150px"}
          >
            <Text
              textAlign="center"
              w="100%"
              fontWeight={600}
              fontSize={35}
               pt='10%'
              color="#00c258"
            >
              Fresh Vegetables
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* 3rd */}
      <Box maxW="100%" p='20px'>
        <Heading textAlign={"left"} pt="20px" fontSize="40px" color={"#323139"}>
          Popular Deals
        </Heading>
        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={50}>
          <GridItem
            w="100%"
            borderRadius="20px"
            border="1px solid grey"
            h="300px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            
          >
            <Image src="data:image/jpeg;base64,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" />
          </GridItem>
          <GridItem
            w="100%"
            borderRadius="20px"
            border="1px solid grey"
            h="300px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}          >
            <Image src="data:image/jpeg;base64,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" />
          </GridItem>
          <GridItem
            w="100%"
            borderRadius="20px"
            border="1px solid grey"
            h="300px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}          >
            <Image src="data:image/jpeg;base64,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" />
          </GridItem>
          <GridItem
            w="100%"
            borderRadius="20px"
            border="1px solid grey"
            h="300px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}          >
            <Image src="data:image/jpeg;base64,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" />
          </GridItem>
        </Grid>
      </Box>

      {/* 4 */}
      <Box maxW="95%" margin={"10px auto"}>
        <Heading textAlign={"left"} pt="20px" fontSize="40px" color={"#323139"}>
          Offers
        </Heading>
        <Image
          w="95%"
          objectFit="cover"
          src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-world-vegetarian-day-celebration_23-2150746551.jpg?w=826&t=st=1699027197~exp=1699027797~hmac=46c7947e0294a7e535264fd9666b2b636a546ca045282fd520251efe0e86244b"
        />
      </Box>
    </>
  );
};


const H1 = styled.div`
  width: 40%;
  text-align: left;
  padding-top: 70px;
  padding-left: 50px;
  font-size: 60px;
  color: #ff6700;

  @media (max-width: 650px) {
    width: 80%;
    padding-left: 20px;
    font-size: 30px;
  }
`;