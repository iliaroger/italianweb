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
    subheader: 'Frisch von unseren schweizer Lieferanten',
    headerPart1: '220+ ',
    headerPart2: 'vielfältige produkte',
    headerPart3: '115+ ',
    headerPart4: 'alkoholfreie getränke, wein & champagner, spirituosen',
    headerPart5: '115+ ',
    headerPart6: 'gewürze and kräuter',
    text: 'Probieren Sie unser Sortiment aus, das von trockenen Lebensmitteln, frischem Gemüse und Obst bis hin zu Tiefkühlprodukten wie Fisch und Eis reicht. Wir werten den Katalog unserer Lieferanten jeden Monat aus, um unseren Kunden ein immer neues Erlebnis zu garantieren. ',
    text2:
      'Jeden Monat kommen neue Marken und neue Getränke auf die Weltbühne. Um nicht den Überblick zu verlieren, welches Getränk auf dem Vormarsch ist, evaluieren wir zusammen mit unseren Lieferanten den nächsten Katalog von Produkten, die unseren Kunden sicher gefallen werden.',
    text3:
      'Angesichts des sich ständig verändernden Weltmarkts gewährleisten wir die schnellstmögliche Lieferung sensibler Produkte wie Gewürze und Kräuter. Indem wir direkt bei den Herstellern bestellen, senken wir nicht nur die Kosten für unsere Kunden, sondern stellen auch sicher, dass das Produkt rechtzeitig ankommt.',
  },
  it: {
    subheader: 'Frisch von unseren italienischen Lieferanten',
    headerPart1: '320+ ',
    headerPart2: 'vielfältige produkte',
    headerPart3: '80+ ',
    headerPart4: 'alkoholfreie getränke, wein & champagner, spirituosen',
    headerPart5: '115+ ',
    headerPart6: 'gewürze and kräuter',
    text: 'Probieren Sie unser Sortiment aus, das von trockenen Lebensmitteln, frischem Gemüse und Obst bis hin zu Tiefkühlprodukten wie Fisch und Eis reicht. Wir werten den Katalog unserer Lieferanten jeden Monat aus, um unseren Kunden ein immer neues Erlebnis zu garantieren. ',
    text2:
      'Jeden Monat kommen neue Marken und neue Getränke auf die Weltbühne. Um nicht den Überblick zu verlieren, welches Getränk auf dem Vormarsch ist, evaluieren wir zusammen mit unseren Lieferanten den nächsten Katalog von Produkten, die unseren Kunden sicher gefallen werden.',
    text3:
      'Angesichts des sich ständig verändernden Weltmarkts gewährleisten wir die schnellstmögliche Lieferung sensibler Produkte wie Gewürze und Kräuter. Indem wir direkt bei den Herstellern bestellen, senken wir nicht nur die Kosten für unsere Kunden, sondern stellen auch sicher, dass das Produkt rechtzeitig ankommt.',
  },
  fr: {
    subheader: 'Frisch von unseren französischen Lieferanten',
    headerPart1: '190+ ',
    headerPart2: 'vielfältige produkte',
    headerPart3: '340+ ',
    headerPart4: 'alkoholfreie getränke, wein & champagner, spirituosen',
    headerPart5: '115+ ',
    headerPart6: 'gewürze and kräuter',
    text: 'Probieren Sie unser Sortiment aus, das von trockenen Lebensmitteln, frischem Gemüse und Obst bis hin zu Tiefkühlprodukten wie Fisch und Eis reicht. Wir werten den Katalog unserer Lieferanten jeden Monat aus, um unseren Kunden ein immer neues Erlebnis zu garantieren. ',
    text2:
      'Jeden Monat kommen neue Marken und neue Getränke auf die Weltbühne. Um nicht den Überblick zu verlieren, welches Getränk auf dem Vormarsch ist, evaluieren wir zusammen mit unseren Lieferanten den nächsten Katalog von Produkten, die unseren Kunden sicher gefallen werden.',
    text3:
      'Angesichts des sich ständig verändernden Weltmarkts gewährleisten wir die schnellstmögliche Lieferung sensibler Produkte wie Gewürze und Kräuter. Indem wir direkt bei den Herstellern bestellen, senken wir nicht nur die Kosten für unsere Kunden, sondern stellen auch sicher, dass das Produkt rechtzeitig ankommt.',
  },
  de: {
    subheader: 'Frisch von unseren deutschen Lieferanten',
    headerPart1: '190+ ',
    headerPart2: 'vielfältige produkte',
    headerPart3: '340+ ',
    headerPart4: 'alkoholfreie getränke, wein & champagner, spirituosen',
    headerPart5: '115+ ',
    headerPart6: 'gewürze and kräuter',
    text: 'Probieren Sie unser Sortiment aus, das von trockenen Lebensmitteln, frischem Gemüse und Obst bis hin zu Tiefkühlprodukten wie Fisch und Eis reicht. Wir werten den Katalog unserer Lieferanten jeden Monat aus, um unseren Kunden ein immer neues Erlebnis zu garantieren. ',
    text2:
      'Jeden Monat kommen neue Marken und neue Getränke auf die Weltbühne. Um nicht den Überblick zu verlieren, welches Getränk auf dem Vormarsch ist, evaluieren wir zusammen mit unseren Lieferanten den nächsten Katalog von Produkten, die unseren Kunden sicher gefallen werden.',
    text3:
      'Angesichts des sich ständig verändernden Weltmarkts gewährleisten wir die schnellstmögliche Lieferung sensibler Produkte wie Gewürze und Kräuter. Indem wir direkt bei den Herstellern bestellen, senken wir nicht nur die Kosten für unsere Kunden, sondern stellen auch sicher, dass das Produkt rechtzeitig ankommt.',
  },
  by: {
    subheader: 'Frisch von unseren belarussischen Lieferanten',
    headerPart1: '190+ ',
    headerPart2: 'vielfältige produkte',
    headerPart3: '340+ ',
    headerPart4: 'alkoholfreie getränke, wein & champagner, spirituosen',
    headerPart5: '115+ ',
    headerPart6: 'gewürze and kräuter',
    text: 'Probieren Sie unser Sortiment aus, das von trockenen Lebensmitteln, frischem Gemüse und Obst bis hin zu Tiefkühlprodukten wie Fisch und Eis reicht. Wir werten den Katalog unserer Lieferanten jeden Monat aus, um unseren Kunden ein immer neues Erlebnis zu garantieren. ',
    text2:
      'Jeden Monat kommen neue Marken und neue Getränke auf die Weltbühne. Um nicht den Überblick zu verlieren, welches Getränk auf dem Vormarsch ist, evaluieren wir zusammen mit unseren Lieferanten den nächsten Katalog von Produkten, die unseren Kunden sicher gefallen werden.',
    text3:
      'Angesichts des sich ständig verändernden Weltmarkts gewährleisten wir die schnellstmögliche Lieferung sensibler Produkte wie Gewürze und Kräuter. Indem wir direkt bei den Herstellern bestellen, senken wir nicht nur die Kosten für unsere Kunden, sondern stellen auch sicher, dass das Produkt rechtzeitig ankommt.',
  },
};

