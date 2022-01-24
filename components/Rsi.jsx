import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Rsi = () => {
  return (
    <div className="bg-slate-700 dark:bg-gray-900">

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-Roboto font-semibold tracking-wide text-purple-400 uppercase">
              Recherche et Développement
            </p>
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="font-Raleway text-2xl font-extrabold text-slate-100 leading-none tracking-tight lg:text-4xl xl:text-5xl">
                  Research for Social Impact
                </p>
              </a>
            </div>
            <p className="mb-4 font-Roboto text-xl text-gray-300 md:text-lg">
              Victim’s Hope DRC, détient d’une équipe performante, multidisciplinaire 
              et ayant une aisance dans la conduite <strong className="text-purple-400"> des études qualitatives</strong> à l’aide de 
              techniques telles que Focus Group (FGD), Entretiens individuels en profondeur(KII), 
              Brainstorming, Consumer Immersion et ethnographies , <strong className="text-purple-400">études quantitatives</strong> grâce à des 
              techniques comme Entretien Face à Face avec papier (PAPI), Entretien par téléphone 
              (CATI, Call Center), Entretien par Ordinateur (CAPI), Entretien via mobile (CAMI), Entretien 
              via le Web (CAWI) ou Entretien en Salle (CLT)
            </p>
          </div>
          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <p className="mb-2 text-xs font-Roboto font-semibold tracking-wide text-purple-400 uppercase">
                Les Autres Procedés
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-Raleway text-slate-100 text-1xl font-extrabold leading-none tracking-tight lg:text-3xl">
                    Études Documentaires
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-300 md:text-lg">
                Nous Procédons également à <strong className="text-purple-400"> des études documentaires</strong> à l’aide des 
                archives, des publications officielles, de l’internet ou des experts. 
                Ceci afin d’explorer une problématique ou de préparer une phase d’étude approfondie, 
                ainsi que les séances de <strong className="text-purple-400"> Renforcement des capacités techniques</strong> au travers des Formations 
                spécialisées (Suivi évaluation, Collecte numérique, Logiciels d’analyse qualitative et 
                quantitative, Cartographie, Méthodes de recherche …), et l’organisation de conférences et colloques.   
              </p>
              <p className="mt-4 text-base text-gray-300 md:text-lg">
              Avec son expertise dans la collecte des données numériques, 
              à travers les plateformes KOBO collect, ODK collect et Commcare, 
              Victim’s Hope DRC a développé une nouvelle technique de collecte 
              des données à distances via les Smartphones depuis l’apparition de 
              la pandémie COVID-19. 
              </p>
              <p className="mt-6 font-Raleway text-slate-100 text-xl font-extrabold leading-none tracking-tight lg:text-3xl">
                Publications Récentes
              </p>
              <div className="flex flex-col items-start my-6">
                <a
                  className="mb-4 inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-700"
                  href="/reports/report-english.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6 mr-4" /> VH-DRC_Final Report Baseline REDD+_NCA_23102021_English
                </a>
                <a
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-700"
                  href="/reports/report-french.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6 mr-4" /> VH-DRC_Rapport Final-Baseline REDD+_NCA_23102021_Français
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rsi
