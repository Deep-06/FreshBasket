import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../Redux/Authentication/action";
import { Alert, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from '@chakra-ui/react';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isAuth } = useSelector(store => store.authReducer);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      console.log("admin");
      navigate("/admin");
    }

    dispatch(loginUser(email, password));
    navigate("/");
  };

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
            marginLeft: "20px",
            fontSize: "30px",
            fontWeight: "bold",
            color: isAuth ? "green" : "black",
          }}
        >
          {isAuth ? "Login Successfull" : "Login"}
        </h1>

        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "20px", marginBottom: "20px", width: "78%" }}
          />

          <div className="password">
            <TextField
              variant="outlined"
              label="Password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                margin: "20px",
                marginBottom: "20px",
                height: "40px",
                width: "100%",
              }}
            />
            <button className="show" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="submit" type="submit">
              {isLoading ? <Spinner size="lg" color="green" /> : 'Login'}
            </button>
            <Link
              to={`/signup`}
              style={{ textDecoration: "none", color: "red" }}
            >
              <p>New User? signUp</p>
            </Link>
          </div>
          {isError && <p>Invalid credentials</p>}
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
  flex-direction:row;
  gap: 5%;
  margin-top: 50px;

  .loginForm {
    width: 100%;
    padding: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .image {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    border-radius: 10px;
    text-align: left;
  }

  .password {
    display: flex;
  }

  .show {
    width: 25%;
    height: 55px;
    border-radius: 5px;
    color: black;
    background-color: #e9e5e5;
    border: none;
    margin-top: auto;
    margin-bottom: 5px;
  }

  .submit {
    height: 55px;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    width: 30%;
    margin-top: 20px;
    margin-left: 15px;
    font-size: 16px;
  }

  @media (max-width: 650px) {
    display:flex;
    flex-direction:column;
  }
`;
