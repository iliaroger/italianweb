import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Header from '../components/Header';

export default function Questions() {
  return (
    <>
      <div className="transform -translate-y-20" id="questions"></div>
      <div className="max-w-6xl mx-auto py-20">
        <Header
          description="Часто задаваемые вопросы"
          text="В этом разделе вы можете найти ответы на часто задаваемые вопросы, касающиеся нашей продукции, поставщиков или других общих тем."
        ></Header>
        <div className="w-full flex flex-col mt-10">
          <div className="w-full xl:px-4">
            <div className="w-full max-w-3xl xl:p-2 mx-auto xl:mt-0 xsm:mt-4 xsm:px-8 lg:px-0">
              <div className="mt-0 bg-white">
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-md outline-none">
                      <Disclosure.Button className="flex justify-between w-full px-4 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span
                          className={
                            open
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm  transform'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm  transform'
                          }
                        >
                          Могу ли я ознакомиться с текущим списком вашей
                          продукции?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open
                              ? 'transform rotate-180 text-mainGreen self-center'
                              : ''
                          } w-5 h-5 xl:flex xsm:hidden text-gray-400 self-center`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-600">
                          Конечно! Вся наша продукция представлена в разделе
                          "Наши Продукция", где вы можете ознакомиться с ними
                          более подробно.
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4 bg-white">
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-md outline-none">
                      <Disclosure.Button className="flex justify-between w-full px-4 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span
                          className={
                            open
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm'
                          }
                        >
                          В каких регионах вы представлены?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open
                              ? 'transform rotate-180 text-mainGreen self-center'
                              : ''
                          } w-5 h-5 xl:flex xsm:hidden text-gray-400 self-center`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-600">
                          В настоящее время мы работаем исключительно в странах
                          ЕС, Швейцарии и ЕАЭС.
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4 bg-white">
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-md outline-none">
                      <Disclosure.Button className="flex justify-between w-full px-4 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span
                          className={
                            open
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm'
                          }
                        >
                          Как я могу связаться с вами?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open
                              ? 'transform rotate-180 text-mainGreen self-center'
                              : ''
                          } w-5 h-5 xl:flex xsm:hidden text-gray-400 self-center`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-600">
                          Вы можете заполнить форму в разделе "Контакты",
                          написать на нашу почту или позвонить по телефону,
                          указанному там.
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4 bg-white">
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-md outline-none">
                      <Disclosure.Button className="flex justify-between w-full px-4 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span
                          className={
                            open
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm'
                          }
                        >
                          Что мне делать, если я хочу оперативно получать
                          информацию о вашей компании?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open
                              ? 'transform rotate-180 text-mainGreen self-center'
                              : ''
                          } w-5 h-5 xl:flex xsm:hidden text-gray-400 self-center`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-600">
                          В этом случае вы можете подписаться на информационный
                          бюллетень в колонке ниже или задать нам вопрос по
                          вашей конкретной теме по электронной почте.
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
              <div className="mt-4 bg-white">
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-md outline-none">
                      <Disclosure.Button className="flex justify-between w-full px-4 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span
                          className={
                            open
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm'
                          }
                        >
                          Как быстро будет обработан мой запрос?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open
                              ? 'transform rotate-180 text-mainGreen self-center'
                              : ''
                          } w-5 h-5 xl:flex xsm:hidden text-gray-400 self-center`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-600">
                          Наша служба поддержки свяжется с вами в течение 1-3
                          рабочих дней по электронной почте.
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
