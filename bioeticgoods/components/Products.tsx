import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import Modal from '../components/Modal';

enum CountrySelected {
  swiss = 'swiss',
  italy = 'italy',
  uk = 'uk',
}

const CountryText = {
  swiss: {
    subheader: 'Fresh from our swiss suppliers',
    headerPart1: '220+ ',
    headerPart2: 'divers frozen products',
    headerPart3: '115+ ',
    headerPart4: 'spirits, spices and herbs',
  },
  italy: {
    subheader: 'Fresh from our italian suppliers',
    headerPart1: '320+ ',
    headerPart2: 'divers frozen products',
    headerPart3: '80+ ',
    headerPart4: 'spirits, spices and herbs',
  },
  uk: {
    subheader: 'Fresh from our uk suppliers',
    headerPart1: '190+ ',
    headerPart2: 'divers frozen products',
    headerPart3: '340+ ',
    headerPart4: 'spirits, spices and herbs',
  },
};

const modalInfo = {
  fruits: {
    header: 'We have the best fruits available.',
    text: 'Our fruits are the very juicy and sweet.',
  },
  vegetables: {
    header: 'We have the best vegetables available.',
    text: 'Our vegetables are the very juicy and sweet.',
  },
  breads: {
    header: 'We have the best breads available.',
    text: 'Our breads are the very juicy and sweet.',
  },
  sprites: {
    header: 'We have the best sprites available.',
    text: 'Our sprites are the very juicy and sweet.',
  },
  herbs: {
    header: 'We have the best herbs available.',
    text: 'Our herbs are the very juicy and sweet.',
  },
  spices: {
    header: 'We have the best spices available.',
    text: 'Our spices are the very juicy and sweet.',
  },
};

enum SelectionModal {
  fruits = 'fruits',
  vegetables = 'vegetables',
  breads = 'breads',
  sprites = 'sprites',
  herbs = 'herbs',
  spices = 'spices',
  none = '',
}

export default function Products() {
  const [countrySelected, setCountrySelected] = useState<CountrySelected>(
    CountrySelected.swiss
  );
  const [currentModal, setCurrentModal] = useState<SelectionModal>(
    SelectionModal.none
  );
  const [triggerModal, setTriggerModal] = useState<boolean>(false);

  return (
    <div className="bg-bgColor relative overflow-x-hidden overflow-y-hidden">
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
              className={`w-8 filter ${
                countrySelected === 'swiss' ? 'saturate-100' : 'grayscale'
              }  cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.swiss)}
              src="/images/swiss.png"
            ></img>
            <img
              className={`w-8 filter ${
                countrySelected === 'italy' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.italy)}
              src="/images/italy.png"
            ></img>
            <img
              className={`w-8 filter ${
                countrySelected === 'uk' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.uk)}
              src="/images/united.png"
            ></img>
          </div>
        </div>
        <div className="flex flex-row mt-10 items-center">
          <div className="w-1/2 flex flex-row p-1 gap-x-4 justify-center">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
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
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.fruits);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
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
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.vegetables);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
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
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.breads);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="w-1/2 pl-10">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className="text-3xl text-gray-600 font-light">
              {CountryText[countrySelected].headerPart1}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart2}
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
          <div className="w-1/2 text-left pl-10">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className="text-3xl text-gray-600 font-light">
              {CountryText[countrySelected].headerPart3}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart4}
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
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/tequila.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                original{' '}
                <span className="text-gray-800 font-semibold">sprites</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.sprites);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/herbs.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                fresh{' '}
                <span className="text-gray-800 font-semibold px-1">herbs</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.herbs);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/spices.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 mt-4 font-extralight">
                organic{' '}
                <span className="text-gray-800 font-semibold">spices</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 items
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spices);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
