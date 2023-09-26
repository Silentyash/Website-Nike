import { star } from "../assets/icons"


const PopularProductCard = ({imgURL, name, price, link}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <a href={link} className="cursor-pointer">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] hover:transform hover:scale-110 transition-transform duration-300 "
        ></img>

        <div className="flex flex-row gap-4">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <h3 className="text-2xl font-semibold underline py-2 leading-5 font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">
          {price}
        </p>
      </a>
    </div>
  );
}

export default PopularProductCard