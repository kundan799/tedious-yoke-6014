import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import "./Sign.css";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineAmazon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// ------------------------------------------this code only for sign popop--------------------

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "full";
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/register")
    onClose()

  }
  return (
    <div>
      <Button
        onClick={onOpen}
        colorScheme="
#144860"
        variant="link"
      >
        Sign In/Register
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <div className="main-1-1">
            <div className="main-1">
              <Button
                colorScheme="teal"
                variant="outline"
                width="400px"
                border={"2px"}
                _hover={{ backgroundColor: "blue", color: "white" }}
              >
                {" "}
                SIGN IN WITH ZAPPOS{" "}
              </Button>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                width="400px"
                border={"2px"}
                _hover={{ backgroundColor: "blue", color: "white" }}
              >
                {" "}
                <AiOutlineAmazon /> SIGN IN WITH AMAZON{" "}
              </Button>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                width="400px"
                border={"2px"}
                _hover={{ backgroundColor: "blue", color: "white" }}
              >
                {" "}
                <FcGoogle /> SIGN IN WITH GOOGLE{" "}
              </Button>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                width="400px"
                border={"2px"}
                onClick={handleclick}
                _hover={{ backgroundColor: "blue", color: "white" }}
              >
                {" "}
                CREATE YOUR ZAPPOS ACCOUNT{" "}
              </Button>

              <br />
            </div>
            <div>
              <hr />
            </div>
            <div className="main-2">
              {/* <Lorem count={2} /> */}
              <h1>
                By logging in with Amazon, you may be eligible for additional
                Prime benefits like FREE Upgraded Shipping. Then, join Zappos
                VIP for additional Prime-linked VIP perks:
              </h1>
              <br />
              <p>
                {" "}
                • If you are an Amazon Prime Member, sign in with Amazon to
                qualify for free upgraded shipping!
              </p>
              <p> • Get FREE Expedited Shipping</p>
              <p> • Earn 2 Points for Every $1 Spent</p>
              <p> • Receive Bonus Points on Select Brands</p>
              <p> • Redeem Points for VIP Codes</p>
            </div>
          </div>
          <ModalFooter>
            <div className="footer_12">
              <p>By signing in, you agree to Zappos</p>
              <h2>Terms and Conditions | Privacy Policy.</h2>
            </div>

            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signin;
