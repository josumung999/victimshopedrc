import Image from "next/image"

const { faMapMarkerAlt } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Evaluations = () => {
  return (
    <div className="dark:bg-slate-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg mb-20 font-Raleway text-3xl font-black leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
            Research for Social Impact
          </h1>
        </div>
        <hr className="my-4 bg-slate-700 dark:bg-slate-300" />
        <div>
          <h2 className="mt-8 mb-14 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
            Évaluations initiales et finales
          </h2>
        </div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 dark:bg-slate-200 border rounded-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-gray-600" />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg dark:text-gray-400 font-Raleway font-bold">Sud-Kivu</p>
                <p className="text-gray-700 dark:text-slate-200 font-Roboto">
                  Projet de Réponse Rapide au Sud-Kivu 
                  (Caritas Belgique), Kivus Crisis for IDPs 
                  (Mercy Corps RDC),
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 dark:bg-slate-200 border rounded-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-gray-600" />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg dark:text-gray-400 font-bold font-Raleway">Nord-Kivu</p>
                <p className="text-gray-700 dark:text-slate-200 font-Roboto">
                  Livelihood support to malnourished children and their families in the Mweso, 
                  Birambizo and Bambo health zones of Masisi and Rutshuru territories of North Kivu, DRC  
                  (LWF), Kivus Crisis for IDPs (Mercy Corps RDC)
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 dark:bg-slate-200 border rounded-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-gray-600" />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg dark:text-gray-400 font-bold">Région de Kasaï (Kasaï et Kasaï central)</p>
                <p className="text-gray-700 dark:text-slate-200 font-Roboto">
                Projet de Promotion des Outils Digitaux dans la 
                Coordination Humanitaire dans la région des Kasaï, 
                (Caritas Belgique) 
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 dark:bg-slate-200 border rounded-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-gray-600" />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg dark:text-gray-400 font-bold">Sud-Kivu, Tanganyika, Kinshasa, Lubumbashi</p>
                <p className="text-gray-700 dark:text-slate-200 font-Roboto">
                Gender-Responsive Radio Education in 
                the DRC “IRI” ( War Child Canada)
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 dark:bg-slate-200 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg dark:text-gray-400 font-bold">Et Bien plus encore</p>
                <p className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="/images/bg-realisations.JPG"
              alt="Research for Social Impact"
              layout="fill"
            />
          </div>
        </div>
        <div>
          <h2 className="mt-8 mb-14 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
            Études et Analyses
          </h2>
        </div>
        <div className="max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-50 dark:sm:hover:bg-slate-800">
            <div className="mb-4 lg:mb-0">
              <h5 className="mb-4 text-xl font-Raleway text-slate-900 dark:text-slate-200 font-bold leading-none sm:text-2xl">
                Sud–Kivu
              </h5>
              <div className="relative">
                <p className="text-base text-gray-700 dark:text-gray-300 font-Roboto md:text-xl">
                  Analyse de l’Etat du Système humanitaire Cinquième Edition à 
                  l’Est de la RD Congo/ phase préliminaire/ALNAP (The Research People UK); 
                  Etude sur la sensibilité aux conflits intercommunautaires et la situation 
                  éducationnelle dans les hauts plateaux de Kalehe ( Fonds propre VH-DRC) ; 
                  Projet d’Agriculture durable et meilleure protection des forêts tropicales en RDC 
                  « REDD+ » ( NORWEGIAN CHURCH AID)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-50 dark:sm:hover:bg-slate-800">
            <div className="mb-4 lg:mb-0">
              <h5 className="mb-4 text-xl font-Raleway text-slate-900 dark:text-slate-200 font-bold leading-none sm:text-2xl">
                Sud-Kivu et Ituri
              </h5>
              <div className="relative">
                <p className="text-base text-gray-700 dark:text-gray-300 font-Roboto md:text-xl">
                Évaluation Multisectorielle des besoins et étude du marché
                ( CARE International)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-8 mb-14 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
            Évaluations d’impact
          </h2>
        </div>
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border dark:border-none dark:bg-gray-700 font-Roboto text-gray-800 dark:text-gray-300 rounded-full">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold font-Raleway text-gray-900 dark:text-gray-300 sm:text-base">
                  Sud-Kivu
                </p>
                <p className="text-sm text-gray-700 font-Roboto dark:text-gray-400">
                Projets WASH et Sécurité Alimentaire 
                Programme SWIFTS2, TUENDELEE PAMOJA, UNICEF et BELGIUM; 
                (Proallience/ Tearfund). 
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border dark:border-none dark:bg-gray-700 font-Roboto text-gray-800 dark:text-gray-300 rounded-full">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold font-Raleway text-gray-900 dark:text-gray-300 sm:text-base">
                  Nord-Kivu
                </p>
                <p className="text-sm text-gray-700 font-Roboto dark:text-gray-400">
                Projets WASH et Sécurité Alimentaire ‘Programme SWIFT1, 
                SWIFTS2, OFDA1, OFDA2, MAVUNO ; (Proallience/ Tearfund). 
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border dark:border-none dark:bg-gray-700 font-Roboto text-gray-800 dark:text-gray-300 rounded-full">
                  3
                </div>
              </div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold font-Raleway text-gray-900 dark:text-gray-300 sm:text-base">
                  Ituri
                </p>
                <p className="text-sm text-gray-700 font-Roboto dark:text-gray-400">
                Projets WASH et Sécurité Alimentaire 
                ‘Programme OFDA2, MAVUNO et CERF ; (Proallience/ Tearfund). 
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border dark:border-none dark:bg-gray-700 font-Roboto text-gray-800 dark:text-gray-300 rounded-full">
                  4
                </div>
              </div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold font-Raleway text-gray-900 dark:text-gray-300 sm:text-base">Tanganyika</p>
                <p className="text-sm text-gray-700 font-Roboto dark:text-gray-400">
                  Projets WASH et Sécurité Alimentaire ‘Programme SWIFT1, 
                  SWIFTS2, OFDA1, OFDA2’ ; (Proallience/ Tearfund).
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border dark:border-none dark:bg-gray-700 font-Roboto text-gray-800 dark:text-gray-300 rounded-full">
                  5
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 text-purple-400 sm:w-14 sm:h-14" />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold font-Raleway text-gray-900 dark:text-gray-300 sm:text-base">Maniema</p>
                <p className="text-sm text-gray-700 font-Roboto dark:text-gray-400">
                  Projets WASH et Sécurité Alimentaire 
                  ‘Programme SWIFT1, SWIFTS2, OFDA1, OFDA2’ ; 
                  (Proallience/ Tearfund).  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evaluations
