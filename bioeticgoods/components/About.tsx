import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import Modal from '../components/Modal';

interface ModalType {
  [key: string]: {
    header: string;
    text: string;
  };
}

enum SelectionModal {
  euea = 'euea',
  eaeu = 'eaeu',
  fresh = 'fresh',
  organic = 'organic',
  quality = 'quality',
  natural = 'natural',
  none = '',
}

export default function About() {
  const [currentModal, setCurrentModal] = useState<SelectionModal>(
    SelectionModal.none
  );
  const [triggerModal, setTriggerModal] = useState<boolean>(false);

  const modalInfo: ModalType = {
    eaeu: {
      header: 'Import from EAEU to EU/CH',
      text: 'We are involved in the import, wholesale and promotion of products from EAEU manufacturers to European and Swiss markets. We create partnerships, provide regulatory and procedural, logistical and marketing support for products and for all business activities up to the final consumer. Manufacturers use us to distribute their brands effectively and easily.',
    },
    fresh: {
      header: 'Fresh from our suppliers',
      text: 'We take care of our customers. All products comply with all necessary standards and are carefully checked. We work with the best logistics companies so that your orders arrive to you in the best possible way!',
    },
    organic: {
      header: '100% exclusivity',
      text: 'All our products are sold only by us. We have exclusive supply contracts with all our manufacturers. Thus, we care about quality and can guarantee it!',
    },
    quality: {
      header: 'Premium quality',
      text: 'Everything we put on our store shelves is of exceptional quality. We conclude contracts only with the best manufacturers. Take our word for it or just try yourself!',
    },
    natural: {
      header: 'The best ingredients',
      text: 'All our products are made not only by professionals in their field, but also from the best ingredients. Flour or cheese, vegetables or fruits - everything that you find in the composition will delight you with its taste and quality.',
    },
    euea: {
      header: 'Import from EU/CH to EAEU',
      text: 'We are involved in the import, wholesale and promotion of products from Swiss and European manufacturers to EAEU market. We create partnerships, provide regulatory and procedural, logistical and marketing support for products and for all business activities up to the final consumer. Manufacturers use us to distribute their brands effectively and easily.',
    },
  };

  return (
    <div className="bg-bgColor relative overflow-x-hidden">
      <div className="transform -translate-y-20" id="about"></div>
      {currentModal !== '' ? (
        <Modal
          trigger={triggerModal}
          description={modalInfo[currentModal].header}
          text={modalInfo[currentModal].text}
        ></Modal>
      ) : (
        ''
      )}
      <img
        className="absolute left-0 top-1/4 transform -translate-x-2 z-10 md:w-20 lg:w-32 xl:w-36 xsm:invisible md:visible"
        src="/images/aboutTwig1.png"
        alt="twig"
      ></img>
      <img
        className="absolute right-0 xsm:top-1/2 lg:top-40 xl:top-1/2 transform translate-x-1 z-10 md:w-20 lg:w-32 xl:w-36 xsm:invisible md:visible"
        src="/images/aboutTwig2.png"
        alt="twig"
      ></img>
      <div className="max-w-6xl mx-auto py-20">
        <Header
          description="Learn more about us"
          text="We are engaged in export-import activities and we take care of making the traditional products of each country known to the world. We supply foodstuffs products to commercial enterprises of all categories (Large-scale retail trade, Retails, Ho.Re.Ca. sector)."
        ></Header>
        <div className="flex flex-row flex-wrap mt-12">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 transform lg:translate-y-24">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage1.png"
              alt="point1"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Fresh from{' '}
              <span className="font-semibold text-gray-800">our suppliers</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              We picking the best suppliers from all regions to ensure a high
              standard for all our products.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 xsm:w-2/4 p-2">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage2.png"
              alt="point2"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              100%{' '}
              <span className="font-semibold text-gray-800">exclusivity</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
                 Our goods are selected from a pool of exclusive and renowned
              suppliers from Europe and EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 xsm:w-2/4 p-2">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage3.png"
              alt="point3"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Premium{' '}
              <span className="font-semibold text-gray-800">quality</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              We constantly audit our suppliers and refresh the selection of our
              goods to ensure premium quality.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 xsm:w-2/4 p-2 transform lg:translate-y-24">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage4.png"
              alt="about"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              The best{' '}
              <span className="font-semibold text-gray-800">ingredients</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Our 100% natural-marked goods are produced under strict conditions
              and reviewed by our quality assurance team upon arrival.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.natural);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-10">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 self-center transform xl:-translate-x-20">
            <div className="flex flex-row justify-center">
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/eaeu.png"
                alt="eaeu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/eu.png"
                alt="eu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/swiss.png"
                alt="swiss"
              ></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Import from{' '}
              <span className="font-semibold text-gray-800">EAEU to EU/CH</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              We import our goods and products from EAEU to EU/CH.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <img
            className="w-2/4 h-96 xsm:hidden lg:block"
            src="/images/foodBg2.webp"
            alt="pizza and ingredients"
          ></img>
          <div className="lg:w-1/4 xsm:w-2/4 p-2 self-center transform xl:translate-x-20">
            <div className="flex flex-row justify-center">
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/eu.png"
                alt="eu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/swiss.png"
                alt="swiss"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-2"
                src="/images/eaeu.png"
                alt="eaeu"
              ></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Import from{' '}
              <span className="font-semibold text-gray-800">EU/CH to EAEU</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              We import our goods and products from EU/CH to EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.euea);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
