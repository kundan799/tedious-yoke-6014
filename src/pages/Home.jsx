import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Grid, Image, Link } from "@chakra-ui/react";
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
import { TrendingBrands } from "../alldata/TrendingBrands";
import { sudes1, Suedes } from "../alldata/Suedes";
import Footer1 from "../component/Footer1";
import Footer from "../component/Footer";

const Home = () => {
  const [data, setData] = useState(popular);
  const [data1, setData1] = useState(shop);
  const [data2, setData2] = useState(arrival);
  const [data3, setData3] = useState(popularitem);
  const [data4, setData4] = useState(TrendingBrands);
  const [data5, setData5] = useState(Suedes);
  const [data6, setData6] = useState(sudes1);
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
              style={{ width: "200px" }}
              className="popular_link"
            >
              <div>
                <img
                  width="100px"
                  className="popdiv1"
                  src={el.avatar}
                  alt={el.id}
                />
              </div>
              <Link _hover={{ color: "blue", textDecoration: "underline" }}>
                {el.name}
              </Link>
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
      <div className="PopularItems">
        <h1>
          <strong>Popular Items</strong>
        </h1>
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
            {data3.map((el) => (
              <SwiperSlide>
                <Box
                  key={el.id}
                  style={{ height: "380px", width: "230px" }}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    width="150px"
                    height="230px"
                    className="sliderimage"
                    src={el.avatar}
                    alt={el.id}
                  />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="grey">
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

                    <Box
                      mt="1"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      _hover={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {el.brand}
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      _hover={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {el.name}
                    </Box>

                    <Box>
                      ${el.price}
                      <Box as="span" color="gray.600" fontSize="sm"></Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="styleroom">
        <div className="styleroom1"></div>
        <div className="styleroom2">
          <div className="styleroom2-1">
            <img
              className="styleroomimage"
              src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/thestyleroom/The-Style-Room-Logo.svg"
              alt="the style room"
            />
            <h2>Chroma-Cation</h2>
            <p>
              Style for your mood, not just the occasion, with bold brights in
              the silhouettes you need for summer dressing.
            </p>
            <br />
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              {" "}
              SHOP CHROMA-CATION{" "}
            </Button>
          </div>
        </div>
      </div>
      <br />
      {/* ------------------------------------tranding brand-------------------------------- */}
      <div className="trandingbrand">
        <h1>Tranding Brand</h1>
        <br />
        <br />
        <div className="trandingbrand1">
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
            {data4.map((el) => (
              <SwiperSlide>
                <div className="trandingbrand1-1" key={el.id}>
                  <div className="brand_image">
                    <img
                      className="brand_image1"
                      src={el.B_avatar}
                      alt={el.id}
                    />
                  </div>
                  <br />
                  <div className="brand_link">
                    <Link
                      _hover={{ color: "blue", textDecoration: "underline" }}
                      textAlign="center"
                    >
                      {el.b_name}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* ----------------------------new seuds------------------------------------------- */}
      <div className="Newseuds">
        <div className="Newseuds1">
          <div className="Newseuds1-1">
            <h2>Birkenstock: New Suedes &amp; Other Faves</h2>
            <br />
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              {" "}
              Shop Birkenstock Suedes &amp; More{" "}
            </Button>
          </div>
          <div className="Newseuds1-2">
            <div></div>
          </div>
        </div>
        <br />
        <br />
        {/* ----------------------------------Newseuds rating part-------------------------- */}
        <div className="Newseuds2">
          <div className="Newseuds2-1">
            {data5.map((el) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                // key={el.id}
                style={{ width: "23%" }}
              >
                <Box style={{ height: "120px" }}>
                  <Image
                    src={el.S_avatar}
                    alt={el.id}
                    className="Newseudsimage"
                  />
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
                      {el.S_number}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    lineHeight="tight"
                    noOfLines={1}
                    _hover={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {el.S_brand}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    _hover={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {el.S_name}
                  </Box>

                  <Box color="green.600">
                    ${el.S_price}
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
          <div className="Newseuds2-2">
            {data6.map((el) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                // key={el.id}
                style={{ width: "23%" }}
              >
                <Box style={{ height: "120px" }}>
                  <Image
                    src={el.S_avatar}
                    alt={el.id}
                    className="Newseudsimage"
                  />
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
                      {el.S_number}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    lineHeight="tight"
                    noOfLines={1}
                    _hover={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {el.S_brand}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    _hover={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {el.S_name}
                  </Box>

                  <Box color="green.600">
                    ${el.S_price}
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
      </div>
      {/* -----------------------------intriducting------------------------------ */}
      <br />
      <br />
      <div className="introducting"></div>
      <br/>
      <br/>
      {/* -------------------------------Zapos for good--------------------------------------- */}
      <div className="zaposforgood">
        <div className="zaposforgood-1">
          <div className="zapos_image_1"></div>
          <h2>Diversity Equity &amp; Inclusion</h2>
          <p>At Zappos, diversity and individuality are central to our core values.</p>
          <h3>Learn More About Zappos ONE Purpose</h3>
          
        </div>
        < div  className="zaposforgood-1">
        <div className="zapos_image_2"></div>
        <h2>Zappos for Good</h2>
       <p>Learn how to easily donate or recycle your secondhand items.</p>
       <h3>Explore Zappos for Good</h3>
        </div>
        <div className="zaposforgood-1">
        <div className="zapos_image_3"></div>
        <h2>Goods for Good</h2>
        <p>We're highlighting brands who are making a difference and helping build a better place for us all.</p>
        <h3>Shop Goods for Good</h3>
        </div>

      </div>
      <Footer/>

   
    </div>
  );
};

export default Home;

{
  /* <img alt="" class="zk-z Ak-z" src="https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-CHROMACATION-LIME-JULY-960x500.jpg" srcset="https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-CHROMACATION-LIME-JULY-1920x1000.jpg 2x, https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-CHROMACATION-LIME-JULY-960x500.jpg 1x"></img> */
}
{
  /* <img alt="The Style Room" class="zk-z Ak-z" src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/thestyleroom/The-Style-Room-Logo.svg"></img> */
}
