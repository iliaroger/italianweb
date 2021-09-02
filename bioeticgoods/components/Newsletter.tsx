import React from 'react';

export default function Newsletter() {
  const mailChimpUrl =
    'https://iliaroger.us6.list-manage.com/subscribe/post?u=9050139b1c88f955f9caab702&amp;id=9b0acf64a4';
  return (
    <div className="bg-bgColor py-20 relative overflow-hidden">
      <img
        className="absolute xsm:w-20 sm:w-32 md:w-40 lg:w-52 left-0 bottom-0 transform -translate-x-3 translate-y-2"
        src="/images/cta1.png"
        alt="berries and lemons"
      ></img>
      <img
        className="absolute top-0 right-0 xsm:w-24 sm:w-32 md:w-40 lg:w-52 transform translate-x-10"
        src="/images/cta2.png"
        alt="chilis"
      ></img>
      <div className="text-center">
        <div className="relative">
          <img
            className="absolute w-4 left-1/2 transform -translate-y-4 translate-x-6"
            src="/images/leaf.png"
            alt="leaf"
          ></img>
          <h2 className="font-extralight xsm:text-xl lg:text-2xl text-gray-600">
            abonnieren sie{' '}
            <span className="font-semibold text-gray-800">bio etic goods</span>
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <hr className="w-10"></hr>
          <p className="font-light text-gray-600 text-header text-xs mt-1 tracking-widest uppercase">
            um auf dem laufenden zu bleiben
          </p>
          <hr className="w-10"></hr>
        </div>
      </div>
      <div className="text-center mt-4">
        <form
          action={mailChimpUrl}
          method="post"
          id={`mc-embedded-subscribe-form`}
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <input
            className="xsm:w-40 sm:w-48 md:w-60 lg:w-80 xl:w-96 xsm:text-xs lg:text-sm text-gray-600 font-light px-4 py-2 rounded-l-lg outline-none"
            placeholder="geben sie ihre email adresse ein"
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
          />
          <button
            className="px-4 py-2 xsm:text-xs lg:text-sm font-light text-white bg-mainGreen focus:outline-none hover:opacity-80 transition duration-300"
            type="submit"
            defaultValue="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            newsletter beitreten
          </button>
        </form>
      </div>
    </div>
  );
}
