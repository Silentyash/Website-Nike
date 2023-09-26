import Button from "../Components/Button";


const Subscribe = () => {
  return (
    <section id="contact-us" className="bg-lime-100 ">
      <div className=" flex flex-1 flex-row justify-between items-center max-lg:flex-col gap-10 px-20 py-20 ">
        <h1 className=" text-4xl lg:max-w-md leading-[68px] font-bold font-palanquin">
          Sign Up for <span className="text-coral-red"> Updates</span> <br />&
          Newsletter
        </h1>
        <div className="flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full lg:max-w-[40%] w-full " >
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input bg-lime-100"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe