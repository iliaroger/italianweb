import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import Modal from '../components/Modal';

enum CountrySelected {
  swiss = 'ch',
  italy = 'it',
  france = 'fr',
  germany = 'de',
  belarus = 'by',
}

const CountryText = {
  ch: {
    subheader: 'Fresh from our swiss suppliers',
    headerPart1: '220+ ',
    headerPart2: 'divers food products',
    headerPart3: '115+ ',
    headerPart4: `alcohol free, wine & champagne, spirits`,
    headerPart5: '115+ ',
    headerPart6: 'spices and herbs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text3:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
  },
  it: {
    subheader: 'Fresh from our italian suppliers',
    headerPart1: '320+ ',
    headerPart2: 'divers food products',
    headerPart3: '80+ ',
    headerPart4: 'spirits, spices and herbs',
    headerPart5: '115+ ',
    headerPart6: 'spices and herbs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text3:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
  },
  fr: {
    subheader: 'Fresh from our french suppliers',
    headerPart1: '190+ ',
    headerPart2: 'divers food products',
    headerPart3: '340+ ',
    headerPart4: 'spirits, spices and herbs',
    headerPart5: '115+ ',
    headerPart6: 'spices and herbs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text3:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
  },
  de: {
    subheader: 'Fresh from our german suppliers',
    headerPart1: '190+ ',
    headerPart2: 'divers food products',
    headerPart3: '340+ ',
    headerPart4: 'spirits, spices and herbs',
    headerPart5: '115+ ',
    headerPart6: 'spices and herbs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text3:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
  },
  by: {
    subheader: 'Fresh from our belarusian suppliers',
    headerPart1: '190+ ',
    headerPart2: 'divers food products',
    headerPart3: '340+ ',
    headerPart4: 'spirits, spices and herbs',
    headerPart5: '115+ ',
    headerPart6: 'spices and herbs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
    text3:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum commodi ducimus. Nemo perspiciatis maxime commodi hic eum accusantium, esse quos voluptas sunt, sit culpa nihil animi reprehenderit rerum suscipit?',
  },
};

const ModalInfo = {
  ch: {
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
  },
  it: {
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
  },
  fr: {
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
  },
  de: {
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
  },
  by: {
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
      <div className="transform -translate-y-20" id="products"></div>
      {currentModal !== '' ? (
        <Modal
          trigger={triggerModal}
          description={ModalInfo[countrySelected][currentModal].header}
          text={ModalInfo[countrySelected][currentModal].text}
        ></Modal>
      ) : (
        ''
      )}
      <img
        className="absolute left-0 xl:top-1/2 transform -translate-x-2 z-10 lg:block xsm:hidden"
        src="/images/aboutTwig1.png"
      ></img>
      <img
        className="absolute right-0 lg:top-1/4 transform translate-x-1 z-10 lg:block xsm:hidden"
        src="/images/aboutTwig2.png"
      ></img>
      <img
        className="absolute right-0 lg:top-3/4 transform translate-x-1 z-10 lg:block xsm:hidden"
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
          <h3 className="text-center xsm:text-sm lg:text-base font-medium text-gray-800">
            Change suppliers region
          </h3>
          <hr className="w-10 mx-auto mt-1"></hr>
          <div className="flex flex-row justify-center mt-2 gap-x-2">
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'ch' ? 'saturate-100' : 'grayscale'
              }  cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.swiss)}
              src="/images/swiss.png"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'it' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.italy)}
              src="/images/italy.png"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'fr' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.france)}
              src="/images/france.png"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'de' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.germany)}
              src="/images/germany.png"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'by' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.belarus)}
              src="/images/belarus.png"
            ></img>
          </div>
        </div>
        <div className="flex xsm:flex-col lg:flex-row mt-10 items-center">
          <div className="xsm:w-full xsm:order-2 lg:order-none lg:w-1/2 flex flex-row p-1 xsm:gap-x-2 lg:gap-x-4 justify-center xsm:mt-4 lg:mt-0 flex-wrap">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/dry.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                dry{' '}
                <span className="text-gray-800 font-semibold">products</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
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
                src="/images/fresh.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center lg:p-0 xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                fresh{''}
                <span className="text-gray-800 font-semibold px-1">
                  products
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
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
                src="/images/frozen.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                frozen{' '}
                <span className="text-gray-800 font-semibold">products</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.breads);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="xsm:w-5/6 lg:w-1/2 lg:pl-10 xsm:order-1 lg:order-none">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className=" xsm:text-2xl lg:text-3xl w-3/4 text-gray-600 font-light">
              {CountryText[countrySelected].headerPart1}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart2}
              </span>
            </p>
            <p className="mt-4 xsm:w-full lg:w-3/4 xsm:text-xs font-light lg:text-sm text-gray-600 leading-relaxed">
              {CountryText[countrySelected].text}
            </p>
          </div>
        </div>
        <div className="flex xsm:flex-col lg:flex-row xsm:mt-10 lg:mt-20 items-center">
          <div className="xsm:w-full lg:w-1/2 text-left pl-10">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className="xsm:text-2xl lg:text-3xl w-3/4 text-gray-600 font-light">
              {CountryText[countrySelected].headerPart3}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart4}
              </span>
            </p>
            <p className="mt-4 w-3/4 xsm:text-xs lg:text-sm font-light text-gray-600 leading-relaxed">
              {CountryText[countrySelected].text2}
            </p>
          </div>
          <div className="xsm:w-full lg:w-1/2 flex flex-row p-1 gap-x-4 justify-center xsm:mt-4 lg:mt-0">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/alcoholFree.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 xsm:text-sm whitespace-nowrap lg:text-sm mt-4 font-extralight">
                alcohol{' '}
                <span className="text-gray-800 font-semibold">free</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
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
                src="/images/wineChampagne.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                wine
                <span className="text-gray-800 font-semibold pl-1">
                  &amp; champagne
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
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
                src="/images/spirits.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                original{' '}
                <span className="text-gray-800 font-semibold">spirits</span>
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
        <div className="flex xsm:flex-col lg:flex-row mt-20 items-center">
          <div className="xsm:w-full xsm:order-2 lg:order-none lg:w-1/2 flex flex-row p-1  xsm:gap-x-2 lg:gap-x-4 justify-center xsm:mt-4 lg:mt-0 flex-wrap">
            <div className="w-1/4"></div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/spices.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                fresh{' '}
                <span className="text-gray-800 font-semibold">spices</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
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
                src="/images/herbs.png"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center lg:p-0 xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                fresh{''}
                <span className="text-gray-800 font-semibold px-1">herbs</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 items
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.vegetables);
                  setTriggerModal(!triggerModal);
                }}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="xsm:w-5/6 lg:w-1/2 lg:pl-10 xsm:order-1 lg:order-none">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className=" xsm:text-2xl lg:text-3xl w-3/4 text-gray-600 font-light">
              {CountryText[countrySelected].headerPart5}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart6}
              </span>
            </p>
            <p className="mt-4 xsm:w-full lg:w-3/4 xsm:text-xs font-light lg:text-sm text-gray-600 leading-relaxed">
              {CountryText[countrySelected].text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
