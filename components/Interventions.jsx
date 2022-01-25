const { faClock } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Interventions = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-Raleway text-3xl font-black leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            Projets Exécutés
          </h2>
        </div>
        <div>
        <h2 className="mb-14 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
          Interventions Humanitaires
        </h2>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1">
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img
                src="/images/kalehe-kasheke.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold font-Raleway leading-5">
                    Encadrement de Jeunes Éleveurs
                  </h6>
                  <p className="text-base font-Roboto text-gray-900">
                   Projet d’encadrement des jeunes éleveurs des petits bétails
                   dans les hauts plateaux de Kalehe, groupement de Mubugu, village 
                   Katasomwa. 
                   <br />
                   <span className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2 text-purple-400" />  <em>D’avril en Octobre 2016.</em>
                   </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img
                src="/images/nyawera.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold font-Raleway leading-5">
                    BCECO LOANS
                  </h6>
                  <p className="text-base font-Roboto text-gray-900">
                    Projet d’accompagnement des initiatives d’économie 
                    sociale et solidaire « IESS » dans les marchés de la ville 
                    de Bukavu.
                    <br />
                    <span className="flex items-center mt-2">
                      <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2 text-purple-400" />  <em>Avril 2015 à Avril 2016.</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img
                src="/images/eleve.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold font-Raleway leading-5">
                    PLUVIFES
                  </h6>
                  <p className="text-base font-Roboto text-gray-900">
                  Projet de Lutte Contre les Violences faites à la Jeune 
                  fille dans les établissements scolaires de la ville de Bukavu  
                   <br />
                   <span className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2 text-purple-400" />  <em>Août 2020 à Mars 2021.</em>
                   </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interventions
