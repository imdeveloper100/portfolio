import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, nameImg, name }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                width={40} // Adjust width based on your needs
                height={40} // Adjust height based on your needs
                className="md:w-10 w-5"
              />
              <Image
                src={nameImg}
                alt={name}
                width={96} // Adjust width based on your needs
                height={24} // Adjust height based on your needs
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
