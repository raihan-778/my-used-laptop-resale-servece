import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductsTab = () => {
  return (
    <div>
      <h2 className="my-5 text-2xl font-bold text-sky-400">
        Newly Added Products
      </h2>
      <Tabs className="mx-auto my-10">
        <TabList className="bg-blue-600 sm:hidden w-full rounded-lg">
          <Tab>HP</Tab>
          <Tab>Lenovo</Tab>
          <Tab>DELL</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
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
