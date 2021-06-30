import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { BadgeCheckIcon } from '@heroicons/react/outline';

interface PropTypes {
  trigger: boolean;
  description: string;
  text: string;
}

export default function Modal({ trigger, description, text }: PropTypes) {
  const [modalState, setModalState] = useState<boolean>(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    openModal();
  }, [trigger]);

  return (
    <>
      <Transition appear show={modalState} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-100 bg-opacity-80 transition duration-300"
          onClose={() => closeModal()}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <BadgeCheckIcon className="w-8 mx-auto text-mainGreen"></BadgeCheckIcon>
                <Dialog.Title
                  as="h3"
                  className="xsm:text-base lg:text-lg font-medium leading-6 text-gray-900 text-center mt-1"
                >
                  {description}
                </Dialog.Title>
                <hr className="w-6 mx-auto mt-1"></hr>
                <div className="mt-2">
                  <p className="xsm:text-xs lg:text-sm tracking-normal text-gray-500 text-center">
                    {text}
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xs uppercase font-light text-white bg-mainGreen border border-transparent rounded-md tracking-wider hover:bg-mainGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:opacity-80 transition duration-300 focus-visible:ring-blue-500"
                    onClick={() => setModalState(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
