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
      header: `Importation de l'EAEU vers l'UE/CH`,
      text: `Nous sommes impliqués dans l'importation, la vente en gros et la promotion des produits des fabricants de l'EAEU sur les marchés européens et suisses. Nous créons des partenariats, fournissons un soutien réglementaire et procédural, logistique et marketing pour les produits et pour toutes les activités commerciales jusqu'au consommateur final. Les fabricants font appel à nous pour distribuer leurs marques efficacement et facilement.`,
    },
    fresh: {
      header: 'Frais de nos fournisseurs',
      text: 'Nous prenons soin de nos clients. Tous les produits sont conformes à toutes les normes nécessaires et sont soigneusement contrôlés. Nous travaillons avec les meilleures entreprises de logistique afin que vos commandes vous parviennent de la meilleure façon possible !',
    },
    organic: {
      header: `100% d'exclusivité`,
      text: `Tous nos produits sont vendus uniquement par nous. Nous avons des contrats d'approvisionnement exclusifs avec tous nos fabricants. Nous sommes donc soucieux de la qualité et pouvons la garantir!`,
    },
    quality: {
      header: 'Qualité supérieure',
      text: `Tout ce que nous mettons sur les étagères de nos magasins est d'une qualité exceptionnelle. Nous ne concluons des contrats qu'avec les meilleurs fabricants. Croyez-nous sur parole ou essayez vous-même!`,
    },
    natural: {
      header: 'Les meilleurs ingrédients',
      text: 'Tous nos produits sont fabriqués non seulement par des professionnels dans leur domaine, mais aussi à partir des meilleurs ingrédients. Farine ou fromage, légumes ou fruits - tout ce que vous trouverez dans la composition vous ravira par son goût et sa qualité.',
    },
    euea: {
      header: `Importation de l'UE/CH vers l'EAEU`,
      text: `Nous sommes impliqués dans l'importation, la vente en gros et la promotion de produits de fabricants suisses et européens sur le marché de l'EAEU. Nous créons des partenariats, fournissons un soutien réglementaire et procédural, logistique et marketing pour les produits et pour toutes les activités commerciales jusqu'au consommateur final. Les fabricants font appel à nous pour distribuer leurs marques efficacement et facilement.`,
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
          description="En savoir plus sur nous"
          text="Nous sommes engagés dans des activités d'import-export et nous nous occupons de faire connaître au monde les produits traditionnels de chaque pays. Nous fournissons des produits alimentaires aux entreprises commerciales de toutes catégories (Grande distribution, Retails, secteur Ho.Re.Ca.)."
        ></Header>
        <div className="flex flex-row flex-wrap mt-12">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 transform lg:translate-y-24">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage1.png"
              alt="point1"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Frais de{' '}
              <span className="font-semibold text-gray-800">
                nos fournisseurs
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Nous sélectionnons les meilleurs fournisseurs de toutes les
              régions afin de garantir un niveau élevé pour tous nos produits.
              standard élevé pour tous nos produits.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
              <span className="font-semibold text-gray-800">d'exclusivité</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
                 Nos produits sont sélectionnés parmi un groupe de fournisseurs
              exclusifs et renommés fournisseurs exclusifs et renommés d'Europe
              et de l'EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
              <span className="font-semibold text-gray-800">qualité</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Nous auditons constamment nos fournisseurs et rafraîchissons la
              sélection de nos produits pour garantir une qualité supérieure.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
              Le meilleur{' '}
              <span className="font-semibold text-gray-800">ingrédients</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Nos produits 100 % naturels sont fabriqués dans des conditions
              strictes et examinés par notre équipe d'assurance qualité dès leur
              arrivée.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.natural);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
              Importation de{' '}
              <span className="font-semibold text-gray-800">
                l'EAEU vers l'UE/CH
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Nous importons nos marchandises et produits de l'EAEU vers
              l'UE/CH.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
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
              Importation de{' '}
              <span className="font-semibold text-gray-800">
                {' '}
                l'UE/CH vers l'EAEU
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Nous importons nos marchandises et produits de l'UE/CH vers
              l'EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.euea);
                  setTriggerModal(!triggerModal);
                }}
              >
                Lire la suite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
