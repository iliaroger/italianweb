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
      header: 'Import from EAEU to EU',
      text: 'We import our goods and products from EAEU to EU.',
    },
    fresh: {
      header: 'Fresh from our suppliers',
      text: 'We picked the best suppliers from all regions to ensure a high standard for all our products.',
    },
    organic: {
      header: '100% organic goods',
      text: 'Our goods and products obey to a set standard regarding organic production.',
    },
    quality: {
      header: 'Premium quality',
      text: 'Each month we audit our suppliers and refresh the selection of our goods to ensure premium quality. ',
    },
    natural: {
      header: '100% natural',
      text: 'Our goods are grown under strict conditions and reviewed by our quality assurance team upon arrival.',
    },
    euea: {
      header: 'Import from EU to EAEU',
      text: 'We import our goods and products from EU to EAEU.',
    },
  };

  return (
    <div className="bg-bgColor pb-10 relative overflow-x-hidden">
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
        className="absolute left-0 top-1/4 transform -translate-x-2 z-10"
        src="/images/aboutTwig1.png"
      ></img>
      <img
        className="absolute right-0 top-1/2 transform translate-x-1 z-10"
        src="/images/aboutTwig2.png"
      ></img>
      <div className="max-w-6xl mx-auto">
        <Header
          description="Learn more about us"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
        modi at quae. A, labore. A, voluptatem mollitia nostrum dolores sunt
        odit asperiores. Impedit, pariatur."
        ></Header>
        <div className="flex flex-row mt-12">
          <div className="w-1/4 p-2 transform translate-y-16">
            <img className="w-1/3 mx-auto" src="/images/aboutImage1.png"></img>
            <p className="text-center mt-4 text-gray-600 font-light">
              fresh from{' '}
              <span className="font-semibold text-gray-800">our suppliers</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/4 p-2">
            <img className="w-1/3 mx-auto" src="/images/aboutImage2.png"></img>
            <p className="text-center mt-4 text-gray-600 font-light">
              100%{' '}
              <span className="font-semibold text-gray-800">organic goods</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/4 p-2">
            <img className="w-1/3 mx-auto" src="/images/aboutImage3.png"></img>
            <p className="text-center mt-4 text-gray-600 font-light">
              premium{' '}
              <span className="font-semibold text-gray-800">quality</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/4 p-2 transform translate-y-16">
            <img className="w-1/3 mx-auto" src="/images/aboutImage4.png"></img>
            <p className="text-center mt-4 text-gray-600 font-light">
              100% <span className="font-semibold text-gray-800">natural</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
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
        <div className="flex flex-row mt-10">
          <div className="w-1/4 p-2 self-center transform -translate-x-20">
            <div className="flex flex-row justify-center">
              <img className="w-28 p-2" src="/images/eaeu.png"></img>
              <img className="w-28 p-2" src="/images/eu.png"></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light">
              we import from{' '}
              <span className="font-semibold text-gray-800">EAEU to EU</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <img className="w-2/4" src="/images/aboutImage5.png"></img>
          <div className="w-1/4 p-2 self-center transform translate-x-20">
            <div className="flex flex-row justify-center">
              <img className="w-28 p-2" src="/images/eu.png"></img>
              <img className="w-28 p-2" src="/images/eaeu.png"></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light">
              we import from{' '}
              <span className="font-semibold text-gray-800">EU to EAEU</span>
            </p>
            <p className="text-center font-light text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase"
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
