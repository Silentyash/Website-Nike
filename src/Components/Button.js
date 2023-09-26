

const Button = ({label,iconURL,backgroundColor,textColor,borderColor}) => {
  return (
    <button className={`flex justify-center items-center
     gap-2 border rounded-full text-lg leading-none px-3
     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:'font-montserrat text-white px-7 py-4 bg-coral-red' }`}>
         {label}
         {iconURL && < img src={iconURL}
         alt="arrow-right-icon"
         className="ml-2 rounded-full w-5 h-5 "
         ></img>}
    </button>
  )
}

export default Button