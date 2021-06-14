import React from 'react';

interface PropTypes {
  description: string;
  text?: string;
}

export default function Header({ description, text }: PropTypes) {
  return (
    <div className="text-center">
      <div className="relative">
        <img
          className="absolute w-4 left-1/2 transform -translate-y-4"
          src="/images/leaf.png"
        ></img>
        <h2 className="font-extralight text-4xl text-gray-600">
          we are{' '}
          <span className="font-semibold text-gray-800">bio etic goods</span>
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <hr className="w-10"></hr>
        <p className="font-light text-gray-600 text-header text-xs mt-1 tracking-widest ml-2 uppercase">
          {description}
        </p>
        <hr className="w-10 ml-2"></hr>
      </div>
      <p className="mt-6 w-2/4 mx-auto font-light text-sm leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
}
