import React from 'react';

export default function Partners() {
  return (
    <div className="h-48 flex flex-row items-center">
      <div className="flex flex-row w-5/6 mx-auto justify-around">
        <p className="text-gray-600 font-light text-lg tracking-wide text-center">
          Our suppliers who deliver quality food
        </p>
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
  );
}
