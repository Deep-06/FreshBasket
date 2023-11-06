import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addUser, getUsers } from "../Redux/Authentication/action";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  orders: [],
};

export const SignUp = () => {
  const toast = useToast();

  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const users = useSelector((store) => store.authReducer.users);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      toast({
        title: "Form Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Form Error",
        description: "Details have Saved",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(addUser(data));
      navigate("/login");
    }

    // console.log(data)

    // dispatch(addUser(data))
    // navigate('/login')

    // console.log(users)
  };

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  return (
    <DIV>
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/210838/screenshots/5486620/media/3072987b970e08ec02f861ce2b6be140.png?resize=450x338&vertical=center"
          alt=""
        />
      </div>

      <div className="loginForm">
        <h1
          style={{
            textAlign: "left",
            marginLeft: "25px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <TextField
              type="text"
              variant="outlined"
              label="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              style={{ marginTop: "10px", marginBottom: "10px", width: "50%" }}
            />

            <TextField
              type="text"
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              style={{ marginTop: "10px", marginBottom: "10px", width: "50%" }}
            />
          </div>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />

          <TextField
            type="password"
            variant="outlined"
            label="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button type="submit">SignUp</button>
            <Link
              to={`/login`}
              style={{ textDecoration: "none", color: "red" }}
            >
              <p>Already Have Account? Login</p>
            </Link>
          </div>
        </form>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 10%;
  margin-top: 50px;

  .image {
    width: 100%;
  }

  img {
    display: block;
    margin: auto;
  }

  .loginForm {
    width: 100%;
    padding: 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 30px;
    text-align: left;
  }

  .name {
    display: flex;
    gap: 10px;
  }

  button {
    height: 50px;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    width: 40%;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;
