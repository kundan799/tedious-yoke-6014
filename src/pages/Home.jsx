import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image, Link, } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { arrival } from "../alldata/new";
import { popular } from "../alldata/popular";
import { shop } from "../alldata/shop";
import { IoIosHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import { popularitem } from "../alldata/popularitem";

const Home = () => {
  const [data, setData] = useState(popular);
  const [data1, setData1] = useState(shop);
  const [data2, setData2] = useState(arrival);
  const[data3,setData3]=useState(popularitem)
  console.log(data3);
  return (
    <div className="homemain">
      <div className="homemain1">
        <h1>
          <strong>ASICS Sneakers for School Sports & Beyond</strong>
        </h1>
        <br />
        <h3>
          Find the sneakers they need for
          <br /> tennis, volleyball, running, and
          <br /> more!
        </h3>
        <br />
        <Button colorScheme="black" variant="outline">
          SHOP ASIC SNEAKERS
        </Button>
      </div>
      <br />
      <br />

      <div className="popular">
        <h1>
          <strong>Shop Popular Categories</strong>
        </h1>
        <div className="popular1">
          {data.map((el) => (
            <div
              key={el.id}
              style={{ border: "1px solid green", width: "200px" }}
              className="link"
            >
              <div>
                <img
                  width="100px"
                  className="popdiv1"
                  src={el.avatar}
                  alt={el.id}
                />
              </div>
              <Link>{el.name}</Link>
            </div>
          ))}
        </div>
        <div className="popular2">
          {data1.map((el) => (
            <div key={el.id} className="popular2-1">
              <img
                width="420px"
                className="popdiv2"
                src={el.avatar}
                alt={el.id}
              />
              <br />
              <h1>
                <strong>{el.name}</strong>
              </h1>

              <p>{el.description}</p>

              <h2>
                <strong>{el.link}</strong>
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="newarrival">
        <div className="newarrival01">
          <div className="newarrival1"></div>
          <h2 style={{ textAlign: "center", fontSize: "25px" }}>
            <strong>New Sneakers from SOREL</strong>
          </h2>
        </div>
        <div className="newarrival2">
          {data2.map((el) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={el.id}
              style={{ width: "32%" }}
            >
              <Box style={{ height: "230px" }}>
                <Image src={el.avatar} alt={el.id} className="new" />
              </Box>

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" colorScheme="grey">
                    <IoIosHeartEmpty />
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {el.number}
                  </Box>
                </Box>

                <Box mt="1" lineHeight="tight" noOfLines={1}>
                  {el.brand}
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {el.name}
                </Box>

                <Box color="green.600">
                  {el.price}
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < el.rating ? "#ffc400" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      <div className="kids">
        <div className="kids1">
          <div className="kids1-1">
            <h1>
              <strong>UGG® Kids: School Style Starts Here</strong>
            </h1>
            <p>
              Find cheerful designs, cozy classics, and the
              <br /> easy-to-wear Rennon collection!
            </p>
            <br />
            <Button colorScheme="black" variant="outline">
              {" "}
              Shop UGG® Footwear for Kids{" "}
            </Button>
          </div>
        </div>
        <div className="kids2"></div>
      </div>
      {/* -------------------------------------Popular Items------------------------------------- */}
      <div className="PopularItems" >
        <h1><strong>Popular Items</strong></h1>
        <div className="PopularItems1">
        <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {data3.map((el)=>(
          <SwiperSlide>
           <Box key={el.id} style={{height:"380px",width:"230px"}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
           <Image width="150px" height="230px" className="sliderimage" src={el.avatar} alt={el.id} />
     
           <Box p='6'>
             <Box display='flex' alignItems='baseline'>
               <Badge borderRadius='full' px='2' colorScheme='grey'>
               <IoIosHeartEmpty />
               </Badge>
               <Box
                 color='gray.500'
                 fontWeight='semibold'
                 letterSpacing='wide'
                 fontSize='xs'
                 textTransform='uppercase'
                 ml='2'
               >
                 {el.number}
               </Box>
             </Box>
     
             <Box
               mt='1'
              
               as='h4'
               lineHeight='tight'
               noOfLines={1}
               _hover={{
                color:"blue",
                textDecoration:"underline",
                cursor:"pointer"
               }}
             >
               {el.brand}
             </Box>
             <Box
               mt='1'
               fontWeight='semibold'
               as='h4'
               lineHeight='tight'
               noOfLines={1}
               _hover={{
                color:"blue",
                textDecoration:"underline",
                cursor:"pointer"
               }}
             >
               {el.name}
             </Box>
     
             <Box>
               ${el.price}
               <Box as='span' color='gray.600' fontSize='sm'>
                 
               </Box>
             </Box>
     
             
           </Box>
         </Box>
         </SwiperSlide>
        ))}
      
      </Swiper>

        </div>

      </div>
    </div>
  );
};

export default Home;
