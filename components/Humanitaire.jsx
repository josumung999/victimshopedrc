import { faHamburger, faHeartbeat, faUserGraduate, faVenusMars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Humanitaire = () => {
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
              <span className="relative">Nos</span>
            </span>{' '}
            Interventions Humanitaires
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Dans le contexte de l’Est de la RDC, étant non seulement en proie en insécurité
            caractérisé par des mouvements à répétition des populations mais aussi, théoriquement
              riche mais pratiquement pauvre, lors de la crise la population abandonne tout et se trouve
              dans des situations très difficiles dans les zones d’accueil. Victim’s Hope DRC joue donc 
              un rôle significatif, en leurs venant en aide, elle leur offre le premier sourire après le moment
                difficile et contribue non seulement à leur réintégration communautaire mais aussi à leur résilience. 
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
              <FontAwesomeIcon className="w-12 h-12 text-green-600 sm:w-16 sm:h-16" icon={faHamburger} />
            </div>
            <h6 className="mb-3 text-gray-800 dark:text-gray-200 text-xl font-Raleway font-bold leading-5">Sécurité Alimentaire</h6>
            <p className="mb-3 font-Roboto text-base text-gray-800 dark:text-gray-300">
              Soutenir les agriculteurs et les éléveurs tout en intervenant dans la protection de l'environnement ainsi que la résilience
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
              <FontAwesomeIcon className="w-12 h-12 text-pink-400 sm:w-16 sm:h-16" icon={faHeartbeat} />
            </div>
            <h6 className="mb-3 text-gray-800 dark:text-gray-200 text-xl font-Raleway font-bold leading-5">Wash, Santé et Nutrition</h6>
            <p className="mb-3 font-Roboto text-base text-gray-800 dark:text-gray-300">
            Adduction d'eau potable, hygiène et assainissement 
              et communication pour le changement de mentalité
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
              <FontAwesomeIcon className="w-12 h-12 text-purple-400 sm:w-16 sm:h-16" icon={faVenusMars} />
            </div>
            <h6 className="mb-3 text-gray-800 dark:text-gray-200 text-xl font-Raleway font-bold leading-5">Genre, Inclusion et Jeunesse</h6>
            <p className="mb-3 font-Roboto text-base text-gray-800 dark:text-gray-300">
            Entrepreneuriat, soutien aux victimes de violences 
              sexuelles et création d'activités génératrices de revenus.
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
              <FontAwesomeIcon className="w-12 h-12 text-sky-400 sm:w-16 sm:h-16" icon={faUserGraduate} />
            </div>
            <h6 className="mb-3 text-gray-800 dark:text-gray-200 text-xl font-Raleway font-bold leading-5">Éducation</h6>
            <p className="mb-3 font-Roboto text-base text-gray-800 dark:text-gray-300">
            Promouvoir l'accès à l'éducation formelle et la formation
               aux métiers pratiques de la vie quotidienne.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Humanitaire
