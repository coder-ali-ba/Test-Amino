import React from "react";
import test from "../assets/3rdTest.webp";
import ship from "../assets/shipp.webp";
import cus from "../assets/cust.png";

function Services() {
  return (
    <div className="w-full flex max-md:flex-wrap gap-4 text-white h-fit">
      <div className="bg-gray-800 px-3  py-5  text-center rounded-3xl  border-2 border-blue-700 ">
        <img src={test} className="w-15 h-15 mx-auto " alt="" />
        <h2 className="text-2xl mt-2 font-bold">Third party tested</h2>
        <p className="mt-2">
          Third Party Multi Vial Batch Tested: Our products undergo rigorous
          third-party, multi-vial batch testing to ensure exceptional safety,
          purity, and quality. Batch testing also allows you to easily match
          each peptide to its corresponding Certificate of Analysis (COA).
        </p>
      </div>
      <div className="bg-gray-800 px-3 py-5  text-center rounded-3xl  border-2 border-blue-700">
        <img src={ship} className="w-15 h-15 mx-auto " alt="" />
        <h2 className="text-2xl mt-2 font-bold">Fast Shipping</h2>
        <p className="mt-2">
          Same-Day Shipping Monday through Friday when you order before 12 PM
          CST! At Modern Aminos, we take pride in our fast, reliable shipping to
          ensure your order arrives without delay.
        </p>
      </div>
      <div className="bg-gray-800 px-3 py-5  text-center rounded-3xl  border-2 border-blue-700">
        <img src={cus} className="w-15 h-15 mx-auto " alt="" />
        <h2 className="text-2xl mt-2 font-bold">
          24/7 Customer Support (Monday–Friday)
        </h2>
        <p className="mt-2">
          Our dedicated customer service team is available Monday through
          Friday, and for most of the day on weekends, to ensure your needs are
          handled quickly and efficiently.
        </p>
      </div>
    </div>
  );
}

export default Services;
