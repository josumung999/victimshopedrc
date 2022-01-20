const { faBullseye } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Mission = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400">
            <FontAwesomeIcon className="text-teal-900 h-10 w-10" icon={faBullseye} />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-Raleway text-3xl font-black tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-none">
              Nos Convictions{' '}
              <br className="hidden md:block" />
              sont{' '}
              <span className="inline-block text-purple-400">
                notre Mission
              </span>
            </h2>
            <p className="text-base font-Roboto font-normal text-gray-700 dark:text-gray-300 md:text-lg">
              Nous avons comme mission de Promouvoir les Droits Humains à travers une assistance 
              opportune et efficace à l’endroit des victimes vulnérabilisées 
              par différentes crises de nature humaines et naturelles dans le 
              contexte fragile.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold font-Raleway transition-colors duration-200 text-purple-400 hover:text-purple-800"
            >
              En Savoir Plus
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3207532/pexels-photo-3207532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
