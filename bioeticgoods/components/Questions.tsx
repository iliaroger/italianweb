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
          description="Domande frequenti"
          text="In questa sezione puoi trovare le risposte alle domande più frequenti sui nostri prodotti, fornitori o altri argomenti generali."
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
                          Posso vedere l'elenco attuale dei vostri prodotti?
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
                          Certo! Tutti i nostri prodotti sono presentati nella
                          sezione "I nostri Prodotti", dove puoi familiarizzare
                          con loro in modo più dettagliato.
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
                          In quali regioni siete rappresentati?
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
                          Al momento lavoriamo esclusivamente nell'UE, Svizzera
                          e EAEU.
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
                          Come posso contattarvi?
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
                          Potete compilare il modulo nella sezione "Contatto",
                          scrivere alla nostra posta o chiamare il numero di
                          telefono indicato lì.
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
                          Cosa devo fare se voglio ricevere prontamente
                          informazioni sulla vostra azienda?
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
                          In questo caso, puoi iscriverti alla newsletter nella
                          nella colonna qui sotto o chiederci il tuo argomento
                          specifico via e-mail.
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
                          In quanto tempo verrà elaborata la mia richiesta?
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
                          Il nostro supporto clienti ti contatterà entro 1-3
                          giorni lavorativi via e-mail.
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
