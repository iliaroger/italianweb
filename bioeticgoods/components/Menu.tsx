import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  MailIcon,
} from '@heroicons/react/outline';
import LanguageSelector from '../components/LanguageSelector';
{
  //TODO: add next js image optimization
}
export default function Menu() {
  return (
    <Popover className="sticky top-0 bg-white border-b border-gray-100 z-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">BioEticGoods</span>
                  <img
                    className="lg:h-8 xsm:h-8 md:h-6 md:w-20 lg:w-auto sm:h-10 select-none"
                    src="/images/beglogo.svg"
                    alt="bio etic goods logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mainGreen">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a
                  href="#start"
                  className="lg:text-base md:text-xs font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                >
                  Start
                </a>
                <a
                  href="#about"
                  className="lg:text-base md:text-xs font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="lg:text-base md:text-xs font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                >
                  Our Products
                </a>
                <a
                  href="#questions"
                  className="lg:text-base md:text-xs font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                >
                  Questions
                </a>
                <a
                  href="#contact"
                  className="lg:text-base md:text-xs font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                >
                  Contact
                </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <LanguageSelector></LanguageSelector>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/images/beglogo.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mainGreen">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex flex-row items-center gap-x-1">
                      <HomeIcon className="w-4 text-gray-600"></HomeIcon>
                      <a
                        href="#start"
                        className="xsm:text-sm font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                      >
                        Start
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-x-1">
                      <UserGroupIcon className="w-4 text-gray-600"></UserGroupIcon>
                      <a
                        href="#about"
                        className="xsm:text-sm font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                      >
                        About Us
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-x-1">
                      <ShoppingBagIcon className="w-4 text-gray-600"></ShoppingBagIcon>
                      <a
                        href="#products"
                        className="xsm:text-sm font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                      >
                        Our Products
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-x-1">
                      <QuestionMarkCircleIcon className="w-4 text-gray-600"></QuestionMarkCircleIcon>
                      <a
                        href="#questions"
                        className="xsm:text-sm font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                      >
                        Questions
                      </a>
                    </div>
                    <div>
                      <div className="flex flex-row items-center gap-x-1">
                        <MailIcon className="w-4 text-gray-600"></MailIcon>
                        <a
                          href="#contact"
                          className="xsm:text-sm font-light text-gray-600 hover:text-gray-800 select-none transition duration-150"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
