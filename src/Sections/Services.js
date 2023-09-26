import { services } from "../Constants"

services

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <div key={service.label} className="flex  flex-col flex-1 justify-center sm:w-[350px] py-10 mt-7 sm:min-w-[350px] bg-indigo-100 rounded-[20px] w-full shadow-3xl pl-10 pr-5">
          <img src={service.imgURL}
          alt="icon"
          width={60}
          height={60}
          className="object-contain p-2 rounded-full bg-coral-red "
          ></img>
          <p className="text-2xl font-palanquin font-bold mt-5 leading-normal ">{service.label}</p>
          <p className="  text-slate-gray font-montserrat mt-5 leading-normal "> {service.subtext}</p>

        </div>
      ))}
    </section>
  )
}

export default Services