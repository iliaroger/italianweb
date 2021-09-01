import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

// english
const languages = [
  {
    name: 'English',
    description: 'Change language to english',
    href: 'https://bioeticgoods.com',
    icon: '/images/united.png',
  },
  {
    name: 'Italiano',
    description: 'Cambia lingua in italiano',
    href: 'https://it.bioeticgoods.com',
    icon: '/images/italy.png',
  },
  {
    name: 'Pусский',
    description: 'Сменить язык на русский',
    href: 'https://ru.bioeticgoods.com',
    icon: '/images/russia.png',
  },
  {
    name: 'Deutsch',
    description: 'Sprache zu deutsch ändern',
    href: 'https://de.bioeticgoods.com',
    icon: '/images/germany.png',
  },
  {
    name: 'Français',
    description: 'Changer la langue en français',
    href: 'https://fr.bioeticgoods.com',
    icon: '/images/france.png',
  },
];

export default function LanguageSelector() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                 text-gray-600 hover:text-gray-800 bg-orange-700 px-3 py-2 rounded-md inline-flex items-center transition duration-150 text-base font-medium hover:text-opacity-100 focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <img
              className="w-4 mr-1 select-none"
              src="/images/germany.png"
              alt="united kingdom"
            ></img>
            <span className="font-light md:text-xs lg:text-base select-none">
              Deutsch
            </span>
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 select-none`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-2/3 left-1/2 sm:px-0 lg:max-w-1xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-2 lg:grid-cols-2">
                  {languages.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img className="w-8" src={`${item.icon}`} alt="icon" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="md:text-xs lg:text-sm font-light text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
