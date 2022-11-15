import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Link,
  Box,
  Flex,
  Grid,
  Heading,
  ChevronDownIcon,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
 
} from "@chakra-ui/react";
import { products } from "../alldata/product";
import { isd } from "../alldata/isd";
import Signin from "./Signin";
import { Navigate, useNavigate } from "react-router-dom";

// const   isd =["#"," A"," B"," C"," D","E","F","G","H","I","J"," K"," L"," M","N"," O",
// "P","R"," S","T"," U"," V"," W","X"," Y"," Z"]

const Navbar = () => {
  const [data, setData] = useState(isd);
  const [data1, setData1] = useState(products);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate=useNavigate()
  
  const btnRef = React.useRef();
  return (
    <div>
      <div style={{ border: "1px solid grey", width: "100%", height: "220px" }}>
        <div
          style={{
            // border: "1px solid red",
            width: "100%",
            height: "40px",
            display: "flex",
          }}
        >
          <div
            style={{
              // border: "1px solid red",
              width: "10%",
              height: "100%",
              backgroundColor: "#3051b2",
              color: "white",
            }}
          >
            <img
              width="70px"
              style={{ display: "block", margin: "auto", height: "35px" }}
              src="http://cdn.images.fetchrewards.com/rewards/60b7b22dc6d23c7c1cfef6afc79b45deccb21594.png"
              alt="logo1"
            />
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "10%",
              height: "100%",
              backgroundColor: "white",
              color: "white",
            }}
          >
            <img
              style={{
                display: "block",
                margin: "auto",
                height: "35px",
                width: "70px",
              }}
              src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg"
              alt="logo2"
            />
          </div>
        </div>
        <div
          style={{
            //  border: "1px solid red",
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              // border: "1px solid red",
              width: "17%",
              height: "40px",
              backgroundColor: "#3051b2",
            }}
          >
            <Menu>
              <MenuButton
                as={Button}
                bg="#3051b2"
                color="white"
                width="100%"
                _hover={{
                  background: "#3051b2",
                  color: "white",
                }}
              >
                Customer Service
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem>Contact Info</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <MenuItem>Give Us Feedback</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "83%",
              height: "40px",
              backgroundColor: "#3051b2",
              color: "white",
            }}
          >
            <h1
              style={{
                marginTop: "7px",
                textAlignLast: "end",
                paddingRight: "10px",
                fontSize: "17px",
              }}
            >
              Every Zappos order comes with FAST, FREE Shipping, plus a FREE
              365-Day Return Policy!
              <strong>More About Shipping &amp; Returns</strong>
            </h1>
          </div>
        </div>
        <div
          style={{
            //  border: "1px solid red",
            width: "100%",
            height: "90px",
            display: "flex",
          }}
        >
          <div style={{ width: "14%", height: "100%" }}>
            
             
              <img
                style={{
                  width: "100px",
                  display: "block",
                  margin: "auto",
                  marginTop: "12px",
                }}
                onClick={()=>navigate("/")}
                src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
                alt="logo3"
              />
           
           
          </div>
          <div
            style={{
              //border: "1px solid red",
              width: "96%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginRight: "30px",
            }}
          >
            <div style={{ width: "66%", height: "100%" }}>
              <Input
                width="70%"
                placeholder="Search for Shoes,Cloths,etc"
                focusBorderColor="grey.400"
                style={{ border: "1px solid grey", marginTop: "16px" }}
              />
              <Button
                bg="black"
                colorScheme="messenger"
                style={{
                  marginTop: "-5px",
                  borderRadius: "0%",
                  marginLeft: "-10px",
                }}
              >
                SEARCH
              </Button>
            </div>
            {/* -----------------------------cart-------------------------------------- */}
            <div style={{ width: "10%", height: "100%" }}>
              <Button
                ref={btnRef}
                style={{
                  border: "1px solid #a7e688",
                  width: "100%",
                  marginTop: "12px",
                }}
                _hover={{
                  background: "#a7e688",
                }}
                onClick={onOpen}
                variant="outline"
                leftIcon={<BsCart3 />}
              >
                MY CART
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Text fontSize="4xl">My Cart</Text>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
        {/* ----------------------------------cloth department--------------------------- */}
        <div
          style={{
            backgroundColor: "#f4f4f4",
            // border: "1px solid red",
            height: "22%",
            display: "flex",
          }}
        >
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                New
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        The Find
                      </Text>
                      <Link color="#216f90">The Ultimate Sneaker Guide</Link>
                      <Link color="#216f90">The Sandals Guide</Link>
                      <Link color="#216f90">Fresh Spring/Summer Denim</Link>
                      <Link color="#216f90">Energizing Sporty Looks</Link>
                      <Link color="#216f90">Western-Inspired Wear</Link>
                      <Link color="#216f90">L.L. Bean Hiking Musts</Link>
                      <Link color="#216f90">Outdoor Style + Merrell</Link>
                      <Link color="#216f90">Garden Charm Trend</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        The Style Room
                      </Text>
                      <Link color="#216f90">Garden Charm Trend</Link>
                      <Link color="#216f90">Chroma-Cation</Link>
                      <Link color="#216f90">90s Newstalgia</Link>
                      <Link color="#216f90">Joyful Accessories</Link>
                      <Link color="#216f90">Men's Take Center Stage</Link>
                      <Link color="#216f90">Men's Colorful Crush</Link>
                      <Link color="#216f90">Men's All Eyes on You</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Brands
                      </Text>
                      <Link color="#216f90">SAOLA</Link>
                      <Link color="#216f90">VISCATA</Link>
                      <Link color="#216f90">Philippe Model</Link>
                      <Link color="#216f90">FREYA</Link>
                      <Link color="#216f90">UGG® Universal</Link>
                      <Link color="#216f90">Tommy John</Link>
                      <Link color="#216f90">Draper James</Link>
                      <Link color="#216f90">MANGO</Link>
                      <Link color="#216f90">SOREL Universal</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Arrivals
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ad1236798_zappos_july_placements_nav74.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-SAM-EDELMAN-NEW-ARRIVALS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* -------------------------------women------------------------ */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Women
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Shoes
                      </Text>
                      <Link color="#216f90">Sneakers & Athletic</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Clogs & Mules</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Boots & Booties</Link>
                      <Link color="#216f90">Slippers</Link>
                      <Link color="#216f90">Flats</Link>
                      <Link color="#216f90">Loafers</Link>
                      <Link color="#216f90">Comfort</Link>
                      <Link color="#216f90">Wide</Link>
                      <Link color="#216f90">Narrow</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Clothing
                      </Text>
                      <Link color="#216f90">Shirts & Tops</Link>
                      <Link color="#216f90"> Swimwear</Link>

                      <Link color="#216f90">Dresses</Link>
                      <Link color="#216f90">Shorts</Link>
                      <Link color="#216f90">Jeans & Denim</Link>
                      <Link color="#216f90">Underwear & Intimates</Link>
                      <Link color="#216f90">Coats & Outerwear</Link>
                      <Link color="#216f90"> Sleepwear</Link>
                      <Link color="#216f90">Activewear</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Accessories & More
                      </Text>
                      <Link color="#216f90">Bags & Handbags</Link>
                      <Link color="#216f90">Backpacks</Link>
                      <Link color="#216f90">Belt Bags</Link>
                      <Link color="#216f90">Hair</Link>
                      <Link color="#216f90">Sunglasses</Link>
                      <Link color="#216f90">Statement Earrings</Link>
                      <Link color="#216f90">Face Masks</Link>
                      <Link color="#216f90">Tech Accessories</Link>
                      <Link color="#216f90">Scarves</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Gift Cards Sale
                      </Text>
                      <Link color="#216f90">Sneakers & Athletic</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Slippers</Link>
                      <Link color="#216f90">Boots</Link>
                      <Link color="#216f90">Shirts and Tops</Link>
                      <Link color="#216f90">Swim</Link>
                      <Link color="#216f90">Denim</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Arrivals
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-BEST-SANDALS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/RB_2140_350x350_NL.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* ----------------------------------mens---------------------------------- */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Mens
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Shoes
                      </Text>
                      <Link color="#216f90">Sneakers & Athletic</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Clogs & Mules</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Boots & Booties</Link>
                      <Link color="#216f90">Slippers</Link>
                      <Link color="#216f90">Flats</Link>
                      <Link color="#216f90">Loafers</Link>
                      <Link color="#216f90">Comfort</Link>
                      <Link color="#216f90">Wide</Link>
                      <Link color="#216f90">Narrow</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Clothing
                      </Text>
                      <Link color="#216f90">Shirts & Tops</Link>
                      <Link color="#216f90"> Swimwear</Link>

                      <Link color="#216f90">Dresses</Link>
                      <Link color="#216f90">Shorts</Link>
                      <Link color="#216f90">Jeans & Denim</Link>
                      <Link color="#216f90">Underwear & Intimates</Link>
                      <Link color="#216f90">Coats & Outerwear</Link>
                      <Link color="#216f90"> Sleepwear</Link>
                      <Link color="#216f90">Activewear</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Accessories & More
                      </Text>
                      <Link color="#216f90">Bags & Handbags</Link>
                      <Link color="#216f90">Backpacks</Link>
                      <Link color="#216f90">Belt Bags</Link>
                      <Link color="#216f90">Hair</Link>
                      <Link color="#216f90">Sunglasses</Link>
                      <Link color="#216f90">Statement Earrings</Link>
                      <Link color="#216f90">Face Masks</Link>
                      <Link color="#216f90">Tech Accessories</Link>
                      <Link color="#216f90">Scarves</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Gift Cards Sale
                      </Text>
                      <Link color="#216f90">Sneakers & Athletic</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Slippers</Link>
                      <Link color="#216f90">Boots</Link>
                      <Link color="#216f90">Shirts and Tops</Link>
                      <Link color="#216f90">Swim</Link>
                      <Link color="#216f90">Denim</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Arrivals
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/MENS-CLASSIC-SNEAKERS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/MENS-SANDALS-BESTSELLERS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* -----------------------------------------kids------------------------------------ */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Kids
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Kids
                      </Text>
                      <Link color="#216f90">Sneakers</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Swimwear</Link>
                      <Link color="#216f90">Flats</Link>
                      <Link color="#216f90">Shirts & Tops</Link>
                      <Link color="#216f90">Clogs</Link>
                      <Link color="#216f90">Shorts</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Dresses</Link>
                      <Link color="#216f90">Loafers</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Girls
                      </Text>
                      <Link color="#216f90">Sneakers</Link>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Swimwear</Link>
                      <Link color="#216f90">Flats</Link>
                      <Link color="#216f90">Shirts & Tops</Link>
                      <Link color="#216f90">Dresses</Link>
                      <Link color="#216f90">Heels</Link>
                      <Link color="#216f90">Shorts</Link>
                      <Link color="#216f90">Clogs</Link>
                      <Link color="#216f90">Light Jackets</Link>
                      <Link color="#216f90">Boots</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Boys
                      </Text>
                      <Link color="#216f90">SAOLA</Link>
                      <Link color="#216f90">VISCATA</Link>
                      <Link color="#216f90">Philippe Model</Link>
                      <Link color="#216f90">FREYA</Link>
                      <Link color="#216f90">UGG® Universal</Link>
                      <Link color="#216f90">Tommy John</Link>
                      <Link color="#216f90">Draper James</Link>
                      <Link color="#216f90">MANGO</Link>
                      <Link color="#216f90">SOREL Universal</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Accessories & More
                      </Text>
                      <Link color="#216f90">Bags & Handbags</Link>
                      <Link color="#216f90">Backpacks</Link>
                      <Link color="#216f90">Belt Bags</Link>
                      <Link color="#216f90">Hair</Link>
                      <Link color="#216f90">Sunglasses</Link>
                      <Link color="#216f90">Statement Earrings</Link>
                      <Link color="#216f90">Face Masks</Link>
                      <Link color="#216f90">Tech Accessories</Link>
                      <Link color="#216f90">Scarves</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Arrivals
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/COOP-BTS-GLOBAL-NAV-350x350.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px"></Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* ---------------------------------department-------------------------- */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Departments
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Categories
                      </Text>
                      <Link color="#216f90">The Ultimate Sneaker Guide</Link>
                      <Link color="#216f90">The Sandals Guide</Link>
                      <Link color="#216f90">Fresh Spring/Summer Denim</Link>
                      <Link color="#216f90">Energizing Sporty Looks</Link>
                      <Link color="#216f90">Western-Inspired Wear</Link>
                      <Link color="#216f90">L.L. Bean Hiking Musts</Link>
                      <Link color="#216f90">Outdoor Style + Merrell</Link>
                      <Link color="#216f90">Garden Charm Trend</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Shops
                      </Text>
                      <Link color="#216f90">Garden Charm Trend</Link>
                      <Link color="#216f90">Chroma-Cation</Link>
                      <Link color="#216f90">90s Newstalgia</Link>
                      <Link color="#216f90">Joyful Accessories</Link>
                      <Link color="#216f90">Men's Take Center Stage</Link>
                      <Link color="#216f90">Men's Colorful Crush</Link>
                      <Link color="#216f90">Men's All Eyes on You</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Trending Brands
                      </Text>
                      <Link color="#216f90">SAOLA</Link>
                      <Link color="#216f90">VISCATA</Link>
                      <Link color="#216f90">Philippe Model</Link>
                      <Link color="#216f90">FREYA</Link>
                      <Link color="#216f90">UGG® Universal</Link>
                      <Link color="#216f90">Tommy John</Link>
                      <Link color="#216f90">Draper James</Link>
                      <Link color="#216f90">MANGO</Link>
                      <Link color="#216f90">SOREL Universal</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Shopping Guides
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/PERFORMANCE-TENNIS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/February/ZGC-globalnav-010322.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* -------------------------------------------brand---------------------------- */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Brand
              </MenuButton>
              <MenuList size="sm">
                <Box style={{ padding: "20px" }}>
                  <Text>Brand Index</Text>

                  <div style={{ display: "flex", gap: "20px" }}>
                    {data.map((el) => (
                      <Box>{el}</Box>
                    ))}
                  </div>
                  <br />
                  <br />
                  <hr />
                  <br />
                  <Text>Featured Brands</Text>
                  <div style={{ display: "flex", gap: "20px" }}>
                    {data1.map((el) => (
                      <Box>
                        <img src={el.avatar} alt="" />
                      </Box>
                    ))}
                  </div>
                  <br />
                  <br />
                </Box>
              </MenuList>
            </Menu>
          </div>
          {/* ---------------------------sale---------------------------------------- */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Sale
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Women's Sale
                      </Text>
                      <Link color="#216f90">The Ultimate Sneaker Guide</Link>
                      <Link color="#216f90">The Sandals Guide</Link>
                      <Link color="#216f90">Fresh Spring/Summer Denim</Link>
                      <Link color="#216f90">Energizing Sporty Looks</Link>
                      <Link color="#216f90">Western-Inspired Wear</Link>
                      <Link color="#216f90">L.L. Bean Hiking Musts</Link>
                      <Link color="#216f90">Outdoor Style + Merrell</Link>
                      <Link color="#216f90">Garden Charm Trend</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Men's Sale
                      </Text>
                      <Link color="#216f90">Garden Charm Trend</Link>
                      <Link color="#216f90">Chroma-Cation</Link>
                      <Link color="#216f90">90s Newstalgia</Link>
                      <Link color="#216f90">Joyful Accessories</Link>
                      <Link color="#216f90">Men's Take Center Stage</Link>
                      <Link color="#216f90">Men's Colorful Crush</Link>
                      <Link color="#216f90">Men's All Eyes on You</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Kids' Sale
                      </Text>
                      <Link color="#216f90">SAOLA</Link>
                      <Link color="#216f90">VISCATA</Link>
                      <Link color="#216f90">Philippe Model</Link>
                      <Link color="#216f90">FREYA</Link>
                      <Link color="#216f90">UGG® Universal</Link>
                      <Link color="#216f90">Tommy John</Link>
                      <Link color="#216f90">Draper James</Link>
                      <Link color="#216f90">MANGO</Link>
                      <Link color="#216f90">SOREL Universal</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Featured Sale
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ADIDAS-ORIGINALS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ONIEL-LENNOX-STRETCH-BOARDSHORTS.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          {/* ---------------------------------clothing------------------------------------ */}
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                🔥 Clothing
              </MenuButton>
              <MenuList size="sm">
                <Flex gap="35px" padding="20px">
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Women's Clothing
                      </Text>
                      <Link color="#216f90">The Ultimate Sneaker Guide</Link>
                      <Link color="#216f90">The Sandals Guide</Link>
                      <Link color="#216f90">Fresh Spring/Summer Denim</Link>
                      <Link color="#216f90">Energizing Sporty Looks</Link>
                      <Link color="#216f90">Western-Inspired Wear</Link>
                      <Link color="#216f90">L.L. Bean Hiking Musts</Link>
                      <Link color="#216f90">Outdoor Style + Merrell</Link>
                      <Link color="#216f90">Garden Charm Trend</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Men's Clothing
                      </Text>
                      <Link color="#216f90">Garden Charm Trend</Link>
                      <Link color="#216f90">Chroma-Cation</Link>
                      <Link color="#216f90">90s Newstalgia</Link>
                      <Link color="#216f90">Joyful Accessories</Link>
                      <Link color="#216f90">Men's Take Center Stage</Link>
                      <Link color="#216f90">Men's Colorful Crush</Link>
                      <Link color="#216f90">Men's All Eyes on You</Link>
                    </Grid>
                  </Box>

                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Kids' Clothing
                      </Text>
                      <Link color="#216f90">SAOLA</Link>
                      <Link color="#216f90">VISCATA</Link>
                      <Link color="#216f90">Philippe Model</Link>
                      <Link color="#216f90">FREYA</Link>
                      <Link color="#216f90">UGG® Universal</Link>
                      <Link color="#216f90">Tommy John</Link>
                      <Link color="#216f90">Draper James</Link>
                      <Link color="#216f90">MANGO</Link>
                      <Link color="#216f90">SOREL Universal</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        Featured Sale
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="160px">
                    <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                      <Text
                        fontSize="20px"
                        _hover={{
                          color: "blue",
                        }}
                        color="#216f90"
                      >
                        New Arrivals
                      </Text>
                      <Link color="#216f90">Sandals</Link>
                      <Link color="#216f90">Toys & Games</Link>
                      <Link color="#216f90">Drinkware</Link>
                      <Link color="#216f90">Sporting Goods</Link>
                      <Link color="#216f90">Home Decor</Link>
                      <Link color="#216f90">Exclusive "Heatwave" Capsule</Link>
                    </Grid>
                  </Box>
                  <Box w="150px">
                    <Box marginTop="10px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/PERFORMANCE-HOODIES-SWEATSHIRTS-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>

                    <Box marginTop="20px">
                      <img
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ENS-SUMMER-WORKOUT-CLOTHING-GLOBAL-NAV.jpg"
                        alt="shoes"
                      />
                    </Box>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          </div>
          <div
            style={{
              // border: "1px solid red",
              margin: "auto",
              marginRight: "20px",
            }}
          >
            {/* <h1>Sign In/Register</h1>
            <Button onClick={onOpen}>Trigger modal</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent >
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                 
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
            <Signin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
