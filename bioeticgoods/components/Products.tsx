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
    subheader: 'Свежие продукты от наших швейцарских поставщиков',
    headerPart1: '220+ ',
    headerPart2: 'разнообразные продукты питания',
    headerPart3: '115+ ',
    headerPart4: 'без алкоголя, вино и шампанское, спиртные напитки',
    headerPart5: '115+ ',
    headerPart6: 'приправы и травы',
    text: 'Попробуйте наш ассортимент, который варьируется от сухих продуктов, свежих овощей и фруктов до замороженных товаров, таких как рыба и мороженое. Мы ежемесячно оцениваем каталог наших поставщиков, чтобы гарантировать нашим клиентам постоянно меняющийся опыт.',
    text2:
      'Новые бренды и новые напитки выходят на мировую арену ежемесячно. Для того чтобы не упустить из виду, какой напиток или напиток находится на пике популярности, мы вместе с нашими поставщиками составляем очередной каталог продуктов, которые обязательно понравятся нашим клиентам.',
    text3:
      'В условиях постоянно меняющегося мирового рынка мы обеспечиваем максимально быструю доставку таких важных продуктов, как специи и травы. Заказывая напрямую у самих производителей, мы не только снижаем стоимость для наших клиентов, но и гарантируем, что продукт будет доставлен вовремя.',
  },
  it: {
    subheader: 'Свежие продукты от наших итальянских поставщиков',
    headerPart1: '320+ ',
    headerPart2: 'разнообразные продукты питания',
    headerPart3: '80+ ',
    headerPart4: 'без алкоголя, вино и шампанское, спиртные напитки',
    headerPart5: '115+ ',
    headerPart6: 'приправы и травы',
    text: 'Попробуйте наш ассортимент, который варьируется от сухих продуктов, свежих овощей и фруктов до замороженных товаров, таких как рыба и мороженое. Мы ежемесячно оцениваем каталог наших поставщиков, чтобы гарантировать нашим клиентам постоянно меняющийся опыт.',
    text2:
      'Новые бренды и новые напитки выходят на мировую арену ежемесячно. Для того чтобы не упустить из виду, какой напиток или напиток находится на пике популярности, мы вместе с нашими поставщиками составляем очередной каталог продуктов, которые обязательно понравятся нашим клиентам.',
    text3:
      'В условиях постоянно меняющегося мирового рынка мы обеспечиваем максимально быструю доставку таких важных продуктов, как специи и травы. Заказывая напрямую у самих производителей, мы не только снижаем стоимость для наших клиентов, но и гарантируем, что продукт будет доставлен вовремя.',
  },
  fr: {
    subheader: 'Свежие от наших французских поставщиков',
    headerPart1: '190+ ',
    headerPart2: 'разнообразные продукты питания',
    headerPart3: '340+ ',
    headerPart4: 'без алкоголя, вино и шампанское, спиртные напитки',
    headerPart5: '115+ ',
    headerPart6: 'приправы и травы',
    text: 'Попробуйте наш ассортимент, который варьируется от сухих продуктов, свежих овощей и фруктов до замороженных товаров, таких как рыба и мороженое. Мы ежемесячно оцениваем каталог наших поставщиков, чтобы гарантировать нашим клиентам постоянно меняющийся опыт.',
    text2:
      'Новые бренды и новые напитки выходят на мировую арену ежемесячно. Для того чтобы не упустить из виду, какой напиток или напиток находится на пике популярности, мы вместе с нашими поставщиками составляем очередной каталог продуктов, которые обязательно понравятся нашим клиентам.',
    text3:
      'В условиях постоянно меняющегося мирового рынка мы обеспечиваем максимально быструю доставку таких важных продуктов, как специи и травы. Заказывая напрямую у самих производителей, мы не только снижаем стоимость для наших клиентов, но и гарантируем, что продукт будет доставлен вовремя.',
  },
  de: {
    subheader: 'Свежие от наших немецких поставщиков',
    headerPart1: '190+ ',
    headerPart2: 'разнообразные продукты питания',
    headerPart3: '340+ ',
    headerPart4: 'без алкоголя, вино и шампанское, спиртные напитки',
    headerPart5: '115+ ',
    headerPart6: 'приправы и травы',
    text: 'Попробуйте наш ассортимент, который варьируется от сухих продуктов, свежих овощей и фруктов до замороженных товаров, таких как рыба и мороженое. Мы ежемесячно оцениваем каталог наших поставщиков, чтобы гарантировать нашим клиентам постоянно меняющийся опыт.',
    text2:
      'Новые бренды и новые напитки выходят на мировую арену ежемесячно. Для того чтобы не упустить из виду, какой напиток или напиток находится на пике популярности, мы вместе с нашими поставщиками составляем очередной каталог продуктов, которые обязательно понравятся нашим клиентам.',
    text3:
      'В условиях постоянно меняющегося мирового рынка мы обеспечиваем максимально быструю доставку таких важных продуктов, как специи и травы. Заказывая напрямую у самих производителей, мы не только снижаем стоимость для наших клиентов, но и гарантируем, что продукт будет доставлен вовремя.',
  },
  by: {
    subheader: 'Свежие от наших белорусских поставщиков',
    headerPart1: '190+ ',
    headerPart2: 'разнообразные продукты питания',
    headerPart3: '340+ ',
    headerPart4: 'без алкоголя, вино и шампанское, спиртные напитки',
    headerPart5: '115+ ',
    headerPart6: 'приправы и травы',
    text: 'Попробуйте наш ассортимент, который варьируется от сухих продуктов, свежих овощей и фруктов до замороженных товаров, таких как рыба и мороженое. Мы ежемесячно оцениваем каталог наших поставщиков, чтобы гарантировать нашим клиентам постоянно меняющийся опыт.',
    text2:
      'Новые бренды и новые напитки выходят на мировую арену ежемесячно. Для того чтобы не упустить из виду, какой напиток или напиток находится на пике популярности, мы вместе с нашими поставщиками составляем очередной каталог продуктов, которые обязательно понравятся нашим клиентам.',
    text3:
      'В условиях постоянно меняющегося мирового рынка мы обеспечиваем максимально быструю доставку таких важных продуктов, как специи и травы. Заказывая напрямую у самих производителей, мы не только снижаем стоимость для наших клиентов, но и гарантируем, что продукт будет доставлен вовремя.',
  },
};

