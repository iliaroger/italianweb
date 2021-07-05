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
          description="Frequently asked questions"
          text="In this section you can find answers to frequently asked questions regarding our products, suppliers or other general topics."
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
                              ? 'text-left font-light text-mainGreen py-6 px-2 xl:text-base xsm:text-sm'
                              : 'text-left font-light text-gray-600 py-6 px-2 xl:text-base xsm:text-sm'
                          }
                        >
                          Can I see the current listing of your products?
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
                          Sure! All our products are presented in the "Our
                          Products" section, where you can familiarize yourself
                          with them in more detail.
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
                          In which regions are you represented?
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
                          At the moment we work exclusively in the EU/Swiss and
                          the EAEU.
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
                          How can I contact you?
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
                          You can fill out the form in the "Contact" section,
                          write to our mail or call the phone number indicated
                          there.
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
                          What should I do if I want to promptly receive
                          information about your company?
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
                          In this case, you can subscribe to the newsletter in
                          the column below or ask us about your specific topic
                          via email.
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
                          How fast will my inquiry be processed?
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
                          Our customer support will contact you within 1-3
                          business days via email.
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
