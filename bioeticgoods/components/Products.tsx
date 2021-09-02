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
    subheader: 'Fresco dai nostri fornitori svizzeri',
    headerPart1: '220+ ',
    headerPart2: 'prodotti alimentari diversi',
    headerPart3: '115+ ',
    headerPart4: 'senza alcol, vino e champagne, liquori',
    headerPart5: '115+ ',
    headerPart6: 'spezie ed erbe',
    text: 'Provate il nostro assortimento che spazia dagli alimenti secchi, verdura e frutta fresca ai surgelati come il pesce e i gelati. Valutiamo il catalogo dei nostri fornitori ogni mese per garantire ai nostri clienti un esperienza sempre diversa.',
    text2:
      'Nuovi marchi e nuove bevande si affacciano ogni mese sulla scena mondiale. Per non perdere la traccia di quale bevanda o bevanda sia in ascesa, valutiamo insieme ai nostri fornitori il prossimo catalogo di prodotti che i nostri clienti apprezzeranno sicuramente.',
    text3:
      'Con il mercato mondiale in continua evoluzione garantiamo la consegna più rapida di prodotti sensibili come le spezie e le erbe. Ordinando direttamente dai produttori stessi, riduciamo non solo il costo per i nostri clienti, ma ci assicuriamo anche che il prodotto arrivi in tempo.',
  },
  it: {
    subheader: 'Fresco dai nostri fornitori italiani',
    headerPart1: '320+ ',
    headerPart2: 'prodotti alimentari diversi',
    headerPart3: '80+ ',
    headerPart4: 'senza alcol, vino e champagne, liquori',
    headerPart5: '115+ ',
    headerPart6: 'spezie ed erbe',
    text: 'Provate il nostro assortimento che spazia dagli alimenti secchi, verdura e frutta fresca ai surgelati come il pesce e i gelati. Valutiamo il catalogo dei nostri fornitori ogni mese per garantire ai nostri clienti un esperienza sempre diversa.',
    text2:
      'Nuovi marchi e nuove bevande si affacciano ogni mese sulla scena mondiale. Per non perdere la traccia di quale bevanda o bevanda sia in ascesa, valutiamo insieme ai nostri fornitori il prossimo catalogo di prodotti che i nostri clienti apprezzeranno sicuramente.',
    text3:
      'Con il mercato mondiale in continua evoluzione garantiamo la consegna più rapida di prodotti sensibili come le spezie e le erbe. Ordinando direttamente dai produttori stessi, riduciamo non solo il costo per i nostri clienti, ma ci assicuriamo anche che il prodotto arrivi in tempo.',
  },
  fr: {
    subheader: 'Fresco dai nostri fornitori francesi',
    headerPart1: '190+ ',
    headerPart2: 'prodotti alimentari diversi',
    headerPart3: '340+ ',
    headerPart4: 'senza alcol, vino e champagne, liquori',
    headerPart5: '115+ ',
    headerPart6: 'spezie ed erbe',
    text: 'Provate il nostro assortimento che spazia dagli alimenti secchi, verdura e frutta fresca ai surgelati come il pesce e i gelati. Valutiamo il catalogo dei nostri fornitori ogni mese per garantire ai nostri clienti un esperienza sempre diversa.',
    text2:
      'Nuovi marchi e nuove bevande si affacciano ogni mese sulla scena mondiale. Per non perdere la traccia di quale bevanda o bevanda sia in ascesa, valutiamo insieme ai nostri fornitori il prossimo catalogo di prodotti che i nostri clienti apprezzeranno sicuramente.',
    text3:
      'Con il mercato mondiale in continua evoluzione garantiamo la consegna più rapida di prodotti sensibili come le spezie e le erbe. Ordinando direttamente dai produttori stessi, riduciamo non solo il costo per i nostri clienti, ma ci assicuriamo anche che il prodotto arrivi in tempo.',
  },
  de: {
    subheader: 'Fresco dai nostri fornitori tedeschi',
    headerPart1: '190+ ',
    headerPart2: 'prodotti alimentari diversi',
    headerPart3: '340+ ',
    headerPart4: 'senza alcol, vino e champagne, liquori',
    headerPart5: '115+ ',
    headerPart6: 'spezie ed erbe',
    text: 'Provate il nostro assortimento che spazia dagli alimenti secchi, verdura e frutta fresca ai surgelati come il pesce e i gelati. Valutiamo il catalogo dei nostri fornitori ogni mese per garantire ai nostri clienti un esperienza sempre diversa.',
    text2:
      'Nuovi marchi e nuove bevande si affacciano ogni mese sulla scena mondiale. Per non perdere la traccia di quale bevanda o bevanda sia in ascesa, valutiamo insieme ai nostri fornitori il prossimo catalogo di prodotti che i nostri clienti apprezzeranno sicuramente.',
    text3:
      'Con il mercato mondiale in continua evoluzione garantiamo la consegna più rapida di prodotti sensibili come le spezie e le erbe. Ordinando direttamente dai produttori stessi, riduciamo non solo il costo per i nostri clienti, ma ci assicuriamo anche che il prodotto arrivi in tempo.',
  },
  by: {
    subheader: 'Fresco dai nostri fornitori bielorussi',
    headerPart1: '190+ ',
    headerPart2: 'prodotti alimentari diversi',
    headerPart3: '340+ ',
    headerPart4: 'senza alcol, vino e champagne, liquori',
    headerPart5: '115+ ',
    headerPart6: 'spezie ed erbe',
    text: 'Provate il nostro assortimento che spazia dagli alimenti secchi, verdura e frutta fresca ai surgelati come il pesce e i gelati. Valutiamo il catalogo dei nostri fornitori ogni mese per garantire ai nostri clienti un esperienza sempre diversa.',
    text2:
      'Nuovi marchi e nuove bevande si affacciano ogni mese sulla scena mondiale. Per non perdere la traccia di quale bevanda o bevanda sia in ascesa, valutiamo insieme ai nostri fornitori il prossimo catalogo di prodotti che i nostri clienti apprezzeranno sicuramente.',
    text3:
      'Con il mercato mondiale in continua evoluzione garantiamo la consegna più rapida di prodotti sensibili come le spezie e le erbe. Ordinando direttamente dai produttori stessi, riduciamo non solo il costo per i nostri clienti, ma ci assicuriamo anche che il prodotto arrivi in tempo.',
  },
};