const ModalInfo = {
  ch: {
    dry: {
      header: 'Мы предлагаем лучшие сухие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    fresh: {
      header: 'Мы предлагаем лучшие свежие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    frozen: {
      header: 'Мы предлагаем лучшие замороженные продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    alcoholFree: {
      header: 'У нас есть лучшие безалкогольные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    wineChamp: {
      header: 'У нас есть лучшее вино и шампанское',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spirits: {
      header: 'У нас самые лучшие оригинальные спиртные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spices: {
      header: 'У нас самые лучшие приправы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    herbs: {
      header: 'У нас есть лучшие травы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
  },
  it: {
    dry: {
      header: 'Мы предлагаем лучшие сухие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    fresh: {
      header: 'Мы предлагаем лучшие свежие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    frozen: {
      header: 'Мы предлагаем лучшие замороженные продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    alcoholFree: {
      header: 'У нас есть лучшие безалкогольные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    wineChamp: {
      header: 'У нас есть лучшее вино и шампанское',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spirits: {
      header: 'У нас самые лучшие оригинальные спиртные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spices: {
      header: 'У нас самые лучшие приправы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    herbs: {
      header: 'У нас есть лучшие травы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
  },
  fr: {
    dry: {
      header: 'Мы предлагаем лучшие сухие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    fresh: {
      header: 'Мы предлагаем лучшие свежие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    frozen: {
      header: 'Мы предлагаем лучшие замороженные продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    alcoholFree: {
      header: 'У нас есть лучшие безалкогольные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    wineChamp: {
      header: 'У нас есть лучшее вино и шампанское',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spirits: {
      header: 'У нас самые лучшие оригинальные спиртные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spices: {
      header: 'У нас самые лучшие приправы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    herbs: {
      header: 'У нас есть лучшие травы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
  },
  de: {
    dry: {
      header: 'Мы предлагаем лучшие сухие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    fresh: {
      header: 'Мы предлагаем лучшие свежие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    frozen: {
      header: 'Мы предлагаем лучшие замороженные продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    alcoholFree: {
      header: 'У нас есть лучшие безалкогольные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    wineChamp: {
      header: 'У нас есть лучшее вино и шампанское',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spirits: {
      header: 'У нас самые лучшие оригинальные спиртные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spices: {
      header: 'У нас самые лучшие приправы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    herbs: {
      header: 'У нас есть лучшие травы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
  },
  by: {
    dry: {
      header: 'Мы предлагаем лучшие сухие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    fresh: {
      header: 'Мы предлагаем лучшие свежие продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    frozen: {
      header: 'Мы предлагаем лучшие замороженные продукты',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    alcoholFree: {
      header: 'У нас есть лучшие безалкогольные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    wineChamp: {
      header: 'У нас есть лучшее вино и шампанское',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spirits: {
      header: 'У нас самые лучшие оригинальные спиртные напитки',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    spices: {
      header: 'У нас самые лучшие приправы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
    herbs: {
      header: 'У нас есть лучшие травы',
      text: 'Свяжитесь с нами, чтобы получить каталог продукции.',
    },
  },
};

enum SelectionModal {
  dry = 'dry',
  fresh = 'fresh',
  frozen = 'frozen',
  alcoholFree = 'alcoholFree',
  wineChamp = 'wineChamp',
  spirits = 'spirits',
  spices = 'spices',
  herbs = 'herbs',
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
        alt="twig"
      ></img>
      <img
        className="absolute right-0 lg:top-1/4 transform translate-x-1 z-10 lg:block xsm:hidden"
        src="/images/aboutTwig2.png"
        alt="twig"
      ></img>
      <img
        className="absolute right-0 lg:top-3/4 transform translate-x-1 z-10 lg:block xsm:hidden"
        src="/images/aboutTwig2.png"
        alt="twig"
      ></img>
      <div className="max-w-6xl mx-auto py-20">
        <Header
          description="Наши продукты в деталях"
          text="В этом разделе вы можете узнать больше о наших продуктах: их внешний вид, вкус и характеристики, за которые их выбирают потребители."
        ></Header>
        <div className="mt-8">
          <h3 className="text-center xsm:text-sm lg:text-base font-medium text-gray-800">
            Изменить регион поставщиков
          </h3>
          <hr className="w-10 mx-auto mt-1"></hr>
          <div className="flex flex-row justify-center mt-2 gap-x-2">
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'ch' ? 'saturate-100' : 'grayscale'
              }  cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.swiss)}
              src="/images/swiss.png"
              alt="swiss"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'it' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.italy)}
              src="/images/italy.png"
              alt="italy"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'fr' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.france)}
              src="/images/france.png"
              alt="france"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'de' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.germany)}
              src="/images/germany.png"
              alt="germany"
            ></img>
            <img
              className={`w-8 h-6 self-center filter select-none ${
                countrySelected === 'by' ? 'saturate-100' : 'grayscale'
              } cursor-pointer`}
              onClick={() => setCountrySelected(CountrySelected.belarus)}
              src="/images/belarus.png"
              alt="belarus"
            ></img>
          </div>
        </div>
        <div className="flex xsm:flex-col lg:flex-row mt-10 items-center">
          <div className="xsm:w-full xsm:order-2 lg:order-none lg:w-1/2 flex flex-row p-1 xsm:gap-x-2 lg:gap-x-4 justify-center xsm:mt-4 lg:mt-0 flex-wrap">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/dry.png"
                alt="dry products"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                сухие{' '}
                <span className="text-gray-800 font-semibold">продукты</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.dry);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше{' '}
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/fresh.png"
                alt="fresh products"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center lg:p-0 xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                свежие
                {''}
                <span className="text-gray-800 font-semibold px-1">
                  продукты
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/frozen.png"
                alt="frozen products"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                замороженные <br></br>
                <span className="text-gray-800 font-semibold">продукты</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.frozen);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
          <div className="xsm:w-full lg:w-1/2 text-right pr-10">
            <p className="uppercase text-xs text-gray-600 tracking-widest">
              {CountryText[countrySelected].subheader}
            </p>
            <p className="xsm:text-2xl w-3/4 float-right lg:text-3xl text-gray-600 font-light">
              {CountryText[countrySelected].headerPart3}
              <span className="text-gray-800 font-semibold">
                {CountryText[countrySelected].headerPart4}
              </span>
            </p>
            <p className="mt-4 xsm:text-xs w-3/4 float-right lg:text-sm font-light text-gray-600 leading-relaxed">
              {CountryText[countrySelected].text2}
            </p>
          </div>
          <div className="xsm:w-full lg:w-1/2 flex flex-row p-1 gap-x-4 justify-center xsm:mt-4 lg:mt-0">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/alcoholFree.png"
                alt="alcohol free drinks"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center text-gray-600 xsm:text-sm whitespace-nowrap lg:text-sm mt-4 font-extralight">
                без{' '}
                <span className="text-gray-800 font-semibold">алкоголя</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.alcoholFree);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/wineChampagne.png"
                alt="wine and champagne"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                вино
                <span className="text-gray-800 font-semibold pl-1">
                  &amp; <br></br> шампанское
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.wineChamp);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/spirits.png"
                alt="spirits"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                оригинальные <br></br>
                <span className="text-gray-800 font-semibold">напитки</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 товаров
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spirits);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
                alt="spices"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                свежие{' '}
                <span className="text-gray-800 font-semibold">приправы</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spices);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
              </button>
            </div>
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/herbs.png"
                alt="herbs"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center lg:p-0 xsm:text-sm lg:text-sm whitespace-nowrap text-gray-600 mt-4 font-extralight">
                свежие
                {''}
                <span className="text-gray-800 font-semibold px-1">травы</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 товаров
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.herbs);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
