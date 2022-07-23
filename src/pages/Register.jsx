import { Button, Input,Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";
var userLogin = JSON.parse(localStorage.getItem("userAccount"))||[]//change

const Register = () => {
    const [form,setForm]=useState({})
    const navigate=useNavigate()
    const GoToLoginPage=()=>{
        navigate("/login")

    }
    const onChange=(e)=>{
        //console.log(e.target.value)
        let { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
    
      }
      useEffect(() => {
        //console.log(form);
      }, [form]);
      const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(form)
        userLogin.push(form) 
        localStorage.setItem("userAccount",JSON.stringify(userLogin ))
    
      }
      
  return (
    <div>
      <div className="register_image">
        <img
          className="R_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
          alt="registerimage"
        />
      </div>
      <div className="register">
        <h1>Create account</h1>
        <form className='form' onSubmit={handleOnSubmit}>
        <div>
          <label style={{ fontWeight: "500" }}>Your name</label>
          <Input placeholder="Basic usage" border="2px" name="name"  onChange={onChange} />
        </div>
        <br />
        <div>
          <label style={{ fontWeight: "500" }}>Email</label>
          <Input placeholder="Basic usage" border="2px" type="email" name="email"  onChange={onChange} />
        </div>
        <br />
        <div>
          <label style={{ fontWeight: "500" }}>Password</label>
          <Input placeholder="At least 6 character" border="2px" type="password" name="password"  onChange={onChange}/>
          <p>Passwords must be at least 6 characters.</p>
        </div>
        <br />
        <div>
          <label style={{ fontWeight: "500" }}>Re-enter password</label>
          <Input placeholder="Basic usage" border="2px" type="password" name="password" onChange={onChange} />
        </div>
        <br />
        <div>
          <Button
            colorScheme="teal"
            variant="solid"
            width={"330px"}
            bg="#003953"
            type="submit"
            _hover={{ backgroundColor: "#003953" }}
          >
            Create your Zappos account{" "}
          </Button>
        </div>
        </form>
        <br/>
        <div className="bottom">
            <p>Don't have an email address or need additional help?</p>
            <p>Don't worry! Give us a call at <span style={{color:"#003953"}}>(800) 927-7671</span></p>
            <br/>
            <p>Registering means you agree to the Zappos <span style={{color:"#003953"}}>terms of use</span></p>
            <p>and <span style={{color:"#003953"}}>privacy policy</span> </p>
            <br/>
            <br/>
            <div className="bottom-1">
                <p> Already have an account?</p>
                <Button colorScheme='#003953' variant='link' onClick={GoToLoginPage}>
    Sign-In
  </Button>
                

            </div>


        </div>
   
        
      </div>
      <br/>
      <hr/>
      <div className="footer">
        <div className="footer_1">
            <p>Terms of Use </p>
            <p>Terms of Use </p>
            <p>Terms of Use </p>
     
       
        </div>
        <h5>© 2009–2022 - Zappos.com LLC or its affiliates</h5>

        </div>
    </div>
  );
};

export default Register;
