import React from "react";
import { Image, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItem } from "../Redux/Cart/action";

export const CartCard = ({ id, image, name, price, quantity = 1 }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authReducer?.user);

  const handleRemove = () => {
    dispatch(removeFromCart(user.id, id));
  };

  const handleInc = () => dispatch(updateCartItem(user.id, id, quantity + 1));
  const handleDec = () => dispatch(updateCartItem(user.id, id, Math.max(1, quantity - 1)));


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "70%" }}>
      <Image src={image} alt={name} width="10%" borderRadius="30%" />
      <Text fontSize="2xl">{name}</Text>
      <Text fontSize="xl">Price: {price * quantity}</Text>

      <div style={{ display: "flex", justifyContent: "space-around", width: "30%", alignItems: "center" }}>
        <Button onClick={handleDec} disabled={quantity <= 1} bgColor="green" color="white" fontSize="xl">-</Button>
        <h1>{quantity}</h1>
        <Button onClick={handleInc} bgColor="green" fontSize="xl" color="white">+</Button>
        <Button onClick={handleRemove} colorScheme="red">Remove</Button>
      </div>
    </div>
  );
};