import React, { useState } from 'react';
import Header from '../components/Header';
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { sendEmail } from '../backend/contact';

export default function Footer() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const checkFormValidation = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      subject === '' ||
      message === ''
    ) {
      showErrorNotification();
    } else {
      sendEmail(
        'ilia.roger@outlook.com',
        'ilia.roger@outlook.com', // also add an user email
        'Praxis: Terminanfrage',
        'Schönen guten Tag, ich würde gerne einen Termin bei Ihnen buchen.'
      );
    }
  };

  const showErrorNotification = () => {
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 4000);
  };

  return (
    <div className="relative py-20 " id="kontakt">
      <Header
        description="Contact us to get started"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
        modi at quae. A, labore. A, voluptatem mollitia nostrum dolores sunt
        odit asperiores. Impedit, pariatur."
      ></Header>
      <div className="flex xl:flex-row justify-between xsm:flex-col xl:mt-8 xsm:mt-4 max-w-6xl mx-auto">
        <div className="xl:w-1/2 xsm:w-full">
          <h2 className="xl:text-2xl text-gray-800 font-semibold leading-tight xsm:text-xl">
            Business inquiries, questions or general informations. Write us!
          </h2>
          <p className="text-gray-600 mt-4 xl:text-sm xsm:text-sm">
            Specific questions regarding our products or orders can be discussed
            via email or skype. For all other questions contact us via email.
          </p>
          <p className="text-gray-800 xl:text-lg self-center font-semibold mt-4 xsm:text-lg">
            Our office - Lugano
          </p>
          <img
            className="w-full xl:h-80 object-cover rounded mt-4"
            src="/images/lugano.jpeg"
            alt="office lugano"
          ></img>
          <p className="text-gray-600 mt-4 xl:text-sm xsm:text-sm">
            You can find our office near the main plazza in Lugano. The parking
            spots are free of charge for all of our customers.
          </p>
          <div className="flex xl:flex-row xsm:flex-col sm:flex-row">
            <div className="xl:w-1/2 mt-4 xsm:w-full">
              <p className="font-semibold text-gray-800">ООО «Био Этик Гудс»</p>
              <div className="flex flex-row mt-2">
                <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                <div className="ml-1">
                  <p className="text-gray-600 text-sm">
                    ул. Могилёвская, д. 19б, Оф. б/Н
                  </p>
                  <p className="text-gray-600 text-sm">246010 г. Гомель</p>
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                <p className="text-gray-600 text-sm ml-1">
                  Phone: +41 938 28348
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                <p className="text-gray-600 text-sm ml-1">
                  Email: info@bioeticgoods.ch
                </p>
              </div>
            </div>
            <div className="xl:w-1/2 mt-4 xsm:w-full">
              <p className="font-semibold text-gray-800">Bio Etic Goods LLC</p>
              <div className="flex flex-row mt-2">
                <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                <div className="ml-1">
                  <p className="text-gray-600 text-sm">
                    Mogilevskaya, 19B, Ufficio B/N
                  </p>
                  <p className="text-gray-600 text-sm">246010 Gomel</p>
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                <p className="text-gray-600 text-sm ml-1">
                  Phone: +41 938 28348
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                <p className="text-gray-600 text-sm ml-1">
                  Email: info@bioeticgoods.ch
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-8 xl:flex xsm:hidden" />
        <div className="relative xl:w-1/2 xsm:w-full xl:mt-0 xsm:mt-4">
          <div
            className={`absolute top-0 bg-mainGreen w-full rounded-t transition duration-150 p-6 ${
              errorMessage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-white font-normal text-center">
              Please fill out every required input field in the form!
            </p>
          </div>
          <div className="w-full h-full xl:p-8 rounded shadow-xl bg-white xsm:p-4 xl:mt-0 xsm:mt-4">
            <div className="flex xl:flex-row justify-center xsm:flex-col">
              <div className="xl:w-1/2 xsm:w-full">
                <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg">
                  Name<span className="text-red-500 select-none"> *</span>
                </p>
                <input
                  className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                  placeholder="Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                ></input>
              </div>
              <div className="xl:w-1/2 xl:ml-8 xl:mt-0 xsm:mt-4">
                <p className="text-gray-800 xl:text-sm xsm:text-base font-normal sm:text-lg">
                  Last Name<span className="text-red-500 select-none"> *</span>
                </p>
                <input
                  className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                  placeholder="Last Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                ></input>
              </div>
            </div>
            <div className="w-full xl:mt-8 xsm:mt-4">
              <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg">
                Email Address
                <span className="text-red-500 select-none"> *</span>
              </p>
              <input
                className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                placeholder="Email Address"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              ></input>
            </div>
            <div className="w-full xl:mt-8 xsm:mt-4">
              <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg">
                Phone number
              </p>
              <input
                className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                placeholder="Phone Number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              ></input>
            </div>
            <div className="w-full xl:mt-8 xsm:mt-4">
              <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg">
                Inquiry
                <span className="text-red-500 select-none"> *</span>
              </p>
              <input
                className="border w-full text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none xsm:p-2 sm:p-4"
                placeholder="Inquiry"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSubject(e.target.value)
                }
              ></input>
            </div>
            <div className="w-full xl:mt-8 xsm:mt-4">
              <p className="text-gray-800 xl:text-sm font-normal xsm:text-base sm:text-lg">
                Message<span className="text-red-500 select-none"> *</span>
              </p>
              <textarea
                className="border w-full h-28 text-sm border-gray-200 mt-2 rounded xl:p-4 placeholder-gray-400 select-none resize-none xsm:p-2 sm:p-4"
                placeholder="Message"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
              ></textarea>
            </div>
            <button
              className="w-full rounded mt-4 p-4 bg-mainGreen flex flex-row justify-center focus:outline-none"
              onClick={() => {
                checkFormValidation();
              }}
            >
              <PaperAirplaneIcon className="w-4 h-4 self-center text-white"></PaperAirplaneIcon>
              <p className="ml-1 text-white xl:text-sm xsm:text-sm font-normal">
                Send message
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b w-5/6 mx-auto xl:my-20 xsm:my-10"></div>
      <div className="flex xl:flex-row xsm:flex-col max-w-7xl mx-auto">
        <div className="flex flex-col xl:w-1/2 xsm:w-full">
          <div className="flex flex-row">
            <img
              className="h-8 w-auto self-center"
              src="/images/beglogo.png"
              alt="Logo"
            />
          </div>
          <p className="text-gray-600 mt-4 font-normal xl:w-3/4 xsm:w-full xl:text-sm xsm:text-sm">
            We act as a broker and distrubutor in the food and beverage sector.
            We spezialize in frozen products, spirits, spices and herbs.
          </p>
          <div className="flex flex-row mt-4">
            <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
            <p className="text-gray-600 text-sm ml-1">Phone: +41 938 28348</p>
          </div>
          <div className="flex flex-row mt-2">
            <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
            <p className="text-gray-600 text-sm ml-1">
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
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Start
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                About Us
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Our Products
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Questions
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
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
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                English
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Deutsch
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Italiano
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Pусский
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
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
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Legal Disclosure
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Data Protection
              </a>
            </div>
            <div className="mt-2 xl:text-sm xsm:text-sm">
              <a
                className="text-gray-600 hover:text-mainGreen transition duration-150"
                href="#"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
