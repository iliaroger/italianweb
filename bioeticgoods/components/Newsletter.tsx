import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-bgColor py-20 relative overflow-hidden">
      <img
        className="absolute w-52 left-0 bottom-0 transform -translate-x-3 translate-y-2"
        src="/images/cta1.png"
      ></img>
      <img
        className="absolute top-0 right-0 w-52 transform translate-x-10"
        src="/images/cta2.png"
      ></img>
      <div className="text-center">
        <div className="relative">
          <img
            className="absolute w-4 left-1/2 transform -translate-y-4 translate-x-6"
            src="/images/leaf.png"
          ></img>
          <h2 className="font-extralight text-2xl text-gray-600">
            subscribe to{' '}
            <span className="font-semibold text-gray-800">bio etic goods</span>
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <hr className="w-10"></hr>
          <p className="font-light text-gray-600 text-header text-xs mt-1 tracking-widest uppercase">
            to stay up to date
          </p>
          <hr className="w-10"></hr>
        </div>
      </div>
      <div className="text-center mt-4">
        <input
          className="w-80 text-sm text-gray-600 font-light px-4 py-2 rounded-l-lg outline-none"
          type="text"
          placeholder="enter your email address"
        />
        <button className="px-4 py-2 text-sm font-light text-white bg-mainGreen focus:outline-none hover:opacity-80 transition duration-300">
          join the newsletter
        </button>
      </div>
    </div>
  );
}
