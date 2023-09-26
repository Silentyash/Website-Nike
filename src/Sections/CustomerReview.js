import { reviews } from "../Constants";
import { star } from "../assets/icons";



const CustomerReview = () => {
  return (
    <section className="max-container bg-lime-100 w-full py-7">
      <h3 className=" text-center font-palanquin  text-4xl font-bold">
        What our
        <span className=" text-coral-red"> Customers </span>Say?
      </h3>
      <p className=" font-montserrat text-center info-text m-auto mt-4 max-w-lg ">
        Here are Genuine stories from our satisfied customers about their
        exceptional experiencewith us.
      </p>
      <div className="mt-24 flex flex-1 flex-col lg:flex-row justify-evenly item-center  max-lg:flex-col gap-14">
        {reviews.map((review) =>(
          <div className="flex flex-1 flex-col shadow-xl items-center justify-center" key={review.customerName}>
          <img src={review.imgURL}
            alt="customer"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
          <p className="info-text mt-6 max-w-sm text-center" >{review.feedback}</p>
          <div className="flex flex-row mt-2">
            <img src={star}
                width={24}
                height={24}
                className="object-contain m-0"
          />
          <p className="font-montserrat text-xl text-slate-gray">{review.rating}</p>
          </div>
          <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{review.customerName}</h3>
        </div>

        ))}
        
      </div>
    </section>
  );
}

export default CustomerReview