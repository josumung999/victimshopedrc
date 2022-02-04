import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const { faPhoneAlt, faEnvelope, faMapMarkerAlt } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Contact = (props) => {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row">
          <div className="py-4 px-4 sm:py-10 sm:px-10 basis-1/3 bg-slate-700 dark:bg-slate-900">
            <div>
              <h2 className="mt-4 mb-10 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-100 dark:text-gray-300 sm:text-3xl md:mx-auto">
                Coordonnées
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="inline-flex items-center mb-4">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-100 dark:text-gray-300 mr-4 w-6 h-6" />
                <span className="text-base text-gray-100 dark:text-gray-300">
                  +243 990 094 448
                </span>
              </div>
              <div className="inline-flex items-center mb-4">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gray-100 dark:text-gray-300 mr-4 w-6 h-6" />
                <span className="text-base text-gray-100 dark:text-gray-300">
                  +243 826 163 250
                </span>
              </div>
              <div className="inline-flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-100 dark:text-gray-300 mr-4 w-6 h-6" />
                <span className="text-base text-gray-100 dark:text-gray-300">
                  victimeshope2004@gmail.com
                </span>
              </div>
              <div className="inline-flex items-center mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-100 dark:text-gray-300 mr-4 w-6 h-6" />
                <span className="text-base text-gray-100 dark:text-gray-300">
                  Av. Michombero, Commune de Bagira, Bukavu, Sud-Kivu, RD Congo
                </span>
              </div>
              <div className="py-6 px-16 inline-flex justify-between">
                <a href="!#" className="">
                  <FontAwesomeIcon icon={faFacebook} className="text-gray-100 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 mr-4 w-10 h-10" />
                </a>
                <a href="!#" className="">
                  <FontAwesomeIcon icon={faLinkedin} className="text-gray-100 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 mr-4 w-10 h-10" />
                </a>
                <a href="!#" className="">
                  <FontAwesomeIcon icon={faTwitter} className="text-gray-100 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 w-10 h-10" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 px-4 sm:py-10 sm:px-10 basis-2/3 bg-slate-200 dark:bg-slate-700 flex flex-col items-center justify-center">
          <div>
            <h2 className="mt-4 mb-10 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
              Laissez-nous un Message
            </h2>
          </div>
            <form method="post" onSubmit={props.handleOnSubmit} className="w-full max-w-lg flex justify-center flex-col font-Roboto">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Nom Complet
                  </label>
                  <input className="block w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 border dark:border-none border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200" name="name" type="text" placeholder="John Doe" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="grid-phone">
                    Téléphone
                  </label>
                  <input className="block w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 border dark:border-none border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200" name="phone" type="phone" placeholder="+243 991 234 567" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="grid-password">
                    E-mail
                  </label>
                  <input className="block w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 border dark:border-none border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200" name="email" type="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea className="no-resize block w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 border dark:border-none border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 h-48 resize-none" name="message"></textarea>
                  <p className="text-gray-600 dark:text-gray-300 text-xs italic">Laissez-nous un message</p>
                </div>
              </div>
              <div className="md:flex md:items-center mt-6">
                <div className="md:w-1/3">
                  <button className="block w-full shadow bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Envoyer
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
