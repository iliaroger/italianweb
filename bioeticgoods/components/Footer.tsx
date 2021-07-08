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
import Modal from './Modal';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  inquiry: string;
  message: string;
  phone: string;
};

const ModalInfo = {
  disclaimer: {
    header: 'Legal Disclaimer',
    text: (
      <>
        <h1>Disclaimer for Bio Etic Goods</h1>
        <br></br>
        <p>
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at
          info@bioeticgoods.com. Our Disclaimer was generated with the help of
          the{' '}
          <a href="https://www.disclaimergenerator.net/">
            Disclaimer Generator
          </a>
          .
        </p>
        <br></br>

        <h2>Disclaimers for Bio Etic Goods</h2>
        <br></br>

        <p>
          All the information on this website - https://bioeticgoods.com - is
          published in good faith and for general information purpose only. Bio
          Etic Goods does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Bio Etic Goods), is strictly
          at your own risk. Bio Etic Goods will not be liable for any losses
          and/or damages in connection with the use of our website.
        </p>

        <br></br>
        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>
        <br></br>

        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>
        <br></br>

        <h2>Consent</h2>
        <br></br>

        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
        <br></br>

        <h2>Update</h2>
        <br></br>

        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </>
    ),
  },
  privacy: {
    header: 'Data protection',
    text: (
      <>
        <h1>Privacy Policy for Bio Etic Goods</h1>
        <br></br>

        <p>
          At Bio Etic Goods, accessible from https://bioeticgoods.com, one of
          our main priorities is the privacy of our visitors. This Privacy
          Policy document contains types of information that is collected and
          recorded by Bio Etic Goods and how we use it.
        </p>
        <br></br>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us. Our Privacy Policy was
          generated with the help of{' '}
          <a href="https://www.gdprprivacynotice.com/">
            GDPR Privacy Policy Generator from GDPRPrivacyNotice.com
          </a>
        </p>
        <br></br>

        <h2>General Data Protection Regulation (GDPR)</h2>
        <p>We are a Data Controller of your information.</p>
        <br></br>

        <p>
          Bio Etic Goods legal basis for collecting and using the personal
          information described in this Privacy Policy depends on the Personal
          Information we collect and the specific context in which we collect
          the information:
        </p>
        <ul>
          <li>Bio Etic Goods needs to perform a contract with you</li>
          <li>You have given Bio Etic Goods permission to do so</li>
          <li>
            Processing your personal information is in Bio Etic Goods legitimate
            interests
          </li>
          <li>Bio Etic Goods needs to comply with the law</li>
        </ul>
        <br></br>

        <p>
          Bio Etic Goods will retain your personal information only for as long
          as is necessary for the purposes set out in this Privacy Policy. We
          will retain and use your information to the extent necessary to comply
          with our legal obligations, resolve disputes, and enforce our
          policies.
        </p>
        <br></br>

        <p>
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us.
        </p>
        <p>
          In certain circumstances, you have the following data protection
          rights:
        </p>
        <ul>
          <li>
            The right to access, update or to delete the information we have on
            you.
          </li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>

        <br></br>
        <h2>Log Files</h2>
        <br></br>

        <p>
          Bio Etic Goods follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </p>

        <br></br>

        <h2>Google DoubleClick DART Cookie</h2>
        <br></br>

        <p>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{' '}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>
        <br></br>

        <h2>Our Advertising Partners</h2>
        <br></br>

        <p>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <br></br>

        <ul>
          <li>
            <p>Google</p>
            <p>
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </li>
        </ul>
        <br></br>

        <h2>Privacy Policies</h2>
        <br></br>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Bio Etic Goods.
        </p>
        <br></br>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Bio Etic Goods, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <br></br>

        <p>
          Note that Bio Etic Goods has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
        <br></br>

        <h2>Third Party Privacy Policies</h2>
        <br></br>

        <p>
          Bio Etic Goods's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{' '}
        </p>
        <br></br>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>
        <br></br>

        <h2>Children's Information</h2>
        <br></br>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <br></br>

        <p>
          Bio Etic Goods does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <br></br>

        <h2>Online Privacy Policy Only</h2>
        <br></br>

        <p>
          Our Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Bio Etic Goods. This policy is not applicable
          to any information collected offline or via channels other than this
          website.
        </p>
        <br></br>

        <h2>Consent</h2>
        <br></br>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </>
    ),
  },
  sitemap: {
    header: 'Sitemap',
    text: (
      <>
        <a target="_blank" href="/downloads/sitemap.xml">
          Download Sitemap.xml
        </a>
      </>
    ),
  },
};

