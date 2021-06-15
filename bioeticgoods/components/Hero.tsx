import React from 'react';
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
    <div id="start">
      <div className="flex flex-row max-w-5xl items-center mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="w-1/2"
        >
          <p className="font-extralight text-3xl text-gray-800">Welcome to</p>
          <h1 className="font-bold text-6xl text-gray-800 mt-1">
            Bio Etic Goods
          </h1>
          <p className="font-medium text-xl text-mainGreen mt-1">
            Acquainted with traditions
          </p>
          <p className="font-light w-3/4 text-gray-600 mt-8">
            Hello and welcome to Bio Etic Goods. We act as a broker and
            distributor in the food and beverage sector. We specialize in frozen
            products, spirits, spices and herbs.
          </p>
          <div className="mt-4">
            <button className="px-8 py-3 text-lg font-light text-white bg-mainGreen rounded select-none">
              <div className="flex flex-row">
                <ClipboardListIcon className="w-5"></ClipboardListIcon>
                <p className="ml-1 text-base">About Us</p>
              </div>
            </button>
            <button className="px-8 py-3 text-lg font-light border border-gray-300 text-gray-400 bg-white rounded ml-4 select-none">
              <div className="flex flex-row">
                <MailIcon className="w-5"></MailIcon>
                <p className="ml-1 text-base">Contact</p>
              </div>
            </button>
          </div>
          <div className="mt-8">
            <p className="text-gray-600 font-light text-sm">
              We operate in the following regions:
            </p>
            <div className="flex flex-row mt-1">
              <img
                className="w-10 border border-white select-none"
                src="/images/united.png"
              ></img>
              <img
                className="w-10  border border-white ml-1 select-none"
                src="/images/swiss.png"
              ></img>
              <img
                className="w-10 border border-white ml-1 select-none"
                src="/images/eu.png"
              ></img>
              <img
                className="w-10 border ml-1 select-none"
                src="/images/eaeu.png"
              ></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          className="w-1/2 relative"
        >
          <img className="opacity-0" src="/images/flagtable.png"></img>
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
            src="/images/foodmid1.png"
          ></motion.img>
          <motion.img
            variants={item2}
            className="absolute top-0"
            src="/images/foodmid2.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/foodmid3.png"
          ></motion.img>
          <motion.img
            variants={item2}
            className="absolute top-0"
            src="/images/doughnut.png"
          ></motion.img>
          <motion.img
            variants={item}
            className="absolute top-0"
            src="/images/beverages1.png"
          ></motion.img>
        </motion.div>
      </div>
    </div>
  );
}
