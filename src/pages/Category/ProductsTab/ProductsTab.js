import React from "react";
import Carousel from "react-grid-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductsTab = () => {
  return (
    <div className="py-3">
      <h2 className="my-5 text-2xl font-bold text-sky-400">
        Newly Added Products
      </h2>
      <Tabs className="mx-auto my-10">
        <TabList className="bg-blue-600 w-full mb-5 rounded-lg">
          <Tab>Smart Phone</Tab>
          <Tab>Camera</Tab>
          <Tab>VR Box</Tab>
          <Tab>Smart Watch</Tab>
        </TabList>
        <TabPanel className="bg-blue-600 rounded-xl p-5">
          <Carousel cols={3} rows={1} gap={20} loop>
            <Carousel.Item>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card card-compact w-60 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=2" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=3" />
            </Carousel.Item>
            <Carousel.Item>
              {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
          </Carousel>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductsTab;