const ModalInfo = {
  ch: {
    dry: {
      header: 'Abbiamo i migliori prodotti secchi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    fresh: {
      header: 'Abbiamo i migliori prodotti freschi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    frozen: {
      header: 'Abbiamo i migliori prodotti congelati disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    alcoholFree: {
      header: 'Abbiamo le migliori bevande senza alcol disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    wineChamp: {
      header: 'Abbiamo il miglior vino e champagne disponibile',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spirits: {
      header: 'Abbiamo i migliori distillati originali disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spices: {
      header: 'Abbiamo le migliori spezie disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    herbs: {
      header: 'Abbiamo le migliori erbe disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
  },
  it: {
    dry: {
      header: 'Abbiamo i migliori prodotti secchi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    fresh: {
      header: 'Abbiamo i migliori prodotti freschi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    frozen: {
      header: 'Abbiamo i migliori prodotti congelati disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    alcoholFree: {
      header: 'Abbiamo le migliori bevande senza alcol disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    wineChamp: {
      header: 'Abbiamo il miglior vino e champagne disponibile',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spirits: {
      header: 'Abbiamo i migliori distillati originali disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spices: {
      header: 'Abbiamo le migliori spezie disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    herbs: {
      header: 'Abbiamo le migliori erbe disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
  },
  fr: {
    dry: {
      header: 'Abbiamo i migliori prodotti secchi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    fresh: {
      header: 'Abbiamo i migliori prodotti freschi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    frozen: {
      header: 'Abbiamo i migliori prodotti congelati disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    alcoholFree: {
      header: 'Abbiamo le migliori bevande senza alcol disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    wineChamp: {
      header: 'Abbiamo il miglior vino e champagne disponibile',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spirits: {
      header: 'Abbiamo i migliori distillati originali disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spices: {
      header: 'Abbiamo le migliori spezie disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    herbs: {
      header: 'Abbiamo le migliori erbe disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
  },
  de: {
    dry: {
      header: 'Abbiamo i migliori prodotti secchi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    fresh: {
      header: 'Abbiamo i migliori prodotti freschi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    frozen: {
      header: 'Abbiamo i migliori prodotti congelati disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    alcoholFree: {
      header: 'Abbiamo le migliori bevande senza alcol disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    wineChamp: {
      header: 'Abbiamo il miglior vino e champagne disponibile',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spirits: {
      header: 'Abbiamo i migliori distillati originali disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spices: {
      header: 'Abbiamo le migliori spezie disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    herbs: {
      header: 'Abbiamo le migliori erbe disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
  },
  by: {
    dry: {
      header: 'Abbiamo i migliori prodotti secchi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    fresh: {
      header: 'Abbiamo i migliori prodotti freschi disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    frozen: {
      header: 'Abbiamo i migliori prodotti congelati disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    alcoholFree: {
      header: 'Abbiamo le migliori bevande senza alcol disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    wineChamp: {
      header: 'Abbiamo il miglior vino e champagne disponibile',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spirits: {
      header: 'Abbiamo i migliori distillati originali disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    spices: {
      header: 'Abbiamo le migliori spezie disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
    },
    herbs: {
      header: 'Abbiamo le migliori erbe disponibili',
      text: 'Contattateci per ricevere il catalogo dei prodotti.',
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
          description="i nostri prodotti in dettaglio"
          text="In questa sezione puoi conoscere meglio i nostri prodotti: il loro aspetto, il loro gusto e le caratteristiche per cui i consumatori li scelgono."
        ></Header>
        <div className="mt-8">
          <h3 className="text-center xsm:text-sm lg:text-base font-medium text-gray-800">
            Cambia la regione del fornitore
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
        <div className="flex xsm:flex-col lg:flex-row mt-10 articoli-center">
          <div className="xsm:w-full xsm:order-2 lg:order-none lg:w-1/2 flex flex-row p-1 xsm:gap-x-2 lg:gap-x-4 justify-center xsm:mt-4 lg:mt-0 flex-wrap">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/dry.png"
                alt="dry products"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                asciutto{' '}
                <span className="text-gray-800 font-semibold">prodotti</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.dry);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                fresco
                {''}
                <span className="text-gray-800 font-semibold px-1">
                  prodotti
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                congelato{' '}
                <span className="text-gray-800 font-semibold">prodotti</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.frozen);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
        <div className="flex xsm:flex-col lg:flex-row xsm:mt-10 lg:mt-20 articoli-center">
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
                senza{' '}
                <span className="text-gray-800 font-semibold">alcool</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.alcoholFree);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                vino
                <span className="text-gray-800 font-semibold pl-1">
                  &amp; champagne
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.wineChamp);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                originale{' '}
                <span className="text-gray-800 font-semibold">liquori</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 articoli
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spirits);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
              </button>
            </div>
          </div>
        </div>
        <div className="flex xsm:flex-col lg:flex-row mt-20 articoli-center">
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
                fresco{' '}
                <span className="text-gray-800 font-semibold">spezie</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spices);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                fresco
                {''}
                <span className="text-gray-800 font-semibold px-1">erbe</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articoli
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.herbs);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
