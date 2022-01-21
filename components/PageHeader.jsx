const PageHeader = (props) => {
  return (
    <div className="bg-gray-700">
      <div className="px-4 py-16 dark:bg-gray-900 flex flex-row justify-center">
        <div className="basis-1/2">
          <h1 className="font-Raleway text-gray-200 dark:text-gray-200 font-black text-3xl sm:text-4xl">
            {props.title}
          </h1>
          <p className="font-Roboto font-semibold text-xl text-purple-400 dark:text-purple-300">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
