import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "../Layout/dashboard/dashboard";
import { TableComp, BillCard, Profile } from "../Pages/index";

const RouteComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element="Home" />
          <Route path="table" element={<TableComp />} />
          <Route path="billing" element={<BillCard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sign-in" element="Sign in" />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteComp;
