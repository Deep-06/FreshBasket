import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../Redux/Authentication/action";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logedUser"));
    setUser(user);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("logedUser");
    navigate("/");
  };

  return (
    <DIV>
      <div>
        <img
          src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
          alt=""
        />
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1
          style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Personal Details
        </h1>
        <h1>Name: {user && user[0].firstName + " " + user[0].lastName}</h1>
        <h3>Email: {user && user[0].email}</h3>
        <h3>
          Status : <span style={{ color: "green" }}>ONLINE</span>
        </h3>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 70%;
  display: flex;
  gap: 20%;
  margin: auto;
  text-align: left;

  h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  button {
    width: 50%;
    height: 50px;
    background-color: red;
    color: white;
    border-radius: 5px;
  }
`;
