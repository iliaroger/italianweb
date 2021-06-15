import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Header from '../components/Header';

export default function Questions() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-20" id="fragen">
        <Header
          description="Frequently asked questions"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
        modi at quae. A, labore. A, voluptatem mollitia nostrum dolores sunt
        odit asperiores. Impedit, pariatur."
        ></Header>
        <div className="w-full flex flex-col mt-10">
          <div className="w-full xl:px-4">
            <div className="w-full max-w-3xl xl:p-2 mx-auto xl:mt-0 xsm:mt-4">
              <div className="mt-0 bg-white">
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
                          Who are suppliers and how is QA managed?
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
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur, vero similique aperiam quo
                          deserunt sapiente dolorem natus sequi voluptate
                          perferendis.
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
                          Can I have a list of your current products?
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
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Iusto iure fuga aliquam accusantium omnis
                          voluptates reprehenderit nobis, veniam, doloribus non
                          ratione facere, minus odit illo nihil modi voluptatum
                          atque unde!
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
                          How fast is the shippment and will fronzen products
                          arrive on time?
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
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Iusto iure fuga aliquam accusantium omnis
                          voluptates reprehenderit nobis, veniam, doloribus non
                          ratione facere, minus odit illo nihil modi voluptatum
                          atque unde!
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
                          Are you operating in Asia and the South Pacific
                          region?
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
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Iusto iure fuga aliquam accusantium omnis
                          voluptates reprehenderit nobis, veniam, doloribus non
                          ratione facere, minus odit illo nihil modi voluptatum
                          atque unde!
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
                          Can customs delay an order or is it properly handled?
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
                        <p className="text-sm text-gray-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Iusto iure fuga aliquam accusantium omnis
                          voluptates reprehenderit nobis, veniam, doloribus non
                          ratione facere, minus odit illo nihil modi voluptatum
                          atque unde!
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
