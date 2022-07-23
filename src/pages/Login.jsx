import { Button, Input, Link } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import "./Login.css";
import { AuthContext } from "../context/AuthContext";
var userdetails = JSON.parse(localStorage.getItem("userAccount")) || [];
//console.log("userdetails", userdetails);

const Login = () => {
    const res={token:"abcdefghij1234567"}

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth)
  const [form, setform] = useState({});
  const onchange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  useEffect(() => {
    //console.log(form);
  }, [form]);

  var c = 0;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    userdetails.map((e) => {
      if (e.email === form.email && e.password === form.password) {
        c++;

        localStorage.setItem("aftercheckingdedails", JSON.stringify(e));
      }
    });
    if (c >= 1) {
      alert("login sucess");
      auth.login(res.token);
    
      navigate("/");
    } else {
      alert("login failed");
    }
  };
  const handlebackcreate = () => {
    navigate("/register");
  };
  return (
    <div>
      <h1>login</h1>
      <div className="login_image">
        <img
          className="L_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
          alt="registerimage"
        />
      </div>
      <div className="login">
        <h1>Sign-In</h1>
        <br />
        <form className="form" onSubmit={handleOnSubmit}>
          <div>
            <label style={{ fontWeight: "500" }}>Email</label>
            <Input
              placeholder="Basic usage"
              border="2px"
              type="email"
              name="email"
              onChange={onchange}
            />
          </div>
          <br />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label style={{ fontWeight: "500" }}>Password</label>
              <label
                style={{
                  color: "#003953",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Forgot your password?
              </label>
            </div>
            <Input
              placeholder="Basic usage"
              border="2px"
              type="password"
              name="password"
              onChange={onchange}
            />
          </div>
          <br />
          <div>
            <Button
              colorScheme="teal"
              variant="solid"
              width={"310px"}
              bg="#003953"
              type="submit"
              _hover={{ backgroundColor: "#003953" }}
            >
              Sign-In{" "}
            </Button>
          </div>
        </form>
        <br />
        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <p>Keep me signed in</p>
          <Link>Details</Link>
        </div>
        <br />
        <div className="newtozappos">
          <hr />
          <p>New to Zappos?</p>
        </div>
        <br />
        <Button
          colorScheme="#003953"
          variant="outline"
          border={"2px"}
          width={"310px"}
          onClick={handlebackcreate}
        >
          Create your Zappos account
        </Button>
      </div>
      <br />
      <hr />
      <br />
      <div className="L_footer">
        <div className="L_footer_1">
          <p>Terms of Use </p>
          <p>Terms of Use </p>
          <p>Terms of Use </p>
        </div>
        <h5>© 2009–2022 - Zappos.com LLC or its affiliates</h5>
      </div>
    </div>
  );
};

export default Login;
