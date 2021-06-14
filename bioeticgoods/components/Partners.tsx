import React from 'react';

export default function Partners() {
  return (
    <div className="h-48 flex flex-row items-center">
      <div className="flex flex-row w-5/6 mx-auto justify-around">
        <p className="text-gray-600 font-light text-lg tracking-wide text-center">
          Our suppliers who deliver quality food
        </p>
        <img className="w-24 cursor-pointer" src="/images/airbnbLogo.svg"></img>
        <img
          className="w-24 cursor-pointer"
          src="/images/producthuntLogo.svg"
        ></img>
        <img
          className="w-24 cursor-pointer"
          src="/images/instagramLogo.svg"
        ></img>
        <img
          className="w-24 cursor-pointer"
          src="/images/facebookLogo.svg"
        ></img>
        <img
          className="w-24 cursor-pointer"
          src="/images/spotifyLogo.svg"
        ></img>
        <img className="w-24 cursor-pointer" src="/images/googleLogo.svg"></img>
      </div>
    </div>
  );
}
