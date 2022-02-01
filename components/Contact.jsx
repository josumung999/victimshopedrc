const Contact = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row">
          <div className="basis-1/3 bg-slate-700">
            01
          </div>
          <div className="py-10 px-10 basis-2/3 bg-slate-200 flex flex-col justify-center">
          <div>
            <h2 className="mt-4 mb-10 font-Raleway text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl md:mx-auto">
              Laissez-nous un Message
            </h2>
          </div>
            <form className="w-full max-w-lg flex justify-center flex-col font-Roboto">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Nom Complet
                  </label>
                  <input className="block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John Doe" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Téléphone
                  </label>
                  <input className="block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="phone" placeholder="+243 991 234 567" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    E-mail
                  </label>
                  <input className="block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea className=" no-resize block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                  <p className="text-gray-600 text-xs italic">Laissez-nous un message</p>
                </div>
              </div>
              <div className="md:flex md:items-center mt-6">
                <div className="md:w-1/3">
                  <button className="shadow bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