const ModalInfo = {
  ch: {
    dry: {
      header: 'Wir haben die besten Trockenprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    fresh: {
      header: 'Wir haben die frischesten Produkte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    frozen: {
      header: 'Wir haben die besten Tiefkühlprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    alcoholFree: {
      header: 'Wir haben die besten alkoholfreien Gertränke',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    wineChamp: {
      header: 'Wir haben die beste Auswahl an Wein und Champagner',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spirits: {
      header: 'Wir haben das beste Sortiment an Spirituosen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spices: {
      header: 'Wir haben die beste Auswahl an Gewürzen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    herbs: {
      header: 'Wir haben die beste Auswahl an Kräutern',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
  },
  it: {
    dry: {
      header: 'Wir haben die besten Trockenprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    fresh: {
      header: 'Wir haben die frischesten Produkte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    frozen: {
      header: 'Wir haben die besten Tiefkühlprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    alcoholFree: {
      header: 'Wir haben die besten alkoholfreien Gertränke',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    wineChamp: {
      header: 'Wir haben die beste Auswahl an Wein und Champagner',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spirits: {
      header: 'Wir haben das beste Sortiment an Spirituosen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spices: {
      header: 'Wir haben die beste Auswahl an Gewürzen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    herbs: {
      header: 'Wir haben die beste Auswahl an Kräutern',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
  },
  fr: {
    dry: {
      header: 'Wir haben die besten Trockenprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    fresh: {
      header: 'Wir haben die frischesten Produkte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    frozen: {
      header: 'Wir haben die besten Tiefkühlprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    alcoholFree: {
      header: 'Wir haben die besten alkoholfreien Gertränke',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    wineChamp: {
      header: 'Wir haben die beste Auswahl an Wein und Champagner',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spirits: {
      header: 'Wir haben das beste Sortiment an Spirituosen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spices: {
      header: 'Wir haben die beste Auswahl an Gewürzen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    herbs: {
      header: 'Wir haben die beste Auswahl an Kräutern',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
  },
  de: {
    dry: {
      header: 'Wir haben die besten Trockenprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    fresh: {
      header: 'Wir haben die frischesten Produkte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    frozen: {
      header: 'Wir haben die besten Tiefkühlprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    alcoholFree: {
      header: 'Wir haben die besten alkoholfreien Gertränke',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    wineChamp: {
      header: 'Wir haben die beste Auswahl an Wein und Champagner',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spirits: {
      header: 'Wir haben das beste Sortiment an Spirituosen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spices: {
      header: 'Wir haben die beste Auswahl an Gewürzen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    herbs: {
      header: 'Wir haben die beste Auswahl an Kräutern',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
  },
  by: {
    dry: {
      header: 'Wir haben die besten Trockenprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    fresh: {
      header: 'Wir haben die frischesten Produkte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    frozen: {
      header: 'Wir haben die besten Tiefkühlprodukte',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    alcoholFree: {
      header: 'Wir haben die besten alkoholfreien Gertränke',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    wineChamp: {
      header: 'Wir haben die beste Auswahl an Wein und Champagner',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spirits: {
      header: 'Wir haben das beste Sortiment an Spirituosen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    spices: {
      header: 'Wir haben die beste Auswahl an Gewürzen',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
    },
    herbs: {
      header: 'Wir haben die beste Auswahl an Kräutern',
      text: 'Kontaktieren Sie uns, um den Produktkatalog zu erhalten.',
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
          description="unsere Produkte im Detail"
          text="In diesem Abschnitt können Sie mehr über unsere Produkte erfahren: ihr Aussehen, ihren Geschmack und die Eigenschaften, aufgrund derer die Kunden sie auswählen."
        ></Header>
        <div className="mt-8">
          <h3 className="text-center xsm:text-sm lg:text-base font-medium text-gray-800">
            Lieferanten Region wechseln
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
                trocken{' '}
                <span className="text-gray-800 font-semibold">produkte</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.dry);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                frische
                {''}
                <span className="text-gray-800 font-semibold px-1">
                  produkte
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                tiefkühl{' '}
                <span className="text-gray-800 font-semibold">produkte</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.frozen);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                alkoholfreie{' '}
                <span className="text-gray-800 font-semibold">getränke</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.alcoholFree);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                wein
                <span className="text-gray-800 font-semibold pl-1">
                  &amp; champagner
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.wineChamp);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                vielfältige{' '}
                <span className="text-gray-800 font-semibold">spirituosen</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 artikel
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spirits);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                frische{' '}
                <span className="text-gray-800 font-semibold">gewürze</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spices);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
                frische
                {''}
                <span className="text-gray-800 font-semibold px-1">
                  kräuter
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 artikel
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.herbs);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
