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
      header: 'Importazione da EAEU a EU/CH',
      text: 'Ci occupiamo dell importazione, della vendita all ingrosso e della promozione dei prodotti dei produttori EAEU sui mercati europei e svizzeri. Creiamo partenariati, forniamo supporto normativo e procedurale, logistico e di marketing per i prodotti e per tutte le attività commerciali fino al consumatore finale. I produttori ci utilizzano per distribuire i loro marchi in modo efficace e semplice.',
    },
    fresh: {
      header: 'Fresco dai nostri fornitori',
      text: 'Ci prendiamo cura dei nostri clienti. Tutti i prodotti sono conformi a tutti gli standard necessari e sono accuratamente controllati. Lavoriamo con le migliori società di logistica in modo che i tuoi ordini ti arrivino nel miglior modo possibile!',
    },
    organic: {
      header: 'Esclusività al 100%',
      text: 'Tutti i nostri prodotti sono venduti solo da noi. Abbiamo contratti di fornitura esclusiva con tutti i nostri produttori. Così, ci preoccupiamo della qualità e possiamo garantirla!',
    },
    quality: {
      header: 'Qualità premium',
      text: 'Tutto ciò che mettiamo sugli scaffali del nostro negozio è di qualità eccezionale. Concludiamo contratti solo con i migliori produttori. Ci creda sulla parola o provi lei stesso!',
    },
    natural: {
      header: 'I migliori ingredienti',
      text: 'Tutti i nostri prodotti sono fatti non solo da professionisti nel loro campo, ma anche dai migliori ingredienti. Farina o formaggio, verdura o frutta - tutto ciò che troverete nella composizione vi delizierà con il suo gusto e la sua qualità.',
    },
    euea: {
      header: 'Importazione da EU/CH a EAEU',
      text: 'Ci occupiamo dell importazione, della vendita all ingrosso e della promozione di prodotti di produttori svizzeri ed europei sul mercato dell EAEU. Creiamo partnership, forniamo supporto normativo e procedurale, logistico e di marketing per i prodotti e per tutte le attività commerciali fino al consumatore finale. I produttori ci utilizzano per distribuire i loro marchi in modo efficace e semplice.',
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
          description="Per saperne di più su di noi"
          text="Siamo impegnati in attività di esportazione-importazione e ci occupiamo di far conoscere al mondo i prodotti tradizionali di ogni paese. Forniamo prodotti alimentari alle imprese commerciali di tutte le categorie (GDO, Retail, settore Ho.Re.Ca.)."
        ></Header>
        <div className="flex flex-row flex-wrap mt-12">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 transform lg:translate-y-24">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage1.png"
              alt="point1"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Fresco di{' '}
              <span className="font-semibold text-gray-800">
                i nostri fornitori
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Selezioniamo i migliori fornitori di tutte le regioni per
              garantire un alto standard per tutti i nostri prodotti.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
              <span className="font-semibold text-gray-800">esclusività</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
                 I nostri prodotti sono selezionati da un pool di fornitori
              esclusivi e rinomati fornitori dell'Europa e dell'EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
              <span className="font-semibold text-gray-800">qualità</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Controlliamo costantemente i nostri fornitori e aggiorniamo la
              selezione dei nostri merci per garantire una qualità superiore.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
              Il migliore{' '}
              <span className="font-semibold text-gray-800">ingredienti</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              I nostri prodotti a marchio naturale al 100% sono prodotti in
              condizioni rigorose ed esaminati dal nostro team di garanzia della
              qualità all'arrivo.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.natural);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-10">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 self-center transform xl:-translate-x-20">
            <div className="flex flex-row justify-center">
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/eaeu.png"
                alt="eaeu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/eu.png"
                alt="eu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/swiss.png"
                alt="swiss"
              ></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Importazione da{' '}
              <span className="font-semibold text-gray-800">EAEU a UE/CH</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Importiamo i nostri beni e prodotti dall'EAEU all'UE/CH.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
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
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/eu.png"
                alt="eu"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/swiss.png"
                alt="swiss"
              ></img>
              <img
                className="xsm:w-1/3 sm:w-1/3 lg:w-1/3 p-1"
                src="/images/eaeu.png"
                alt="eaeu"
              ></img>
            </div>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Importazione da{' '}
              <span className="font-semibold text-gray-800">UE/CH a EAEU</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Importiamo i nostri beni e prodotti dall'UE/CH all'EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.euea);
                  setTriggerModal(!triggerModal);
                }}
              >
                Leggi tutto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
