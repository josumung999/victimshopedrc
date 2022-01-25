import Image from "next/image"

const { faMapMarkerAlt } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Evaluations = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div>
        <h2 className="mt-8 mb-14 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
          Research For Social Impact
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
              <div className="w-px h-full bg-gray-300" />
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
              <div className="w-px h-full bg-gray-300" />
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
              <div className="w-px h-full bg-gray-300" />
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
              <div className="w-px h-full bg-gray-300" />
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
    </div>
  )
}

export default Evaluations
