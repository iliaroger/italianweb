import React from 'react';
import { ClipboardListIcon, MailIcon } from '@heroicons/react/outline';

export default function Hero() {
  return (
    <div className=" flex flex-row max-w-5xl mx-auto">
      <div className="w-1/2">
        <p className="font-extralight text-3xl text-gray-800">Welcome to</p>
        <h1 className="font-bold text-5xl text-gray-800 mt-1">
          Bio Etic Goods
        </h1>
        <p className="font-light text-2xl text-mainGreen mt-1">
          Acquainted with traditions
        </p>
        <p className="text-base w-3/4 text-gray-600 mt-4">
          Hello and welcome to Bio Etic Goods. We act as a brokers and
          distrubutors in the food and beverage sector. We spezialize in frozen
          products, spirits, spices and herbs.
        </p>
        <div className="mt-4">
          <button className="px-8 py-3 text-lg font-light text-white bg-mainGreen rounded select-none">
            <div className="flex flex-row">
              <ClipboardListIcon className="w-5"></ClipboardListIcon>
              <p className="ml-1 text-lg">About Us</p>
            </div>
          </button>
          <button className="px-8 py-3 text-lg font-light border border-gray-300 text-gray-400 bg-white rounded ml-4 select-none">
            <div className="flex flex-row">
              <MailIcon className="w-5"></MailIcon>
              <p className="ml-1 text-lg">Contact</p>
            </div>
          </button>
        </div>
        <div className="mt-8">
          <p className="text-gray-600 font-light">
            We operate in the following regions:
          </p>
          <div className="flex flex-row mt-1">
            <img
              className="w-10 border border-white select-none"
              src="/images/united.png"
            ></img>
            <img
              className="w-10  border border-white ml-1 select-none"
              src="/images/swiss.png"
            ></img>
            <img
              className="w-10 border border-white ml-1 select-none"
              src="/images/eu.png"
            ></img>
            <img
              className="w-10 border ml-1 select-none"
              src="/images/eaeu.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <p>Sec2</p>
      </div>
    </div>
  );
}
