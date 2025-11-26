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
 import Marquee from 'react-fast-marquee';

const category = [
  {
    'id':1,
    'name': 'Fresh Fruits',
    'image': 'https://img.freepik.com/premium-photo/pyramid-healthy-food-front-view_23-2148256086.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph'
  },
  {
    'id':2,
    'name': 'Fresh Vegetables',
    'image': 'https://img.freepik.com/free-vector/vegetables-realistic-composition-white-background-with-tomato-onion-sweet-hot-pepper-eggplant_1284-16242.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph',
  },
  {
    'id':3,
    'name': 'Dairy Products',
    'image': 'https://img.freepik.com/free-vector/milk-natural-dairy-products-picnic_1284-32755.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais',
  },
  {
    'id':4,
    'name': 'Bakery Products',
    'image': 'https://img.freepik.com/premium-photo/assortment-fresh-baked-bread-white-transparent-background_827055-606.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais',
  },
  {
    'id':5,
    'name': 'Fresh Seafood',
    'image': 'https://img.freepik.com/free-photo/top-view-appetizing-seafood-mix-wooden-table_181624-42803.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph',
  },
  {
    'id':6,
    'name': 'Fresh Chicken',
    'image': 'https://img.freepik.com/premium-photo/raw-chicken-drumstick-spices-fly-cutting-board-copy-space_94255-3643.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais',
  },
  {
    'id':7,
    'name': 'Fresh Mutton',
    'image': 'https://img.freepik.com/premium-photo/pile-meat-with-sprig-rosemary-it-with-white-background_435599-364.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais',
  },
  {
    'id':8,
    'name': 'Fresh Fish',
    'image': 'https://img.freepik.com/free-photo/top-view-delicious-seafood-arrangement_23-2148926757.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais',
  },
]

const deals1 = [
  "https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg",
  "https://m.media-amazon.com/images/I/71XJs5pf3+L.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg",
  "https://img.freepik.com/free-photo/muffin-chocolate-chip-isolated_1101-2631.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/premium-photo/plate-with-mussel-seafood-cuisine-isolated-white-background_9493-25813.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais",
  "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://img.freepik.com/free-photo/delicious-vanilla-ice-cream-bowl_23-2150796602.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/free-vector/meat-product-chicken-legs-icon-isolated_18591-83026.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais",
  "https://img.freepik.com/free-vector/delicious-shelled-cooked-shrimp-with-green-leaves-white_1284-45639.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
]

const deals2 = [
  "https://img.freepik.com/free-vector/mangoes-realistic-style_23-2147627882.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/free-photo/opened-jar-with-fresh-milk_23-2148399125.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais",
  "https://img.freepik.com/premium-photo/red-black-grapes-isolated-white-background_900706-10876.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/premium-photo/honey-jar-with-white-background_705862-425.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/premium-photo/bowl-ground-beef-sits-lemon-basil-garlic_900396-17529.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=ais",
  "https://img.freepik.com/premium-photo/fresh-eggplant-white-background_100488-21.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://media.istockphoto.com/id/510409604/photo/bowl-of-whipped-cream.jpg?s=612x612&w=0&k=20&c=sTjgpqPGcosVCsPZQPgjwzz8TpibmEmSr38znLjceko=",
  "https://img.freepik.com/free-vector/emmental-cheese-wedge-with-thin-slices-swiss-italian-dairy-fresh-organic-product_1441-1612.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/premium-vector/vector-cartoon-green-french-beans_574806-2087.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
  "https://img.freepik.com/free-photo/slice-raw-salmon_144627-11088.jpg?size=626&ext=jpg&ga=GA1.1.270366329.1690118250&semt=sph",
]
export const Homepage = () => {
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:"#FFC9AD",backgroundImage: `url(${img})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <Text fontSize="30px" w="40%" textAlign={'left'} p="5%" textColor="#f06c2bff">FreshBasket: Your Source for Natural Goodness. <br></br> Discover fresh, delicious and natural products at FreshBasket.</Text>
    </div>
      <Box maxW="100%" padding='20px'>
        <Heading textAlign={"center"} p="10px" mb={'30px'} fontSize="50px" color={"#323139"}>
          Categories
        </Heading>
        <Grid  templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={10}>
          {category.map((product) => (
            <GridItem
            key={product.id}
            w="100%"
            borderRadius="10px"
            backgroundColor="#ffcccb"
            backgroundImage={product.image}
            backgroundSize="cover"
            backgroundPosition="center"
            h="400px"
          >
            <Text
              textAlign="center"
              display="flex"
              justifyContent="center"
              w="100%"
              fontWeight={600}
              fontSize={35}
              color="#ff5552"
              pt='10px'
            >
              {product.name}
            </Text>
          </GridItem>
          ))}
        </Grid>
      </Box>

      {/* 3rd */}
      <Box maxW="100%" p='20px'>
        <Heading textAlign={"center"} pt="20px" pb="30px" fontSize="50px" color={"#323139"}>
          Popular Deals
        </Heading>
        <Grid p={'10px'} rowGap={10}>
        <Marquee gradientColor={[240, 240, 240]} speed={40}>
          {deals1.map((deal, index) => (
            <div key={index} style={{ marginRight: '20px' }}>
            <GridItem
              w='100%'
              maxW="150px"
              borderRadius="10px"
              border="1px solid grey"
              h="150px"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}

            >
              <Image src={deal} borderRadius="10px" />
            </GridItem>
            </div>
          ))}
        </Marquee>

        <Marquee gradientColor={[240, 240, 240]} direction="right" speed={40}>
          {deals2.map((deal, index) => (
            <div key={index} style={{ marginRight: '20px' }}>
            <GridItem
              w='100%'
              maxW="150px"
              borderRadius="10px"
              border="1px solid grey"
              h="150px"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}

            >
              <Image src={deal} borderRadius="10px" />
            </GridItem>
            </div>
          ))}
        </Marquee>
        </Grid>
      </Box>

      {/* 4 */}
      <Box maxW="95%" margin={"10px auto"}>
        <Heading textAlign={"center"} pt="20px" mb="30px" fontSize="50px" color={"#323139"}>
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