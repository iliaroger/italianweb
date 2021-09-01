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
      header: 'Import aus EAEU nach EU/CH',
      text: 'Wir befassen uns mit dem Import, dem Grosshandel und der Promotion von Produkten der EAEU-Hersteller auf den europäischen und schweizerischen Märkten. Wir schaffen Partnerschaften, bieten regulatorische und verfahrenstechnische, logistische und Marketing-Unterstützung für Produkte und für alle Geschäftsaktivitäten bis hin zum Endverbraucher. Die Hersteller nutzen uns, um ihre Marken effektiv und einfach zu vertreiben.',
    },
    fresh: {
      header: 'Frisch von unseren Lieferanten',
      text: 'Wir kümmern uns um unsere Kunden. Alle Produkte entsprechen allen erforderlichen Normen und werden sorgfältig geprüft. Wir arbeiten mit den besten Logistikunternehmen zusammen, damit Ihre Bestellungen auf die bestmögliche Art und Weise zu Ihnen gelangen!',
    },
    organic: {
      header: '100% Exklusivität',
      text: 'Alle unsere Produkte werden nur von uns verkauft. Wir haben exklusive Lieferverträge mit allen unseren Herstellern. Daher achten wir auf die Qualität und können Ihnen diese garantieren!',
    },
    quality: {
      header: 'Premium Qualität',
      text: 'Alles was wir in unsere Regale stellen, ist von außergewöhnlicher Qualität. Wir schließen nur mit den besten Herstellern Verträge ab. Nehmen Sie uns beim Wort oder probieren Sie es einfach aus!',
    },
    natural: {
      header: 'Die besten Zutaten',
      text: 'Alle unsere Produkte werden nur von Fachleuten hergestellt, die sich in ihrem Fachgebiet super auskennen, als auch für die Produktion die besten Zutaten verwenden. Mehl oder Käse, Gemüse oder Obst - alles, was Sie in der Komposition finden, wird Sie überzeugen.',
    },
    euea: {
      header: 'Import aus EU/CH nach EAEU',
      text: 'Wir befassen uns mit dem Import, dem Grosshandel und der Promotion von Produkten schweizerischer und europäischer Hersteller für den EAEU-Markt. Wir schaffen Partnerschaften, bieten regulatorische und verfahrenstechnische, logistische und Marketing-Unterstützung für Produkte und für alle Geschäftsaktivitäten bis hin zum Endverbraucher. Die Hersteller nutzen uns, um ihre Marken effektiv und einfach zu vertreiben.',
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
              Frisch von{' '}
              <span className="font-semibold text-gray-800">
                unseren Lieferanten
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Wir wählen die besten Lieferanten aus allen Regionen aus, um einen
              hohen Standard für alle unsere Produkte zu gewährleisten.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
              <span className="font-semibold text-gray-800">Exklusivität</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
                 Unsere Waren werden aus einem Pool von exklusiven und
              renommierten Lieferanten aus Europa und der EAEU ausgewählt.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
              <span className="font-semibold text-gray-800">Qualität</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Wir überprüfen ständig unsere Lieferanten und aktualisieren die
              Auswahl unserer Waren, um höchste Qualität zu gewährleisten.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
              Die besten{' '}
              <span className="font-semibold text-gray-800">Zutaten</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Unsere 100% naturbelassenen Waren werden unter strengen
              Bedingungen hergestellt und bei der Ankunft von unserem Team
              überprüft.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.natural);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
              Import aus{' '}
              <span className="font-semibold text-gray-800">
                EAEU nach EU/CH
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Wir importieren unsere Waren und Produkte aus der EAEU nach EU/CH.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
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
              Import aus{' '}
              <span className="font-semibold text-gray-800">
                EU/CH nach EAEU
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Wir importieren unsere Waren und Produkte aus der EU/CH in die
              EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.euea);
                  setTriggerModal(!triggerModal);
                }}
              >
                Mehr lesen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
