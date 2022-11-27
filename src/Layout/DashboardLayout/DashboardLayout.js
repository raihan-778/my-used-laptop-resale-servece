import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Navbar from "../../sharedPage/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer neutral px-5 drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content w-100">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 text-base-content">
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>

            <li>
              {isAdmin && (
                <>
                  <Link to="/dashboard/allbuyer">All Buyer</Link>
                  <Link to="/dashboard/allseller">All Seller</Link>
                  <Link to="/dashboard/reportedItem">Reported Item</Link>
                </>
              )}
              {isSeller && !isAdmin && (
                <>
                  <Link to="/dashboard/addproducts">Add Products</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
