// import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'



import React from 'react';
import img from "../Images/Elegant_Online_Shopping_Logo_Template-removebg-preview (3) (1).jpg"
import {
  Box,

  Image,
  Link,

  HStack,
  Button,

} from '@chakra-ui/react';
// import { Link  } from 'react-router-dom'; // You need to import this for routing
// import { ShoppingCartIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const  color="#323239"
  return (
    <Box  p={4} color="white">
      <Box 
maxWidth="95%"
marginTop="10px"
display="flex"
   flexDirection="row"
   justifyContent="space-around"
    alignItems="center"
      >  <Image
          src={img}
          alt="Your Logo"
          margin=" 0px 30px"
width="120px"
        />
        {/* <Spacer /> */}
        <HStack spacing={4}
          width="40%"
          display="flex"
   flexDirection="row"
   justifyContent="space-around"
  margin={"0px 30px"}
    alignItems="center" color={"#29C250"}  fontWeight={600} >
          <Link  to="/" fontSize="lg"  

           >
            Home
          </Link>
          <Link  to="/grocery" fontSize="lg">
            Grocery
          </Link>
          <Link  to="/" fontSize="lg">
            PopularDeals
          </Link>
          <Link  to="/offer" fontSize="lg">
            Offers
          </Link>
        
          {/* <IconButton
          
            to="/cart"
            icon={<ShoppingCartIcon />}
            aria-label="Shopping Cart"
            variant="solid"
            bg="white"
          /> */}
          {/* <Avatar size="sm" name="User" src="https://bit.ly/dan-abramov" /> */}
        </HStack>
        <Button  to="/login" 
          size='md'
          height='30px'
          width='100px'
          border="none"
          borderRadius="10px"
          bg="#29C250"
          color={"white"}  fontSize="lg" fontWeight={600}>
            Login
          </Button>
      </Box>
    </Box>
  );
};

export default Navbar;


