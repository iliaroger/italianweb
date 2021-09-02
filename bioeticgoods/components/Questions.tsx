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
          description="Questions fréquemment posées"
          text="Dans cette section, vous trouverez les réponses aux questions fréquemment posées concernant nos produits, nos fournisseurs ou d'autres sujets généraux."
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
                          Puis-je voir la liste actuelle de vos produits?
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
                          Bien sûr ! Tous nos produits sont présentés dans la
                          section "Nos produits", où vous pouvez vous
                          familiariser avec eux avec eux de manière plus
                          détaillée.
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
                          Dans quelles régions êtes-vous représentés?
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
                          Pour l'instant, nous travaillons exclusivement dans
                          l'UE, la Suisse et l'EAEU.
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
                          Comment puis-je vous contacter?
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
                          Vous pouvez remplir le formulaire dans la section
                          "Contact", écrire à notre courrier ou appeler le
                          numéro de téléphone indiqué ici.
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
                          Que dois-je faire si je souhaite recevoir rapidement
                          des informations sur votre entreprise?
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
                          Dans ce cas, vous pouvez vous abonner à la newsletter
                          dans la colonne ci-dessous ou nous interroger sur
                          votre sujet spécifique par courrier électronique.
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
                          Dans quel délai ma demande sera-t-elle traitée ?
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
                          Notre service clientèle vous contactera dans un délai
                          de 1 à 3 jours ouvrables par courrier électronique.
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
