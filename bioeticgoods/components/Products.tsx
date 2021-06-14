import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';

export default function Products() {
  return (
    <div className="bg-bgColor relative overflow-x-hidden overflow-y-hidden">
      <img
        className="absolute left-0 top-1/2 transform -translate-x-2 z-10"
        src="/images/aboutTwig1.png"
      ></img>
      <img
        className="absolute right-0 top-1/4 transform translate-x-1 z-10"
        src="/images/aboutTwig2.png"
      ></img>
      <div className="max-w-6xl mx-auto py-20">
        <Header
          description="Our products in detail"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
        modi at quae. A, labore. A, voluptatem mollitia nostrum dolores sunt
        odit asperiores. Impedit, pariatur."
        ></Header>
        <div className="mt-8">
          <h3 className="text-center font-medium text-gray-800">
            Change suppliers region
          </h3>
          <hr className="w-10 mx-auto mt-1"></hr>
          <div className="flex flex-row justify-center mt-2 gap-x-2">
            <img
              className="w-8 filter saturate-150"
              src="/images/swiss.png"
            ></img>
            <img className="w-8 filter grayscale" src="/images/italy.png"></img>
            <img
              className="w-8 filter grayscale"
              src="/images/united.png"
            ></img>
          </div>
        </div>
        <div className="flex flex-row mt-10 items-center">
          <div className="w-1/2 flex flex-row p-1 gap-x-4 justify-center">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage1.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                organic{' '}
                <span className="text-gray-800 font-semibold">fruits</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage2.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                fresh{' '}
                <span className="text-gray-800 font-semibold px-1">
                  vegetables
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage3.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                organic{' '}
                <span className="text-gray-800 font-semibold">breads</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
          </div>
          <div className="w-1/2 pl-10">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              Fresh from our swiss suppliers
            </p>
            <p className="text-3xl text-gray-600 font-light">
              220+{' '}
              <span className="text-gray-800 font-semibold">
                divers frozen products
              </span>
            </p>
            <p className="mt-4 w-3/4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              dignissimos, quos, enim dolores asperiores expedita harum quam
              eaque fugiat repellendus incidunt ea corrupti distinctio quae
              praesentium nobis animi laudantium amet.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-20 items-center">
          <div className="w-1/2 pl-14">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              Fresh from our swiss suppliers
            </p>
            <p className="text-3xl text-gray-600 font-light">
              115+{' '}
              <span className="text-gray-800 font-semibold">
                spirits, spices and herbs
              </span>
            </p>
            <p className="mt-4 w-3/4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              dignissimos, quos, enim dolores asperiores expedita harum quam
              eaque fugiat repellendus incidunt ea corrupti distinctio quae
              praesentium nobis animi laudantium amet.
            </p>
          </div>
          <div className="w-1/2 flex flex-row p-1 gap-x-4 justify-center">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage1.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                organic{' '}
                <span className="text-gray-800 font-semibold">fruits</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage2.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                fresh{' '}
                <span className="text-gray-800 font-semibold px-1">
                  vegetables
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4"
                src="/images/aboutImage3.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                organic{' '}
                <span className="text-gray-800 font-semibold">breads</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 items
              </p>
              <button className="px-4 py-2 w-full border mt-2 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
