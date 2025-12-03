// import React from 'react'
//import { Link } from 'react-router-dom'
// import styled from 'styled-components'

import React from "react";
import img from "../Images/Elegant_Online_Shopping_Logo_Template-removebg-preview (3) (1).jpg";
import { Image, Link, HStack, Button, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Authentication/action";

const Navbar = () => {
  const color = "#323239";
  const green = "#00c258";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.authReducer?.user);
  const isAuth = useSelector((store) => store.authReducer?.isAuth);
  const cart = useSelector((store) => store.cartReducer?.cart || []);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (

    <div style={{
      width: "100%",
      marginTop: "10px",
      display: "flex",
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: "center",
      padding: '10px',
    }}>

      <Image src={img} alt="Your Logo" width="100px" />

      <HStack
        spacing={2}
        width="40%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        color={"#29C250"}
        fontWeight={600}
      >
        <Link href="/" fontSize="lg" textDecoration="none" color={green}>
          Home
        </Link>
        <Link
          href="/products"
          fontSize="lg"
          textDecoration="none"
          color={green}
        >
          Products
        </Link>
        <Link
          href="/aboutus"
          fontSize="lg"
          textDecoration="none"
          color={green}
        >
          About Us
        </Link>
        <Link
          href="/cart"
          fontSize="lg"
          textDecoration="none"
          color={green}
        >
          Cart {cartCount > 0 ? `(${cartCount})` : ''}
        </Link>

      </HStack>
      <div>
        {isAuth && user ? (
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontWeight={200} variant="ghost">
              <HStack>
                <Avatar size='xs' name={`${user.firstName}`} />
                <Text fontWeight={600}>{user.firstName}</Text>
              </HStack>
            </MenuButton>
            <MenuList>
              <Box px={4} py={3} textAlign={'left'}>
                <Text fontWeight="semibold">{user.firstName} {user.lastName}</Text>
                <Text fontSize="sm" color="gray.600">{user.email}</Text>
              </Box>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            to="/login"
            size="sm"
            height="40px"
            width="80px"
            border="none"
            borderRadius="5px"
            bg={green}
            color={"white"}
            fontSize="lg"
            fontWeight={400}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
      </div>
    </div>

  );
};

export default Navbar;
