import React from "react";
import { Image, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { INCREMENT_QTY, DECREMENT_QTY, REMOVE_FROM_CART } from "../Redux/Cart/actionTypes";

export const CartCard = ({ id, image, name, price, quantity = 1 }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "70%" }}>
      <Image src={image} alt={name} width="10%" borderRadius="30%" />
      <Text fontSize="2xl">{name}</Text>
      <Text fontSize="xl">Price: {price * quantity}</Text>

      <div style={{ display: "flex", justifyContent: "space-around", width: "30%", alignItems: "center" }}>
        <Button onClick={() => dispatch({ type: DECREMENT_QTY, payload: id })} bgColor="green" color="white" fontSize="xl">-</Button>
        <h1>{quantity}</h1>
        <Button onClick={() => dispatch({ type: INCREMENT_QTY, payload: id })} bgColor="green" fontSize="xl" color="white">+</Button>
        <Button onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: id })} colorScheme="red">Remove</Button>
      </div>
    </div>
  );
};