import React from 'react';

export default function Partners() {
  return (
    <div className="h-48 flex flex-row items-center">
      <div className="flex xsm:flex-col lg:flex-row w-5/6 mx-auto justify-center gap-x-12">
        <p className="text-gray-600 font-light xsm:text-sm lg:text-lg tracking-wide text-center">
          Our suppliers who deliver quality food
        </p>
        <div className="flex flex-row items-center xsm:gap-x-4 md:gap-x-10 lg:gap-x-8 xsm:mt-2 lg:mt-0">
          <a target="_blank" href="https://www.airbnb.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/airbnbLogo.svg"
            ></img>
          </a>
          <a target="_blank" href="https://www.producthunt.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/producthuntLogo.svg"
            ></img>
          </a>
          <a target="_blank" href="https://www.instagram.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/instagramLogo.svg"
            ></img>
          </a>
          <a target="_blank" href="https://www.facebook.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/facebookLogo.svg"
            ></img>
          </a>
          <a target="_blank" href="https://www.spotify.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/spotifyLogo.svg"
            ></img>
          </a>
          <a target="_blank" href="https://www.google.com">
            <img
              className="w-24 cursor-pointer"
              src="/images/googleLogo.svg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
