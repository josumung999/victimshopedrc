import { faBriefcase, faDollarSign, faFileInvoiceDollar, faGift, faHandHoldingHeart, faHandsHelping, faQrcode, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { faUniversity } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Donation = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute hidden w-full lg:block h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-Raleway text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="2c67e949-4a23-49f7-bf27-ca140852cf21" x={0} y={0} width=".135" height=".30">
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)" width={52} height={24} />
              </svg>
              <span className="relative">Soutenez</span>
            </span>{" "}
            Notre Cause
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
            Victim's Hope DRC vise à contribuer à une société juste et équitable et 
            croit en une victime non vulnérabilisée pour le développement communautaire
          </p>
        </div>
        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          <div>
            <div className="p-8 bg-gray-900 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  Soutien Financier
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-4xl font-semibold text-white lg:text-6xl">
                    Don
                  </p>
                  <p className="text-lg text-gray-500">/ en espece</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                    <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth={2}>
                      <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
                      <circle cx={12} cy={12} fill="none" r={11} stroke="currentColor" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">Nous recevons des Virement Bancaires</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faUniversity} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Nom de la Banque: <strong></strong></p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faUserAlt} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Intitulé du Compte: <strong>Victim's Hope</strong></p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">N° de compte : <strong>00017-22000-21114850001-36</strong></p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faQrcode} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Code SWIFT : <strong>TRMSCD3L</strong></p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faDollarSign} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Devise: <strong>USD</strong></p>
                </li>
              </ul>
              <Link href="/realisations">
                <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                  Nos Réalisations
                </button>
              </Link>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          <div>
            <div className="p-8 bg-gray-900 rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">Autres Moyens</p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-4xl font-semibold text-white lg:text-6xl">
                    Agir
                  </p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3">
                  <FontAwesomeIcon icon={faHandsHelping} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Nous Rejoindre</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Devenir Bénévole</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Travailler avec Nous</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faGift} className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="font-medium text-gray-300">Autres Soutiens</p>
                </li>
              </ul>
              <Link href="/contact">
                <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                  Nous Contacter
                </button>
              </Link>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
