import React from 'react';
import Image from 'next/image';
import { ClipboardListIcon, MailIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Hero() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item2 = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="transform -translate-y-20" id="start"></div>
      <div className="flex lg:flex-row lg:max-w-5xl items-center mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="lg:w-1/2 xsm:w-full xsm:pl-8 xsm:py-6 sm:py-0 lg:py-0 md:pl-20"
        >
          <p className="font-extralight xsm:text-xl lg:text-3xl text-gray-600">
            Добро пожаловать в
          </p>
          <h1 className="font-bold xsm:text-4xl lg:text-6xl text-gray-800 mt-1">
            Bio Etic Goods
          </h1>
          <p className="font-medium xsm:text-lg lg:text-xl text-mainGreen mt-1">
            Ознакомление с традициями
          </p>
          <p className="font-light w-3/4 xsm:text-sm lg:text-base text-gray-600 mt-8">
            Мы выступаем в качестве брокера и дистрибьютора в секторе продуктов
            питания и напитков. Мы специализируемся на сухих, свежих и
            замороженных продуктах, вине и спиртных напитках, специях и травах.
          </p>
          <div className="mt-4">
            <button
              className="lg:px-8 lg:py-3 xsm:px-8 xsm:py-3 sm:px-4 sm:py-2 text-lg font-light text-white bg-mainGreen rounded select-none focus:outline-none hover:opacity-80 transition duration-300"
              onClick={(e: any) => {
                e.preventDefault();
                window.location.href = '#about';
              }}
            >
              <div className="flex flex-row items-center">
                <ClipboardListIcon className="xsm:w-4 lg:w-5"></ClipboardListIcon>
                <p className="ml-1 xsm:text-sm lg:text-base">О Нас</p>
              </div>
            </button>
            <button
              className="lg:px-8 lg:py-3 xsm:px-8 xsm:py-3 sm:px-4 sm:py-2 text-lg font-light border border-gray-300 text-gray-400 bg-white rounded ml-4 select-none focus:outline-none hover:text-mainGreen hover:border-mainGreen transition duration-300"
              onClick={(e: any) => {
                e.preventDefault();
                window.location.href = '#contact';
              }}
            >
              <div className="flex flex-row items-center">
                <MailIcon className="xsm:w-4 lg:w-5"></MailIcon>
                <p className="ml-1 xsm:text-sm lg:text-base">Контакт</p>
              </div>
            </button>
          </div>
          <div className="mt-8">
            <p className="text-gray-600 font-light text-sm">
              Мы работаем в следующих регионах:
            </p>
            <div className="flex flex-row mt-1">
              <img
                className="w-10  border border-white ml-1 select-none"
                src="/images/swiss.png"
                alt="swiss"
              ></img>
              <img
                className="w-10 border border-white ml-1 select-none"
                src="/images/eu.png"
                alt="eu"
              ></img>
              <img
                className="w-10 border ml-1 select-none"
                src="/images/eaeu.png"
                alt="eaeu"
              ></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 relative xsm:hidden sm:block lg:block"
        >
          <img
            className="opacity-0"
            src="/images/flagtable.png"
            alt="italian, swiss and belarus flag"
          ></img>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
            }}
            className="absolute top-0"
            src="/images/flagtable.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/tableItem1.png"
          ></motion.img>
          <motion.img
            variants={item2}
            className="absolute top-0"
            src="/images/tableItem2.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/tableItem3.png"
          ></motion.img>
          <motion.img
            variants={item2}
            className="absolute top-0"
            src="/images/tableItem4.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/tableItem5.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/tableItem6.png"
          ></motion.img>
        </motion.div>
      </div>
    </>
  );
}
