import React from 'react';

export default function Partners() {
  return (
    <div className="h-48 flex flex-row items-center">
      <div className="flex xsm:flex-col lg:flex-row w-5/6 mx-auto justify-center items-center gap-x-12">
        <p className="text-gray-600 font-light xsm:text-sm lg:text-lg tracking-wide text-center">
          Our suppliers who deliver quality food
        </p>
        <div className="flex flex-row items-center xsm:gap-x-4 md:gap-x-10 lg:gap-x-8 xsm:mt-2 lg:mt-0">
          <a
            target="_blank"
            href="https://www.granoro.it/en/"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 cursor-pointer transition duration-300 filter grayscale hover:filter hover:grayscale-0"
              src="/images/supplier1.png"
            ></img>
          </a>
          <a
            target="_blank"
            href="https://firmaitalia.it/en/"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 cursor-pointer transition duration-300 filter grayscale hover:filter hover:grayscale-0"
              src="/images/supplier2.png"
            ></img>
          </a>
          <a rel="noopener noreferrer">
            <img
              className="w-24 cursor-pointer transition duration-300 filter grayscale hover:filter hover:grayscale-0"
              src="/images/supplier3.png"
            ></img>
          </a>
          <a rel="noopener noreferrer">
            <img
              className="w-24 cursor-pointer transition duration-300 filter grayscale hover:filter hover:grayscale-0"
              src="/images/supplier4.png"
            ></img>
          </a>
          <a target="_blank" href="https://www.almafrozenfood.it/">
            <img
              className="w-24 cursor-pointer transition duration-300 filter grayscale hover:filter hover:grayscale-0"
              src="/images/supplier5.png"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
