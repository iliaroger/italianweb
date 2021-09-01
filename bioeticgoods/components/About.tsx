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
      header: 'Импорт из EAEU в EU/CH',
      text: 'Мы занимаемся импортом, оптовой торговлей и продвижением продукции производителей из ЕАЭС на европейский и швейцарский рынки. Мы создаем партнерские отношения, обеспечиваем нормативно-процедурную, логистическую и маркетинговую поддержку продукции и всей коммерческой деятельности вплоть до конечного потребителя. Производители используют нас для эффективного и простого распространения своих брендов.',
    },
    fresh: {
      header: 'Свежее от наших поставщиков',
      text: 'Мы заботимся о наших клиентах. Вся продукция соответствует всем необходимым стандартам и проходит тщательную проверку. Мы работаем с лучшими логистическими компаниями, чтобы ваши заказы доставлялись к вам в наилучшем виде!',
    },
    organic: {
      header: '100% эксклюзивность',
      text: 'Все наши товары продаются только у нас. Со всеми производителями у нас заключены эксклюзивные контракты на поставку. Таким образом, мы заботимся о качестве и можем его гарантировать!',
    },
    quality: {
      header: 'Премиальное качество',
      text: 'Все, что мы выставляем на полки наших магазинов, отличается исключительным качеством. Мы заключаем контракты только с лучшими производителями. Поверьте нам на слово или просто попробуйте сами!',
    },
    natural: {
      header: 'Лучшие ингредиенты',
      text: 'Все наши продукты изготавливаются не только профессионалами в своей области, но и из лучших ингредиентов. Мука или сыр, овощи или фрукты - все, что вы найдете в составе, порадует вас своим вкусом и качеством.',
    },
    euea: {
      header: 'Импорт из  EU/CH в EAEU',
      text: 'Мы занимаемся импортом, оптовой продажей и продвижением продукции швейцарских и европейских производителей на рынок ЕАЭС. Мы создаем партнерские отношения, обеспечиваем нормативно-процедурную, логистическую и маркетинговую поддержку продукции и всей коммерческой деятельности вплоть до конечного потребителя. Производители используют нас для эффективного и простого распространения своих брендов.',
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
          description="узнайте больше о нас "
          text="Мы занимаемся экспортно-импортной деятельностью и заботимся о том, чтобы традиционные продукты каждой страны были известны всему миру. Мы поставляем продукты питания коммерческим предприятиям всех категорий (крупная розничная торговля, розничная торговля, сектор Ho.Re.Ca.)."
        ></Header>
        <div className="flex flex-row flex-wrap mt-12">
          <div className="lg:w-1/4 xsm:w-2/4 p-2 transform lg:translate-y-24">
            <img
              className="xsm:w-1/3 sm:w-20 lg:w-1/3 mx-auto"
              src="/images/aboutImage1.png"
              alt="point1"
            ></img>
            <p className="text-center mt-4 text-gray-600 font-light xsm:text-sm lg:text-base">
              Свежее от{' '}
              <span className="font-semibold text-gray-800">
                наших поставщиков
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Мы выбираем лучших поставщиков из всех регионов, чтобы обеспечить
              высокий стандарт всей нашей продукции.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.fresh);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
              <span className="font-semibold text-gray-800">
                эксклюзивность
              </span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
                 Наши товары отбираются из пула эксклюзивных и известных
              поставщиков из Европы и ЕАЭС.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.organic);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
              Премиальное{' '}
              <span className="font-semibold text-gray-800">качество</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Мы постоянно проводим аудит наших поставщиков и обновляем
              ассортимент товаров, чтобы обеспечить высокое качество.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.quality);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
              Лучшие{' '}
              <span className="font-semibold text-gray-800"> ингредиенты</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Наши товары с маркировкой 100% натуральности производятся в
              строгих условиях и проверяются нашей командой контроля качества по
              прибытии.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.natural);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
              Импорт из{' '}
              <span className="font-semibold text-gray-800">EAEU в EU/CH</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Мы импортируем наши товары и продукты из EAEU в EU/CH.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.eaeu);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
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
              Импорт из{' '}
              <span className="font-semibold text-gray-800">EU/CH в EAEU</span>
            </p>
            <p className="text-center xsm:w-full sm:w-3/4 lg:w-full mx-auto font-light xsm:text-xs lg:text-sm mt-2 text-gray-600">
              Мы импортируем наши товары и продукты из EU/CH в EAEU.
            </p>
            <div className="text-center mt-4">
              <button
                className="bg-white px-4 py-2 rounded-xl text-gray-400 text-xs tracking-wider shadow-sm uppercase focus:outline-none hover:text-mainGreen transition duration-300"
                onClick={() => {
                  setCurrentModal(SelectionModal.euea);
                  setTriggerModal(!triggerModal);
                }}
              >
                Читать дальше
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
