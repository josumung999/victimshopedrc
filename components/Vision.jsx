const Vision = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100 lg:w-20 lg:h-20">
          <svg
            className="w-10 h-10 text-purple-400 lg:w-16 lg:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 font-Raleway text-3xl font-black tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-none">
              Victime non{' '}
              <br className="hidden md:block" />
              <span className="inline-block text-purple-400">
                Vulnérabilisée
              </span>
            </h2>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-Roboto font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
            >
              En savoir plus
            </a>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 dark:text-gray-300">
            Victim’s Hope DRC joue un rôle significatif, 
            en venant en aide aux victimes des attrocités, elle leur
            offre le premier sourire après le moment difficile et contribue non seulement 
            à leur réintégration communautaire mais aussi à leur résilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
