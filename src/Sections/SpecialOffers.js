import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";


const SpecialOffers = () => {
    return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red "> Special </span> Offers
        </h2>
        <p className="info-text mt-6 lg:max-w-lg ">
          Embark on a shopping Journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
          Navigate to a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftest expectations. your journey with us is
          nothing short of expectations.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="View Details" 
          iconURL={arrowRight}/>
          <Button label="Learn More" 
          backgroundColor="bg-lime-200"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />

        </div>
      </div>
    </section>
  );
}

export default SpecialOffers