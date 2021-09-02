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
    subheader: 'Frais de nos fournisseurs suisses',
    headerPart1: '220+ ',
    headerPart2: 'des produits alimentaires variés',
    headerPart3: '115+ ',
    headerPart4: 'sans alcool, vin et champagne, spiritueux',
    headerPart5: '115+ ',
    headerPart6: 'épices et herbes',
    text: 'Essayez notre sortiment qui va des aliments secs, légumes et fruits frais aux produits surgelés comme le poisson et la glace. Nous évaluons le catalogue de nos fournisseurs tous les mois afin de garantir à nos clients une expérience toujours renouvelée.',
    text2:
      'De nouvelles marques et de nouvelles boissons apparaissent chaque mois sur la scène mondiale. Afin de ne pas perdre le fil de la boisson ou du breuvage à la mode, nous évaluons avec nos fournisseurs le prochain catalogue de produits que nos clients apprécieront certainement.',
    text3: `Avec l'évolution constante du marché mondial, nous assurons la livraison la plus rapide de produits sensibles comme les épices et les herbes. En commandant directement auprès des producteurs eux-mêmes, nous réduisons non seulement le coût pour nos clients mais nous garantissons également que le produit arrivera à temps.`,
  },
  it: {
    subheader: 'Frais de nos fournisseurs italiens',
    headerPart1: '320+ ',
    headerPart2: 'des produits alimentaires variés',
    headerPart3: '80+ ',
    headerPart4: 'sans alcool, vin et champagne, spiritueux',
    headerPart5: '115+ ',
    headerPart6: 'épices et herbes',
    text: 'Essayez notre sortiment qui va des aliments secs, légumes et fruits frais aux produits surgelés comme le poisson et la glace. Nous évaluons le catalogue de nos fournisseurs tous les mois afin de garantir à nos clients une expérience toujours renouvelée.',
    text2:
      'De nouvelles marques et de nouvelles boissons apparaissent chaque mois sur la scène mondiale. Afin de ne pas perdre le fil de la boisson ou du breuvage à la mode, nous évaluons avec nos fournisseurs le prochain catalogue de produits que nos clients apprécieront certainement.',
    text3: `Avec l'évolution constante du marché mondial, nous assurons la livraison la plus rapide de produits sensibles comme les épices et les herbes. En commandant directement auprès des producteurs eux-mêmes, nous réduisons non seulement le coût pour nos clients mais nous garantissons également que le produit arrivera à temps.`,
  },
  fr: {
    subheader: 'Frais de nos fournisseurs français',
    headerPart1: '190+ ',
    headerPart2: 'des produits alimentaires variés',
    headerPart3: '340+ ',
    headerPart4: 'sans alcool, vin et champagne, spiritueux',
    headerPart5: '115+ ',
    headerPart6: 'épices et herbes',
    text: 'Essayez notre sortiment qui va des aliments secs, légumes et fruits frais aux produits surgelés comme le poisson et la glace. Nous évaluons le catalogue de nos fournisseurs tous les mois afin de garantir à nos clients une expérience toujours renouvelée.',
    text2:
      'De nouvelles marques et de nouvelles boissons apparaissent chaque mois sur la scène mondiale. Afin de ne pas perdre le fil de la boisson ou du breuvage à la mode, nous évaluons avec nos fournisseurs le prochain catalogue de produits que nos clients apprécieront certainement.',
    text3: `Avec l'évolution constante du marché mondial, nous assurons la livraison la plus rapide de produits sensibles comme les épices et les herbes. En commandant directement auprès des producteurs eux-mêmes, nous réduisons non seulement le coût pour nos clients mais nous garantissons également que le produit arrivera à temps.`,
  },
  de: {
    subheader: 'Frais de nos fournisseurs allemands',
    headerPart1: '190+ ',
    headerPart2: 'des produits alimentaires variés',
    headerPart3: '340+ ',
    headerPart4: 'sans alcool, vin et champagne, spiritueux',
    headerPart5: '115+ ',
    headerPart6: 'épices et herbes',
    text: 'Essayez notre sortiment qui va des aliments secs, légumes et fruits frais aux produits surgelés comme le poisson et la glace. Nous évaluons le catalogue de nos fournisseurs tous les mois afin de garantir à nos clients une expérience toujours renouvelée.',
    text2:
      'De nouvelles marques et de nouvelles boissons apparaissent chaque mois sur la scène mondiale. Afin de ne pas perdre le fil de la boisson ou du breuvage à la mode, nous évaluons avec nos fournisseurs le prochain catalogue de produits que nos clients apprécieront certainement.',
    text3: `Avec l'évolution constante du marché mondial, nous assurons la livraison la plus rapide de produits sensibles comme les épices et les herbes. En commandant directement auprès des producteurs eux-mêmes, nous réduisons non seulement le coût pour nos clients mais nous garantissons également que le produit arrivera à temps.`,
  },
  by: {
    subheader: 'Frais de nos fournisseurs biélorusses',
    headerPart1: '190+ ',
    headerPart2: 'des produits alimentaires variés',
    headerPart3: '340+ ',
    headerPart4: 'sans alcool, vin et champagne, spiritueux',
    headerPart5: '115+ ',
    headerPart6: 'épices et herbes',
    text: 'Essayez notre sortiment qui va des aliments secs, légumes et fruits frais aux produits surgelés comme le poisson et la glace. Nous évaluons le catalogue de nos fournisseurs tous les mois afin de garantir à nos clients une expérience toujours renouvelée.',
    text2:
      'De nouvelles marques et de nouvelles boissons apparaissent chaque mois sur la scène mondiale. Afin de ne pas perdre le fil de la boisson ou du breuvage à la mode, nous évaluons avec nos fournisseurs le prochain catalogue de produits que nos clients apprécieront certainement.',
    text3: `Avec l'évolution constante du marché mondial, nous assurons la livraison la plus rapide de produits sensibles comme les épices et les herbes. En commandant directement auprès des producteurs eux-mêmes, nous réduisons non seulement le coût pour nos clients mais nous garantissons également que le produit arrivera à temps.`,
  },
};

const ModalInfo = {
  ch: {
    dry: {
      header: 'Nous avons les meilleurs produits secs disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    fresh: {
      header: 'Nous avons les meilleurs produits frais disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    frozen: {
      header: 'Nous avons les meilleurs produits congelés disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    alcoholFree: {
      header: 'Nous avons les meilleures boissons sans alcool disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    wineChamp: {
      header: 'Nous avons le meilleur vin et le meilleur champagne disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spirits: {
      header: 'Nous avons les meilleurs spiritueux originaux disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spices: {
      header: 'Nous avons les meilleures épices disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    herbs: {
      header: 'Nous avons les meilleures herbes disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
  },
  it: {
    dry: {
      header: 'Nous avons les meilleurs produits secs disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    fresh: {
      header: 'Nous avons les meilleurs produits frais disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    frozen: {
      header: 'Nous avons les meilleurs produits congelés disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    alcoholFree: {
      header: 'Nous avons les meilleures boissons sans alcool disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    wineChamp: {
      header: 'Nous avons le meilleur vin et le meilleur champagne disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spirits: {
      header: 'Nous avons les meilleurs spiritueux originaux disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spices: {
      header: 'Nous avons les meilleures épices disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    herbs: {
      header: 'Nous avons les meilleures herbes disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
  },
  fr: {
    dry: {
      header: 'Nous avons les meilleurs produits secs disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    fresh: {
      header: 'Nous avons les meilleurs produits frais disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    frozen: {
      header: 'Nous avons les meilleurs produits congelés disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    alcoholFree: {
      header: 'Nous avons les meilleures boissons sans alcool disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    wineChamp: {
      header: 'Nous avons le meilleur vin et le meilleur champagne disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spirits: {
      header: 'Nous avons les meilleurs spiritueux originaux disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spices: {
      header: 'Nous avons les meilleures épices disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    herbs: {
      header: 'Nous avons les meilleures herbes disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
  },
  de: {
    dry: {
      header: 'Nous avons les meilleurs produits secs disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    fresh: {
      header: 'Nous avons les meilleurs produits frais disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    frozen: {
      header: 'Nous avons les meilleurs produits congelés disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    alcoholFree: {
      header: 'Nous avons les meilleures boissons sans alcool disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    wineChamp: {
      header: 'Nous avons le meilleur vin et le meilleur champagne disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spirits: {
      header: 'Nous avons les meilleurs spiritueux originaux disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spices: {
      header: 'Nous avons les meilleures épices disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    herbs: {
      header: 'Nous avons les meilleures herbes disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
  },
  by: {
    dry: {
      header: 'Nous avons les meilleurs produits secs disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    fresh: {
      header: 'Nous avons les meilleurs produits frais disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    frozen: {
      header: 'Nous avons les meilleurs produits congelés disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    alcoholFree: {
      header: 'Nous avons les meilleures boissons sans alcool disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    wineChamp: {
      header: 'Nous avons le meilleur vin et le meilleur champagne disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spirits: {
      header: 'Nous avons les meilleurs spiritueux originaux disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    spices: {
      header: 'Nous avons les meilleures épices disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
    },
    herbs: {
      header: 'Nous avons les meilleures herbes disponibles',
      text: 'Contactez-nous pour recevoir le catalogue des produits.',
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
          description="nos produits en détail"
          text="Dans cette section, vous pouvez en savoir plus sur nos produits : leur apparence, leur goût et les caractéristiques pour lesquelles les consommateurs les choisissent."
        ></Header>
        <div className="mt-8">
          <h3 className="text-center xsm:text-sm lg:text-base font-medium text-gray-800">
            Changement de région fournisseur
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
        <div className="flex xsm:flex-col lg:flex-row mt-10 articles-center">
          <div className="xsm:w-full xsm:order-2 lg:order-none lg:w-1/2 flex flex-row p-1 xsm:gap-x-2 lg:gap-x-4 justify-center xsm:mt-4 lg:mt-0 flex-wrap">
            <div className="w-1/4 bg-white rounded border border-mainGreen transition duration-300 hover:border hover:border-mainGreen overflow-hidden hover:shadow-xl h-full">
              <img
                className="mx-auto w-20 mt-4 mb-4 select-none"
                src="/images/dry.png"
                alt="dry products"
              ></img>
              <hr className="mx-auto w-1/4 mt-2"></hr>
              <p className="text-center xsm:text-sm lg:text-sm text-gray-600 whitespace-nowrap mt-4 font-extralight">
                produits{' '}
                <span className="text-gray-800 font-semibold">secs</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.dry);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
                produits
                {''}
                <span className="text-gray-800 font-semibold px-1">frais</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
                produits
                <span className="text-gray-800 font-semibold">congelés</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.frozen);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
        <div className="flex xsm:flex-col lg:flex-row xsm:mt-10 lg:mt-20 articles-center">
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
                sans <span className="text-gray-800 font-semibold">alcool</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.alcoholFree);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
                vin
                <span className="text-gray-800 font-semibold pl-1">
                  &amp; champagne
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.wineChamp);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
                esprits
                <span className="text-gray-800 font-semibold">originaux</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                20 articles
              </p>
              <button
                className="px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spirits);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
              </button>
            </div>
          </div>
        </div>
        <div className="flex xsm:flex-col lg:flex-row mt-20 articles-center">
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
                épices{' '}
                <span className="text-gray-800 font-semibold">fraîches</span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                50 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.spices);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
                herbes
                {''}
                <span className="text-gray-800 font-semibold px-1">
                  fraîches
                </span>
              </p>
              <p className="mt-1 text-center font-light text-xs text-mainGreen italic">
                32 articles
              </p>
              <button
                className="xsm:px-2 lg:px-4 py-2 w-full border mt-4 border-mainGreen  bg-mainGreen text-white text-xs tracking-wider uppercase focus:outline-none select-none"
                onClick={() => {
                  setCurrentModal(SelectionModal.herbs);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
