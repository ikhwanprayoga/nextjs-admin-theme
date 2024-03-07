"use client";

import Button from "../_components/Button";
import Table from "../_components/Table";
import { stringify } from "querystring";

const columns = [
  {
    title: "No",
    key: "no",
  },
  {
    title: "Nama",
    key: "name",
  },
  {
    title: "Address",
    key: "address",
  },
  {
    title: "Date",
    key: "date",
    render: (data: any) => {
      if (data.date) {
        return <span>{data.date.split("-").reverse().join("-")}</span>;
      }
    },
  },
  {
    title: "Status",
    key: "status",
    render: (data: any) => {
      if (data.status === "Active") {
        return <span className="text-green-500">Active</span>;
      } else if (data.status === "Disactive") {
        return <span className="text-red-500">Disactive</span>;
      }
    },
  },
  {
    title: "Action",
    key: "action",
    render: (data: any) => {
      return (
        <Button
          small
          disabled={data.status === "Disactive"}
          onClick={() => handleButton(data)}
          preIcon="list"
        >
          Detail
        </Button>
      );
    },
  },
];
const datas = [
  {
    no: 1,
    name: "Kayla",
    address: "New York",
    date: "1996-09-12",
    status: "Active",
  },
  {
    no: 2,
    name: "Zahir",
    address: "Belgia",
    date: "1993-04-12",
    status: "Active",
  },
  {
    no: 3,
    name: "Abdul",
    address: "New Delhi",
    date: "1995-12-01",
    status: "Disactive",
  },
];

const handleButton = (data: any) => {
  alert("clicked : " + stringify(data));
};

function PageOrderList() {
  return <Table data={datas} column={columns} />;
}

export default PageOrderList;
