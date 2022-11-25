import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../sharedPage/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>This is Dashboard layout</h2>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content w-full ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>

            <li>
              {/* {isAdmin && ( */}
              <>
                <Link to="/dashboard/allbuyer">All Buyer</Link>

                <Link to="/dashboard/allseller">All Seller</Link>
                <Link to="/dashboard/addproducts">Add Products</Link>
                <Link to="/dashboard/reportedItem">Reported Item</Link>
              </>
              {/* )} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
