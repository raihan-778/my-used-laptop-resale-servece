import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedBrands = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" p-5 rounded-xl bg-[rgb(250,250,250)] py-5 shadow-xl mb-10 ">
      <h2 className=" mb-5 text-3xl font-bold text-blue-600">
        Our Populer Brands
      </h2>
      <Carousel
        className="mb-5"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="avatar shadow-lg transition  hover:shadow-sky-900 hover:all ease-in-out">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/qrVgvwh/mi-logo.png"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/QdPSNNM/Huawei-logo.jpg"
              alt="Huawei-logo"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            {" "}
            <img
              className="w-3/4"
              src="https://i.ibb.co/xmDNKBZ/samsung.png"
              alt="samsung"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/bKrdGjP/vivo-mobile-brand-logo.png"
              alt="vivo-mobile-brand-logo"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/1r0pXct/dell150.png"
              alt="dell150"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/qjRnDhx/lenovo150.png"
              alt="dell150"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-1/2 bg-white"
              src="https://i.ibb.co/9cTkZVw/1hp150.png"
              alt="dell150"
              border="0"
            />
          </div>
        </div>
        <div className="avatar shadow-lg transition all ease-in-out hover:shadow-sky-900 ">
          <div className="w-72 h-48 rounded-xl">
            <img
              className="w-3/4"
              src="https://i.ibb.co/D4bDvg0/camera-logo.png"
              alt="dell150"
              border="0"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedBrands;
