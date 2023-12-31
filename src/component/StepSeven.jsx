import { useState } from "react";
import comp from "../assets/coins/Compound (COMP).svg";
import eth from "../assets/coins/Ether (ETH).svg";
import usdc from "../assets/coins/USD Coin (USDC).svg";
import aave from "../assets/coins/Aave (AAVE).svg";

const invoices = [
  {
    titles: [
      {
        title: "Compound -",
        img: comp,
      },
      {
        title: "ETH :",
        img: eth,
      },
      {
        title: "USDC",
        img: usdc,
      },
    ],
    balance: {
      text: "Balance",
      price: "$1,012.13",
    },
    apr: {
      text: "Current APR",
      rate: "3.84%",
    },
    date: {
      text: "Date Opened",
      date: "March 11, 2023",
    },
  },
  {
    titles: [
      {
        title: "Compound -",
        img: comp,
      },
      {
        title: "COMP :",
        img: comp,
      },
      {
        title: "USDC",
        img: usdc,
      },
    ],
    balance: {
      text: "Balance",
      price: "$1,012.13",
    },
    apr: {
      text: "Current APR",
      rate: "3.84%",
    },
    date: {
      text: "Date Opened",
      date: "March 11, 2023",
    },
  },
  {
    titles: [
      {
        title: "Aave -",
        img: aave,
      },
      {
        title: "ETH :",
        img: eth,
      },
      {
        title: "USDC",
        img: usdc,
      },
    ],
    balance: {
      text: "Balance",
      price: "$1,012.13",
    },
    apr: {
      text: "Current APR",
      rate: "3.84%",
    },
    date: {
      text: "Date Opened",
      date: "March 11, 2023",
    },
  },
];

const StepSeven = () => {
  const [active, setActive] = useState(true);

  return (
    <main className="container mx-auto px-4 py-6 pt-20 lg:py-10 lg:pt-24 font-semibold">
      <h1 className="text-center md:text-left text-2xl md:text-3xl">
        Loan Dashboard
      </h1>
      <div className="border-2 rounded-2xl p-3 md:p-5 lg:p-6 mt-8">
        <h4 className="text-xl">Loans</h4>
        <div className="mt-4 mb-4">
          <button
            className={`py-[6px] px-4 text-sm relative ${
              active
                ? "bg-[#2C3B8D] text-white z-10 rounded-3xl"
                : "text-[#2C3B8D] bg-gray-200 z-0 rounded-s-3xl"
            }`}
            onClick={() => setActive(true)}
          >
            Active Loans
          </button>
          <button
            className={`py-[6px] px-4 text-sm -ml-[10px] relative ${
              !active
                ? "bg-[#2C3B8D] text-white z-10 rounded-3xl"
                : "text-[#2C3B8D] bg-gray-200 z-0 rounded-e-3xl"
            }`}
            onClick={() => setActive(false)}
          >
            Closed Loans
          </button>
        </div>
        <div className="divide-y-2 space-y-5">
          {/* grandparent */}
          {invoices.map((invoice, i) => (
            <div key={i} className="space-y-6 pt-4">
              {/* Parents */}
              <div className="flex gap-x-2 items-center mb-3 relative">
                {/* title Container */}
                {invoice.titles.map((title, i) => (
                  <div key={i} className="flex items-center gap-x-1">
                    <img src={title.img} alt="" className="w-5 h-5" />
                    <h1 className="md:text-xl">{title.title}</h1>
                  </div>
                ))}
                <button className="mt-6 py-2 px-6 rounded-3xl text-[#2C3B8D] bg-[#EEE] absolute left-1/2 -translate-x-1/2 top-[116px] md:left-[91%] md:-top-[30px] lg:left-[93%]  w-max">
                  Manage Loan
                </button>
              </div>
              <div className="space-y-1 pb-11 md:pb-0">
                {/* info Conatiner */}
                <div className="flex">
                  <p className="w-1/2">{invoice.balance.text}</p>
                  <p className="w-1/2 text-right md:text-left">
                    {invoice.balance.price}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-1/2">{invoice.apr.text}</p>
                  <p className="w-1/2 text-right md:text-left">
                    {invoice.apr.rate}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-1/2">{invoice.date.text}</p>
                  <p className="w-1/2 text-right md:text-left">
                    {invoice.date.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center md:text-left pb-2 md:pb-0">
            <button className="mt-6 py-2 px-6 rounded-3xl bg-[#2C3B8D] text-white">
              Create New Loan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StepSeven;
