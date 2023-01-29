import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import Carousel from "react-grid-carousel";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./phoneCollection.json";
import { HiShoppingCart, HiEye, HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProductsTab = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="py-3">
      <Slide direction="right">
        <h2 className="my-5 text-3xl font-bold text-sky-600">
          Newly Added Products
        </h2>
      </Slide>
      <Zoom duration={1500}>
        <Tabs className="mx-auto my-10">
          <TabList className="bg-[#78CBE1] text-slate-50 w-full mb-5 rounded-lg">
            <Tab>Smart Phone</Tab>
            <Tab>Camera</Tab>
            <Tab>VR Box</Tab>
            <Tab>Smart Watch</Tab>
          </TabList>
          <TabPanel className="rounded-xl">
            <Carousel
              cols={3}
              rows={1}
              gap={10}
              loop
              responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 3,
                },
                {
                  breakpoint: 990,
                  cols: 2,
                },
              ]}
              mobileBreakpoint={670}
              arrowRight={<FaArrowAltCircleRight type="right" />}
              arrowLeft={<FaArrowAltCircleLeft type="left" />}
            >
              <Carousel.Item>
                <div
                  className="relative"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div
                    className={`card transition ease-in-out  ${
                      hovered ? "blur-sm " : ""
                    } my-5 card-p-5 compact w-60 text-blue-700 shadow-xl`}
                  >
                    <figure className="h-[300px]">
                      <img
                        className="w-3/4 h-auto transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
                        src="https://i.ibb.co/wgPkWkG/samsung-zfould.png"
                        alt="phone"
                      />
                    </figure>
                    <div className="card-p-5 body">
                      <h2 className="font-bold text-xl text-center">Samsung</h2>
                      <p className="font-semibold text-amber-600">
                        Samsung Z Fould
                      </p>
                    </div>
                  </div>
                  {hovered && (
                    <>
                      <div className="card my-5 card-p-5 compact bg-slate-400 bg-opacity-20  w-60 absolute top-0 left-0 z-10 text-red-700 ">
                        <figure className="h-[300px] flex justify-around items-center">
                          <HiShoppingCart className="text-2xl ">
                            <Link href="#"></Link>
                          </HiShoppingCart>
                          <HiEye className="text-2xl">
                            <Link href="#"></Link>
                          </HiEye>
                          <HiHeart className="text-2xl">
                            <Link href="#"></Link>
                          </HiHeart>
                        </figure>
                      </div>
                    </>
                  )}
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-3/4 h-auto transition hover:scale-110 hover:all ease-in-out rounded-xl  p-5"
                      src="https://i.ibb.co/YWVzjkx/samsungwebp.webp"
                      alt="phone"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">Samsung</h2>
                    <p className="font-semibold text-amber-600">
                      Samsung Note 20
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-3/4 h-auto transition hover:scale-110 hover:all ease-in-out rounded-xl  p-5"
                      src="https://i.ibb.co/h9zc5XT/samsung-s9.webp"
                      alt="phone"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">Samsung</h2>
                    <p className="font-semibold text-amber-600">
                      Samsung Note 10 Lite
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-3/4 h-auto transition hover:scale-110 hover:all ease-in-out rounded-xl  p-5"
                      src="https://i.ibb.co/dc5kj9s/samsung-note20-ultrawebp.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">Samsung</h2>
                    <p className="font-semibold text-amber-600">
                      Note 20 Ultra
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </TabPanel>
          <TabPanel className="rounded-xl">
            <Carousel
              cols={3}
              rows={1}
              gap={10}
              loop
              responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 3,
                },
                {
                  breakpoint: 990,
                  cols: 2,
                },
              ]}
              mobileBreakpoint={670}
              arrowRight={<FaArrowAltCircleRight type="right" />}
              arrowLeft={<FaArrowAltCircleLeft type="left" />}
            >
              <Carousel.Item>
                <div className="relative">
                  <div className="card  my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                    <figure>
                      <img
                        className="w-full h-[220px] transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
                        src="https://i.ibb.co/hL039tL/s-l1600-16.jpg"
                        alt="phone"
                      />
                    </figure>
                    <div className="card-p-5 body h-[160px] p-5">
                      <h2 className="font-bold text-xl text-center">Nikon</h2>
                      <p className="font-semibold text-amber-600">
                        Nikon D3500 24.2MP Camera w/ 18-55mm, Battery and
                        Charger
                      </p>
                    </div>
                  </div>
                  <div className="card my-5 card-p-5 bg bg-slate-500 bg-opacity-20 compact opacity-0 transition ease-in-out hover:opacity-100  w-60  absolute right-20px bottom-28 z-10  text-red-700">
                    <figure className="h-[300px] flex justify-around items-center">
                      <HiShoppingCart className="text-2xl ">
                        <Link href="#"></Link>
                      </HiShoppingCart>
                      <HiEye className="text-2xl">
                        <Link href="#"></Link>
                      </HiEye>
                      <HiHeart className="text-2xl">
                        <Link href="#"></Link>
                      </HiHeart>
                    </figure>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="relative">
                  <div className="card  my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                    <figure>
                      <img
                        className="w-full h-[220px] transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
                        src="https://i.ibb.co/VVVnk0Z/camera7.webp"
                        alt="phone"
                      />
                    </figure>
                    <div className="card-p-5 body h-[160px] p-5">
                      <h2 className="font-bold text-xl text-center">Canon</h2>
                      <p className="font-semibold text-amber-600">
                        Canon DSLR Camera EOS w/ 18-55mm, 1D Mark IV EOS-R6
                      </p>
                    </div>
                  </div>
                  <div className="card my-5 card-p-5 bg bg-slate-500 bg-opacity-20 compact opacity-0 transition ease-in-out hover:opacity-100  w-60  absolute right-20px bottom-28 z-10  text-red-700">
                    <figure className="h-[300px] flex justify-around items-center">
                      <HiShoppingCart className="text-2xl ">
                        <Link href="#"></Link>
                      </HiShoppingCart>
                      <HiEye className="text-2xl">
                        <Link href="#"></Link>
                      </HiEye>
                      <HiHeart className="text-2xl">
                        <Link href="#"></Link>
                      </HiHeart>
                    </figure>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="relative">
                  <div className="card  my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                    <figure>
                      <img
                        className="w-full h-[220px] transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
                        src="https://i.ibb.co/pQ6qYzq/camera6webp.webp"
                        alt="phone"
                      />
                    </figure>
                    <div className="card-p-5 body h-[160px] p-5">
                      <h2 className="font-bold text-xl text-center">Cannon</h2>
                      <p className="font-semibold text-amber-600">
                        [MINT] Canon EOS 7D 18.0MP Black Body w/ Charger Digital
                        SLR Camera
                      </p>
                    </div>
                  </div>
                  <div className="card my-5 card-p-5 bg bg-slate-500 bg-opacity-20 compact opacity-0 transition ease-in-out hover:opacity-100  w-60  absolute right-20px bottom-28 z-10  text-red-700">
                    <figure className="h-[300px] flex justify-around items-center">
                      <HiShoppingCart className="text-2xl ">
                        <Link href="#"></Link>
                      </HiShoppingCart>
                      <HiEye className="text-2xl">
                        <Link href="#"></Link>
                      </HiEye>
                      <HiHeart className="text-2xl">
                        <Link href="#"></Link>
                      </HiHeart>
                    </figure>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="relative">
                  <div className="card  my-5 card-p-5 compact w-60  text-blue-700 shadow-xl">
                    <figure>
                      <img
                        className="w-full h-[220px] transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
                        src="https://i.ibb.co/hgr4HCS/camera3webp.webp"
                        alt="phone"
                      />
                    </figure>
                    <div className="card-p-5 body h-[160px] p-5">
                      <h2 className="font-bold text-xl text-center">Cannon</h2>
                      <p className="font-semibold text-amber-600">
                        [Near Mint] Canon EOS 7D 18.0MP Digital SLR Camera Black
                        w/ Charger
                      </p>
                    </div>
                  </div>
                  <div className="card my-5 card-p-5 bg  bg-slate-500 bg-opacity-10 compact opacity-0 transition ease-in-out hover:opacity-100  w-60 h-auto  absolute right-20px -bottom-5 z-10 text-opacity-80 text-slate-600">
                    <figure className="h-[300px] flex justify-around items-center">
                      <HiShoppingCart className="text-2xl ">
                        <Link href="#"></Link>
                      </HiShoppingCart>
                      <HiEye className="text-2xl">
                        <Link href="#"></Link>
                      </HiEye>
                      <HiHeart className="text-2xl">
                        <Link href="#"></Link>
                      </HiHeart>
                    </figure>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </TabPanel>
          <TabPanel className=" rounded-xl">
            <Carousel
              cols={3}
              rows={1}
              gap={10}
              responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 3,
                },
                {
                  breakpoint: 990,
                  cols: 2,
                },
              ]}
              mobileBreakpoint={670}
              arrowRight={<FaArrowAltCircleRight type="right" />}
              arrowLeft={<FaArrowAltCircleLeft type="left" />}
            >
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/t3nyGZn/watch4.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/kyLYndq/watch1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="[h-300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/YttmJ3J/watch3.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/wKcC9m2/watch5jpg.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/26jQJT2/watch6jpg.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </TabPanel>
          <TabPanel className="rounded-xl">
            <Carousel
              cols={3}
              rows={1}
              gap={20}
              loop
              responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 3,
                },
                {
                  breakpoint: 990,
                  cols: 2,
                },
              ]}
              mobileBreakpoint={670}
              arrowRight={<FaArrowAltCircleRight type="right" />}
              arrowLeft={<FaArrowAltCircleLeft type="left" />}
            >
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/t3nyGZn/watch4.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/kyLYndq/watch1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/YttmJ3J/watch3.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/wKcC9m2/watch5jpg.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card my-5 card-p-5 compact w-60 text-blue-700 shadow-xl">
                  <figure className="h-[300px]">
                    <img
                      className="w-full h-auto transition hover:scale-110 hover:all ease-in-out rounded-full  p-5"
                      src="https://i.ibb.co/26jQJT2/watch6jpg.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-p-5 body">
                    <h2 className="font-bold text-xl text-center">
                      Coming Soon!!!
                    </h2>
                    <p className="font-semibold text-amber-600">
                      All renwoned Smart Watch
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </TabPanel>
        </Tabs>
      </Zoom>
    </div>
  );
};

export default ProductsTab;
