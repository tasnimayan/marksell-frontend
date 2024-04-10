import {FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { Link } from 'next/link';

const SortMenu = () => {
  return (
    <div className="flex flex-wrap justify-end mb-4">
      {/* <div className="w-1/3 flex items-center">
          <p>Showing <span>1-8</span> of 10 Results </p>
      </div> */}
      <div className="flex items-center gap-3">
        <span className="">Sort by</span>
        <div className="sorting-select">
          <select className="block p-3 text-base leading-normal text-gray-800 border border-gray-200 outline-none rounded-lg">
            <option>Default</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        <a href="/" className="w-12 h-12 border bg-secondary flex items-center justify-center rounded-lg text-white">
          <FaList />
        </a>

        <a className="w-12 h-12 border border-gray-300 hover:bg-secondary flex items-center justify-center rounded-lg " href="/">
          <IoGridOutline />
        </a>
      </div>
    </div>
  );
};

export default SortMenu;