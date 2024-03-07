import { Metadata } from "next";
import React from "react";
import PageOrderList from "./_page";
import Button from "../_components/Button";

export const metadata: Metadata = {
  title: "Order List | Beauty Theme",
};

function OrderList() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-[#202224] py-2">Order List</h1>
        <Button outline rounded small preIcon="plus">
          Tambah Data
        </Button>
      </div>
      <PageOrderList />
    </div>
  );
}

export default OrderList;
