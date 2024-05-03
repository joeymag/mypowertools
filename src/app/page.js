"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

const Home = () => {

  return (
    <div className="  flex-1 bg-slate-600">
      <div >
        <img
          src="https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/news/2023/december/op-boromir---tools.jpg"
          alt="logo"
          width="w-full"
          height="max-w-full"
        />
      </div>
      <div className="text-center p-4">
        <h1 className="font-bold">Welcome to MyToolSafe</h1>
        <p>your ultimate solution for safeguarding your tools and equipment. Our platform offers a comprehensive tool management system designed to keep your valuable assets secure and easily accessible.
        With MyToolSafe, you can effortlessly catalogue your tools and equipment, including their serial numbers, ensuring that in the unfortunate event of theft, 
        law enforcement can quickly identify and return your items to you. Our collaboration with local police departments enhances this process, facilitating efficient recovery and minimizing
        losses.</p>
        <p>
        But that's not all  MyToolSafe goes beyond simple inventory management. Our innovative notification system alerts you to any nearby break-ins, empowering you to stay vigilant and take proactive measures to protect your belongings. By visualizing these incidents on our interactive maps, users can identify high-risk areas and make informed decisions to safeguard their property.
        Moreover, our platform serves as a vital tool for law enforcement. By allowing users to upload CCTV footage of incidents, we aid authorities in apprehending thieves and linking them to multiple crimes. This collaborative approach not only enhances individual security but also contributes to community safety efforts by identifying and addressing crime hotspots.
        At MyToolSafe, we're committed to providing peace of mind to tradespeople, contractors, and DIY enthusiasts alike. Join us in securing your tools and protecting your livelihood – because your tools deserve the best protection.
        </p>
      </div>

      <div className="mt-28  ">
        <h1 className="text-center text-6xl max-sm:text-5xl font-bold ">
          Packages
        </h1>
        <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col m-10">
          <div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full">
            <div className="text-white">Package one</div>
            <div className="text-6xl my-5 font-light text-white">£3.50</div>
            <div className="text-white">
              test
            </div>
            <button
              className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] transition-all"
            >
              Purchase
            </button>
            <ul className="text-white">
              <li>1 van</li>
              <li>20 power tools</li>
              <li></li>
            </ul>
          </div>
          <div
            className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full"
          >
            <div className="text-white">Package 2</div>
            <div className="text-6xl my-5 font-light text-white">£7.99</div>
            <div className="text-white">
              Short Description
            </div>
            <button
              className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] transition-all"
            >
              Purchase
            </button>
            <ul className="text-white">
              <li>First Feature</li>
              <li>Second Feature</li>
              <li>Thired Feature</li>
            </ul>
          </div>

        </div>
      </div>

    </div>


  );
};

export default Home;