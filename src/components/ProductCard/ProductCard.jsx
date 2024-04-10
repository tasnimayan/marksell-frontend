import Image from "next/image";
import { Heading } from "./Heading";

export default function ProductCard({
  imageOne = "/images/img_image_260x384.png",
  title = "2861 62nd Ave, Oakland, CA 94605",
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
        <div className="flex flex-col items-center justify-start w-full gap-[25px] my-2.5 max-w-[344px]">
          <div className="flex flex-row justify-start items-center w-full gap-3">
            <img src="/images/img_icon_map_2.svg" alt="image_two" className="h-[24px] w-[24px]" />
            <h1>{title}</h1>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" />
                <h2 className="!text-gray-700">
                  {location}
                </h2>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_icon_gray_700_20x20.svg" alt="1_bath_one" className="h-[20px] w-[20px]" />
                <Heading as="h3" className="!text-gray-700">
                  {category}
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_icon_20x20.svg" alt="1032_sqft_one" className="h-[20px] w-[20px]" />
                <Heading as="h4" className="!text-gray-700">
                  {sqftcounter}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <img src="/images/img_iocn_menu.svg" alt="family_one" className="h-[20px] w-[20px]" />
                <Heading as="h5" className="!text-gray-700">
                  {p1bath}
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
            <button className="h-12 px-5 sm:px-5 text-white text-sm font-semibold bg-gray-900 min-w-[120px] rounded-[10px]">
              {viewDetails}
            </button>
            <Heading size="lg" as="h6" className="tracking-[-0.48px]">
              {price}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
