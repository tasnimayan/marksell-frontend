import { GrPowerReset } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";



const Sidebar = () => {
  return (
    <div>

<div class="px-4">
  <div className="mt-3">
    <div class="listings-sidebar">
      <div class="relative flex flex-col rounded-xl bg-white shadow-lg p-6">
        <h4 className='flex gap-x-2 text-xl font-semibold'>
          <img src="/images/img_iocn_menu_24.svg" alt="details-icon" /> Filter
        </h4>
        <hr className="my-6" />
        <form>
          <div class="filter-content looking-input mb-6">
            <input type="text" class="block w-full p-3 text-base leading-normal text-gray-800 border border-gray-200 rounded-lg" placeholder="What are you looking for?"/>
          </div>
          <div class="filter-content mb-6">
            <select class="block appearance-none w-full py-2 px-3 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded-md ">
              <option value="">Choose Category</option>
              <option>Computer</option>
              <option>Electronics</option>
              <option>Car wash</option>
            </select>
          </div>
          <div class="filter-content looking-input mb-4 input-placeholder">
            <div class="group-img">
              <input type="text" class="block w-full p-3 text-base leading-normal text-gray-800 border border-gray-200 rounded-lg" placeholder="Where to look?"/>
              <i class="feather-map-pin"></i>
            </div>
          </div>
          <div class="mb-4">
            <select class="block appearance-none w-full py-2 px-3 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded-md">
              <option value="">Region</option>
              <option>Canada</option>
              <option>USA</option>
              <option>india</option>
            </select>
          </div>
          <div class="mb-4">
            <h4 className='text-xl font-semibold my-4'> Amenities</h4>
            <ul className='text-gray-400 space-y-2'>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="wireless-internet" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Wireless Internet </label>
              </li>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="accept-credit-card" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Accepts Credit Cards </label>
              </li>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="Coupouns" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Coupouns </label>
              </li>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="parking-street" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Parking Street </label>
              </li>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="bike-parking" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Bike Parking </label>
              </li>
              <li>
                <label class="custom_check">
                  <input type="checkbox" name="Smoking-Allowed" className='w-4 h-4 accent-rose-700 me-2'/>
                  <span class="checkmark"></span> Smoking Allowed </label>
              </li>
            </ul>
          </div>

          <div class="filter-content amenities mb-0">
            <h4 className='text-xl font-semibold my-4'> Price Range</h4>
            <div class="flex gap-3 my-5">
              <input type="text" class="block w-full p-3 text-base leading-normal text-gray-800 border border-gray-200 rounded-lg" placeholder="Min"/>
              <input type="text" class="block w-full p-3 text-base leading-normal text-gray-800 border border-gray-200 rounded-lg" placeholder="Max"/>
            </div>
            <div>
              <button class="w-full text-lg border border-rose-700 font-normal rounded-lg py-3 bg-rose-700 text-white hover:bg-white hover:text-black transition-colors duration-500 flex items-center justify-center" type="submit">
                <IoSearch className="mr-2"/> Search </button>

              <button class="w-full text-lg border font-normal py-3 mt-4 rounded-lg hover:bg-rose-700 hover:text-white transition-colors duration-500 flex items-center justify-center" type="submit">
                <GrPowerReset className="text-sm mr-2 mt-1"/> Reset Filters </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Sidebar;