enum SelectionModal {
  disclaimer = 'disclaimer',
  privacy = 'privacy',
  sitemap = 'sitemap',
  none = '',
}

export default function Footer() {
  const [messageSend, setMessageSend] = useState(false);
  const [currentModal, setCurrentModal] = useState<SelectionModal>(
    SelectionModal.none
  );
  const [triggerModal, setTriggerModal] = useState<boolean>(false);

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
        {currentModal !== '' ? (
          <Modal
            trigger={triggerModal}
            description={ModalInfo[currentModal].header}
            text={ModalInfo[currentModal].text}
          ></Modal>
        ) : (
          ''
        )}
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
              Our headquater
            </p>
            <div className="flex flex-col xl:w-full mt-2 xsm:w-full">
              <div className="flex flex-row">
                <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                <div className="ml-1">
                  <p className="text-gray-600 text-sm font-light">
                    Shelton Street 71-75
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                    London WC2H 9JQ, United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                <p className="text-gray-600 text-sm ml-1 font-light">
                  info@bioeticgoods.com
                </p>
              </div>
            </div>
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
                <p className="font-bold text-sm text-gray-800">
                  Bio Etic Goods (BY) LLC
                </p>
                <div className="flex flex-row mt-2">
                  <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                  <div className="ml-1">
                    <p className="text-gray-600 text-sm font-light">
                      Mogilevskaya, 19B, Office B/N
                    </p>
                    <p className="text-gray-600 text-sm font-light">
                      246010 Gomel, Belarus
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    +375 (33) 682-19-41
                  </p>
                </div>
                <div className="flex flex-row mt-2">
                  <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    info@bioeticgoods.com
                  </p>
                </div>
              </div>
              <div className="xl:w-1/2 mt-4 xsm:w-full">
                <p className="font-bold text-sm text-gray-800">
                  Bio Etic Goods (Schweiz) GmbH
                </p>
                {/* <div className="flex flex-row mt-2">
                  <LocationMarkerIcon className="w-4 h-4 text-gray-600"></LocationMarkerIcon>
                  <div className="ml-1">
                    <p className="text-gray-600 text-sm font-light">TBA</p>
                    <p className="text-gray-600 text-sm font-light">TBA</p>
                  </div>
                </div> */}
                {/* <div className="flex flex-row mt-2">
                  <PhoneIcon className="text-gray-600 w-4 h-4 self-center"></PhoneIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">TBA</p>
                </div> */}
                <div className="flex flex-row mt-2">
                  <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
                  <p className="text-gray-600 text-sm ml-1 font-light">
                    info@bioeticgoods.com
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
                    <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                    <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                  <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                  <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                  <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                  <p className="text-gray-800 text-sm font-normal tracking-normal">
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
                src="/images/beglogo.png"
                alt="Logo"
              />
            </div>
            <p className="text-gray-600 mt-4 font-normal xl:w-3/4 xsm:w-full xl:text-sm xsm:text-sm tracking-normal">
              We act as a broker and distrubutor in the food and beverage
              sector. We spezialize in frozen products, spirits, spices and
              herbs.
            </p>

            <div className="flex flex-row mt-2">
              <MailIcon className="text-gray-600 w-4 h-4 self-center"></MailIcon>
              <p className="text-gray-600 font-light text-sm ml-1">
                Email: info@bioeticgoods.com
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
                  href="#start"
                >
                  Start
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#about"
                >
                  About Us
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#products"
                >
                  Our Products
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#questions"
                >
                  Questions
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  href="#contact"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bioeticgoods.com"
                >
                  English
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://de.bioeticgoods.com"
                >
                  Deutsch
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://it.bioeticgoods.com"
                >
                  Italiano
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ru.bioeticgoods.com"
                >
                  Pусский
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fr.bioeticgoods.com"
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
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal cursor-pointer"
                  onClick={() => {
                    setCurrentModal(SelectionModal.disclaimer);
                    setTriggerModal(!triggerModal);
                  }}
                >
                  Legal Disclosure
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal cursor-pointer"
                  onClick={() => {
                    setCurrentModal(SelectionModal.privacy);
                    setTriggerModal(!triggerModal);
                  }}
                >
                  Data Protection
                </a>
              </div>
              <div className="mt-2 xl:text-sm xsm:text-sm">
                <a
                  className="text-gray-600 hover:text-mainGreen transition duration-150 tracking-normal cursor-pointer"
                  onClick={() => {
                    setCurrentModal(SelectionModal.sitemap);
                    setTriggerModal(!triggerModal);
                  }}
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
