import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrap, Carousel } from "./Carousel.styles";
import { Wrapper, Content, Text } from "../HeroImage/HeroImage.style";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import React from "react";
import { Link } from "react-router-dom";

function HeroCarousel({ data }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {data?.map((movie, index) => {
        if (index > 10) {
          return null;
        }
        return (
          <Wrap key={movie.id}>
            <Link to={`/${movie.id}`}>
              {" "}
              <Wrapper
                // style={{ maxWidth: "var(--maxWidth)", margin: "auto" }}
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
              >
                <Content>
                  <Text>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                  </Text>
                </Content>
              </Wrapper>
            </Link>
          </Wrap>
        );
      })}
    </Carousel>
  );
}

export default HeroCarousel;
