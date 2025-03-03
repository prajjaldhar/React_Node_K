import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import shows from "../utility/data"; // Importing the shows data
// import { useData } from "../services/DataContext";
import { Link } from "react-router-dom";

const ProductList = ({ shows }) => {
  // const { shows } = useData();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto p-14">
      <h2 className="text-white text-2xl font-bold mb-6">Popular Shows</h2>
      <Slider {...settings}>
        {shows.map((show) => (
          <div key={show.id} className="px-2 -z-10">
            <Link to={`/show/${show.id}`}>
              <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
                <img
                  src={show.image}
                  alt={show.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-60 text-white text-center w-full py-2">
                  <h3 className="text-lg font-semibold">{show.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
