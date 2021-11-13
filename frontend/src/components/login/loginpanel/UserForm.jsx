import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Style = styled.div`
  form {
      width: 70%;
      padding-top: 50px;
      margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    input{
        height: 30px;
        padding: 2%;
        border-radius: 6px;
        border: 1px solid blue;
    }
    label{
        font-size: 16px;

    }
    p{
        line-height: 15px;
        color: red;
    }
    button{
        border: none;
        margin: auto;
    font-size: 13px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    font-weight: 600;
    border-radius: 8px;
    color: white;
    width: 150px;
    height: 40px;
    }
  }
`;
export default function UserForm({ handleNewUser }) {
  const [newUser, setNewUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewUser(newUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <Style>
      <form onSubmit={handleSubmit} className="userform">
        <label>Enter full name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter your full name"
          required
        />

        <label>Enter password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="pasword"
          required
        />

        <p>
          Must be Atleast 8 characters in length and should contain atleast one
          alphabet,one number and one special character @$!%*#?&
        </p>

        <button className="cbtn" type="submit" value="SAVE AND CONTINUE" >Submit</button>
      </form>
    </Style>
  );
}
