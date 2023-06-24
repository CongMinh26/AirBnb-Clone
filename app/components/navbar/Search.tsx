"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div
      className="
            border-[1px] 
            cursor-pointer 
            py-2
            shadow-sm 
            hover:shadow-md 
            transition 
            rounded-full
            w-full
            md:w-auto
            "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">AnyWhere</div>
        <div className="text-sm font-semibold px-6 hidden flex-1 border-x-[1px] sm:block">
          Any week
        </div>
        <div className="text-sm text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 rounded-full bg-rose-100 text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
