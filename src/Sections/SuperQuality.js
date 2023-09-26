import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

Button

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="xl:bg-lime-200 xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>{" "}
          <br />
          <span className="text-coral-red "> Super Quality </span> Shoes
        </h2>
        <p className="info-text mt-6 lg:max-w-lg ">
          Ensuring premium comfort and style, our meticoulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div className="mt-11">
          <a href="https://about.nike.com/en/newsroom">
            <Button label=" Visit Newsroom" />
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <img
          src={shoe8}
          alt="Shoe-8"
          width={570}
          height={522}
          className="object-contain"
        ></img>
      </div>
    </section>
  );
}

export default SuperQuality