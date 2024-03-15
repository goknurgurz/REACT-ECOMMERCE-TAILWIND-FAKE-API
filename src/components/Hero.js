import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-no-repeat bg-hero bg-cover bg-center py-24">
      <div className="container  flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-[#e0a7b6] mr-3"></div>Udemig
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            E-COMMERCE REACT <br />
            <span className="font-semibold">TAILWIND</span>
          </h1>
          <Link
            to={"https://github.com/goknurgurz"}
            className="self-start uppercase font-semibold border-b-2 border-gray-900"
          >
            GOKNURGURZ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
