import Link from "next/link"

const Summary = () => {
  return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-Roboto font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Domaines d'Intervention
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-Raleway text-2xl font-bold font-black leading-normal tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Nous</span>
          </span>{' '}
          Intervenons dans les domaines suivants
        </h2>
        <p className="text-base font-Roboto text-gray-700 dark:text-gray-300 md:text-lg">
          Dans le contexte de l’Est de la RDC, étant non seulement en proie à l'insécurité 
          caractérisé par des mouvements à répétition des populations mais aussi, 
          théoriquement riche mais pratiquement pauvre, lors de la crise la population 
          abandonne tout et se trouve dans des situations très difficiles dans les zones d’accueil
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white dark:bg-transparent border-l-4 border-purple-400 hover:-translate-y-2">
          <div className="h-full p-5 border dark:border-none border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold font-Raleway dark:text-gray-200 leading-5">Sécurité Alimentaire</h6>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              Soutenir les agriculteurs et les éléveurs tout en intervenant dans la 
              protection de l'environnement ainsi que la résilience
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white dark:bg-transparent border-l-4 border-purple-400 hover:-translate-y-2">
          <div className="h-full p-5 border dark:border-none border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold font-Raleway dark:text-gray-200 leading-5">Wash, Santé et Nutrition</h6>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              Adduction d'eau potable, hygiène et assainissement 
              et communication pour le changement de mentalité
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white dark:bg-transparent border-l-4 border-purple-400 hover:-translate-y-2">
          <div className="h-full p-5 border dark:border-none border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold font-Raleway dark:text-gray-200 leading-5">
              Genre, Inclusion et Jeunesse
            </h6>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              Entrepreneuriat, soutien aux victimes de violences 
              sexuelles et création d'activités génératrices de revenus.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white dark:bg-transparent border-l-4 border-purple-400 hover:-translate-y-2">
          <div className="h-full p-5 border dark:border-none border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold font-Raleway dark:text-gray-200 leading-5">Éducation</h6>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              Promouvoir l'accès à l'éducation formelle et la formation
               aux métiers pratiques de la vie quotidienne.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/domaines"
          aria-label=""
        >
          <a className="inline-flex items-center justify-center w-full h-12 px-6 font-medium font-Roboto tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
            En Savoir Plus
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Summary
