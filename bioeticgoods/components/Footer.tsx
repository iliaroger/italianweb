import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
  PaperAirplaneIcon,
  CheckIcon,
} from '@heroicons/react/outline';
import { sendEmail } from '../backend/contact';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  inquiry: string;
  message: string;
  phone: string;
};

export default function Footer() {
  const [messageSend, setMessageSend] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (Object.keys(data)?.length >= 0) {
      sendEmail(
        data.firstName,
        data.lastName,
        data.email,
        data.inquiry,
        data.message,
        data.phone
      );
    }
    reset({
      firstName: '',
      lastName: '',
      email: '',
      inquiry: '',
      message: '',
      phone: '',
    });
    triggerNotification();
  };

  const triggerNotification = () => {
    setMessageSend(true);
    setTimeout(() => {
      setMessageSend(false);
    }, 3000);
  };

  return (
    <>
      <div className="transform -translate-y-20" id="contact"></div>
      <div className="relative py-20">
        <div className="xsm:w-full lg:w-3/4 mx-auto">
          <Header
            description="Contact us to get started"
            text="In this section you can find our contact information, as well as the option to write us a message if you have any questions or if you are interested in cooperation."
          ></Header>
        </div>
        <div className="flex lg:flex-row justify-between xsm:flex-col mt-10 max-w-6xl mx-auto xsm:px-8 xl:px-0">
          <div className="lg:w-1/2 xsm:w-full">
            <h2 className="xl:text-2xl text-gray-800 font-semibold leading-tight xsm:text-xl">
              Business inquiries, questions or general informations. Write us!
            </h2>
            <p className="text-gray-600 mt-4 font-light xl:text-sm xsm:text-sm">
              Specific questions regarding our products or orders can be
              discussed via email or skype. For all other questions contact us
              via email.
            </p>
            <p className="text-gray-800 xl:text-lg self-center font-semibold mt-4 xsm:text-lg">
              Our headquater - London, UK (Shelton Street 71-75)
            </p>
            <img
              className="w-full xl:h-80 object-cover rounded mt-4"
              src="/images/headquarter.jpeg"
              alt="office lugano"
            ></img>
            <p className="text-gray-600 font-light mt-4 xl:text-sm xsm:text-sm">
              Contact us via email or phone. Our business operates under the
              following weekly hours (except holidays): 08:00 - 17:00 (CET)
              monday till friday.
            </p>
            <div className="flex xl:flex-row xsm:flex-col sm:flex-row">
              <div className="xl:w-1/2 mt-4 xsm:w-full">
                <p className="font-semibold text-gray-800">
                  Bio Etic Goods (CH) GmbH
                </p>
                <div className="flex flex-row mt-2">
                  <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                  <div className="ml-1">
                    <p className="text-gray-600 text-sm font-light">TBA</p>
                    <p className="text-gray-600 text-sm font-light">TBA</p>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    Phone: TBA
                  </p>
                </div>
                <div className="flex flex-row mt-2">
                  <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    Email: info@bioeticgoods.ch
                  </p>
                </div>
              </div>
              <div className="xl:w-1/2 mt-4 xsm:w-full">
                <p className="font-semibold text-gray-800">
                  Bio Etic Goods (BY) LLC
                </p>
                <div className="flex flex-row mt-2">
                  <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                  <div className="ml-1">
                    <p className="text-gray-600 text-sm font-light">
                      Mogilevskaya, 19B, Ufficio B/N
                    </p>
                    <p className="text-gray-600 text-sm font-light">
                      246010 Gomel
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    Phone: +41 938 28348
                  </p>
                </div>
                <div className="flex flex-row mt-2">
                  <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    Email: info@bioeticgoods.ch
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-8 lg:flex xsm:hidden" />
          <div className="relative lg:w-1/2 xsm:w-full xl:mt-0 xsm:mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full h-full xl:p-8 rounded shadow-xl bg-white xsm:p-4 xl:mt-0 xsm:mt-4">
                <div className="flex xl:flex-row justify-center xsm:flex-col">
                  <div className="xl:w-1/2 xsm:w-full">
                    <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg tracking-normal">
                      Name<span className="text-red-500 select-none"> *</span>
                    </p>
                    <input
                      className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                      placeholder="Name"
                      {...register('firstName', {
                        required: true,
                        maxLength: 40,
                      })}
                    ></input>
                  </div>
                  <div className="xl:w-1/2 xl:ml-8 xl:mt-0 xsm:mt-4">
                    <p className="text-gray-800 xl:text-sm xsm:text-base font-normal sm:text-lg tracking-normal">
                      Last Name
                      <span className="text-red-500 select-none"> *</span>
                    </p>
                    <input
                      className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                      placeholder="Last Name"
                      {...register('lastName', {
                        required: true,
                        maxLength: 60,
                      })}
                    ></input>
                  </div>
                </div>
                <div className="w-full xl:mt-8 xsm:mt-4">
                  <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg tracking-normal">
                    Email Address
                    <span className="text-red-500 select-none"> *</span>
                  </p>
                  <input
                    className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                    placeholder="Email Address"
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  ></input>
                </div>
                <div className="w-full xl:mt-8 xsm:mt-4">
                  <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg tracking-normal">
                    Phone number
                  </p>
                  <input
                    className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                    placeholder="Phone Number"
                    {...register('phone', {
                      required: false,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  ></input>
                </div>
                <div className="w-full xl:mt-8 xsm:mt-4">
                  <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg tracking-normal">
                    Inquiry
                    <span className="text-red-500 select-none"> *</span>
                  </p>
                  <input
                    className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                    placeholder="Inquiry"
                    {...register('inquiry', {
                      required: true,
                      maxLength: 80,
                    })}
                  ></input>
                </div>
                <div className="w-full xl:mt-8 xsm:mt-4">
                  <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg tracking-normal">
                    Message<span className="text-red-500 select-none"> *</span>
                  </p>
                  <textarea
                    className="border w-full h-28 text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none resize-none xsm:p-2 sm:p-4"
                    placeholder="Message"
                    {...register('message', {
                      minLength: 2,
                      required: true,
                    })}
                  ></textarea>
                </div>
                <button
                  className="w-full rounded mt-4 p-4 bg-mainGreen flex flex-row justify-center focus:outline-none hover:opacity-80 transition duration-300"
                  type="submit"
                  onClick={(e: React.MouseEvent<HTMLElement>) => {}}
                >
                  {!messageSend ? (
                    <PaperAirplaneIcon className="w-4 h-4 self-center text-white"></PaperAirplaneIcon>
                  ) : null}

                  <p className="ml-1 text-white xl:text-sm xsm:text-sm font-normal">
                    {messageSend ? 'Message send' : 'Send'}
                  </p>
                  {messageSend ? (
                    <CheckIcon className="w-4 h-4 self-center text-white ml-1"></CheckIcon>
                  ) : null}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-b w-5/6 mx-auto xl:my-20 xsm:my-10"></div>
        <div className="flex xl:flex-row xsm:flex-col max-w-7xl mx-auto xsm:px-8 xl:px-0">
          <div className="flex flex-col xl:w-1/2 xsm:w-full">
            <div className="flex flex-row">
              <img
                className="h-8 w-auto self-center"
                src="/images/beglogo.svg"
                alt="Logo"
              />
            </div>
            <p className="text-gray-600 mt-4 font-normal xl:w-3/4 xsm:w-full xl:text-sm xsm:text-sm tracking-normal">
              We act as a broker and distrubutor in the food and beverage
              sector. We spezialize in frozen products, spirits, spices and
              herbs.
            </p>
            <div className="flex flex-row mt-4">
              <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
              <p className="text-gray-600 font-light text-sm ml-1">
                Phone: +41 938 28348
              </p>
            </div>
            <div className="flex flex-row mt-2">
              <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
              <p className="text-gray-600 font-light text-sm ml-1">
                Email: info@bioeticgoods.ch
              </p>
            </div>
          </div>
          <div className="flex xl:flex-row xl:w-1/2 justify-center xsm:hidden sm:flex xsm:flex-col xl:mt-0 xsm:mt-8 sm:flex-row">
            <div className="xl:w-1/3 xsm:w-full sm:w-1/3">
              <h6 className="text-gray-800 font-semibold xl:text-base xsm:text-base">
                General
              </h6>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Start
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  About Us
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Our Products
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Questions
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="xl:w-1/3 xl:mt-0 xsm:mt-4 sm:mt-0 sm:w-1/3">
              <h6 className="text-gray-800 font-semibold xl:text-base xsm:text-base">
                Languages
              </h6>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  English
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Deutsch
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Italiano
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Pусский
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Français
                </a>
              </div>
            </div>
            <div className="xl:w-1/3 xl:mt-0 xsm:mt-4 sm:mt-0 sm:w-1/3">
              <h6 className="text-gray-800 font-semibold xl:text-base xsm:text-base">
                Miscellaneous
              </h6>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Legal Disclosure
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Data Protection
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
