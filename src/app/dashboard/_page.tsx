"use client";

import React from "react";
import CardAnalitic from "../_components/CardAnalitic";

function PageDashboard() {
  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 py-4">
        <CardAnalitic
          type={"primary"}
          icon={"users"}
          title={"Users"}
          value={40000}
          description="Total User On Database"
        />

        <CardAnalitic
          type={"warning"}
          icon={"shopping-cart"}
          title={"Order"}
          value={54000}
          description="Total Order On Database"
        />

        <CardAnalitic
          type={"success"}
          icon={"trending-up"}
          title={"Sales"}
          value={54000}
          description="Total Sales On Database"
        />

        <CardAnalitic
          type={"danger"}
          icon={"clock"}
          title={"Pending"}
          value={10}
          description="Total Order On Pending"
        />
      </div>
    </>
  );
}

export default PageDashboard;
