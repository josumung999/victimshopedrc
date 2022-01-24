const PageHeader = (props) => {
  return (
    <div className="relative bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.bg})` }}>
      <div className="px-4 py-16 flex flex-row justify-center">
        <div className="basis-1/2">
          <h1 className="font-Raleway text-gray-100 font-black text-3xl sm:text-4xl">
            {props.title}
          </h1>
          <p className="font-Roboto font-semibold text-xl text-slate-200">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
