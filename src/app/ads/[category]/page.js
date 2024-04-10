import { Heading } from '@/components/Heading';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/Sidebar';
import SortMenu from '@/components/SortMenu';
import React from 'react';

const page = ({}) => {
  return (
    <div className="flex flex-col justify-center w-full bg-slate-50 px-20">
      <div className="flex flex-col items-center justify-start h-[1200px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-center w-full pt-[5px]">
          <div className="flex flex-col items-center justify-start w-full gap-[17px]">
            <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
              <Heading size="3xl" as="h2" className="tracking-[-0.72px]">
                Featured Properties
              </Heading>
              <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                  Explore All
                </Heading>
                <img src="/images/img_icon_24px_v.svg" alt="icon24pxv_one" className="h-[24px] w-[24px]" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start w-full md:gap-5">
              <button size="xs" shape="square" className="text-gray-900 font-bold min-w-[159px]">
                Resident Property
              </button>
              <button size="xs" shape="square" className="ml-[143px] md:ml-5 text-gray-400 font-bold min-w-[186px]">
                Commercial Property
              </button>
              <button size="xs" shape="square" className="ml-[116px] md:ml-5 text-gray-400 font-bold min-w-[164px]">
                Industrial Property
              </button>
              <button size="xs" shape="square" className="ml-[137px] md:ml-5 text-gray-400 font-bold min-w-[180px]">
                Agriculture Property
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-[300px,1fr] md:grid-cols-[250px,1fr]'>
        <div className="mb-4">
          <Sidebar />
        </div>
        <div>
          <SortMenu />

          <div className="justify-center w-full gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5 sm:grid-cols-1 grid">
            <ProductCard className="flex flex-col items-center justify-start w-full"/>
            <ProductCard 
              imageOne="/images/img_image_1.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <ProductCard 
              imageOne="/images/img_image_3.png"
              className="flex flex-col items-center justify-start w-full"
            />
          </div>
        <Pagination currentPage="1" url="/ads/category" totalPages="5" />

        </div>
      </div>


    </div>
  );
};

export default page;