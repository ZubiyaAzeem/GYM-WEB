import React, { useRef } from "react";
// import { CgGym } from "react-icons/cg";
import { TbBuildingStore } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function HorizontalScrollbar({ data, setexcercises, bodypart, setbodypart }) {
  const scrollRef = useRef(null);

  // Scroll left or right by a certain amount
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -200, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-gray-300/80 hover:bg-gray-400 rounded-full p-2"
      >
        <MdKeyboardArrowLeft size={30} />
      </button>

      <div  ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              //console.log(item)
              setbodypart(item);
              window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
            className={`border ${
              bodypart === item ? "bg-violet-950/90" : ""
            } hover:bg-violet-950 cursor-pointer rounded-lg text-center flex-col justify-center items-center  px-10 py-10 `}
          >
            <div className="w-32 ">
              <div className="text-5xl text-violet-600/75 translate-x-10 ">
                {/* <CgGym /> */}
                <TbBuildingStore />
              </div>
              <h1 className="text-xl capitalize">{item}</h1>
            </div>
          </div>
        );
      })}
    </div>
    <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-gray-300/80 hover:bg-gray-400 rounded-full p-2"
      >
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
}

export default HorizontalScrollbar;
