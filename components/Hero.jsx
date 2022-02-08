import Link from "next/link"

const Hero = () => {
    return (
      <div className="relative dark:bg-gray-900 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-O w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white dark:text-gray-900 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            src="/images/img-hero-1.jpg"
            alt=""
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-3">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold font-Roboto tracking-wider text-teal-900 uppercase rounded-full bg-teal-400 dark:bg-transparent dark:text-teal-400 lg:animate-bounce">
              Victim&apos;s Hope DRC
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl font-black font-Raleway tracking-tight text-gray-900 dark:text-gray-200 sm:leading-none">
              Pour une Société {' '}
              <br className="hidden md:block" />
              Juste et{' '}
              <span className="inline-block text-purple-400">
                Équitable
              </span>
            </h2>
            <p className="pr-5 font-Roboto mb-5 text-xl font-medium text-gray-700 dark:text-gray-400 md:text-lg">
              Victim&apos;s Hope DRC (VH-DRC), une organisation des droits congolais est basée à Bukavu,
               et vise à contribuer à une société juste et équitable.
                En plus des interventions humanitaires d’urgence et de développement, 
                VH-DRC s’adonne à la Recherche et au Consulting
            </p>
            <div className="flex items-center">
              <Link href="/contact" passHref>
                <span className="inline-flex mr-6 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                  Rejoindre
                </span>
              </Link>
              <Link href="/domaines" passHref>
                <span className="inline-flex items-center font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-purple-700">
                  En Savoir Plus
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero
