import Image from "next/image";
import { MdOutlineCategory, MdLocationPin } from "react-icons/md";



export default function ProductCard({
  imageOne = "/images/img_image_260x384.png",
  title = "Ready Flat near bashundhara river view area",
  location = "Dhaka",
  category = "Property",
  sqftcounter = "1,032 sqft",
  p1bath = "Family",
  viewDetails = "View Details",
  price = "$649,900",
  ...props
}) {
  return (
    <div {...props} >
      <Image
        src={imageOne}
        alt="product image"
        className="w-full md:h-auto sm:w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
        width={300}
        height={300}
      />
      <div className="flex flex-row justify-center w-full p-2 rounded-bl-[10px] rounded-br-[10px] border-red-100 border bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-3 my-2 max-w-[344px]">
          <div className="line-clamp-1">
            <h2>{title}</h2>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-2">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <MdLocationPin className="h-4 w-4" />
                <p className="!text-gray-700">
                  {location}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <MdOutlineCategory className="h-4 w-4"/>
                <p className="!text-gray-700">
                  {category}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_icon_20x20.svg" alt="1032_sqft_one" className="h-[20px] w-[20px]" />
                <p className="!text-gray-700">
                  {sqftcounter}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_iocn_menu.svg" alt="family_one" className="h-[20px] w-[20px]" />
                <p className="!text-gray-700">
                  {p1bath}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
            <button className="h-12 px-5 sm:px-5 text-white text-sm font-semibold bg-gray-900 min-w-[120px] rounded-[10px]">
              {viewDetails}
            </button>
            <h6 className="text-lg font-semibold tracking-[-0.48px]">
              {price}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
