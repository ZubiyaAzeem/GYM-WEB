import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FetchData, exerciseoptions } from "../Utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function Search({ setexercises, exercises, bodypart, setbodypart }) {
  const [Search, setsearch] = useState("");

  const [bodyparts, setbodyparts] = useState([]);
  //const [ishover,setishover] = useState(false)

  useEffect(() => {
    const fetchExcersises = async () => {
      const bodypartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );

      setbodyparts(["all", ...bodypartsData]);
    };
    fetchExcersises();
  }, []);

  const handleSearch = async () => {
    if (Search) {
      const excersiseData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseoptions
      );

      //console.log(excersiseData);
      //  const searchedExercises = excersiseData.filter(
      //   (item) => item.name.toLowerCase().includes(Search)
      //          || item.target.toLowerCase().includes(Search)
      //          || item.equipment.toLowerCase().includes(Search)
      //          || item.bodyPart.toLowerCase().includes(Search),
      // );

      const searchedExercises = Search.trim()
        ? excersiseData.filter(
            (item) =>
              item.name.toLowerCase().includes(Search.toLowerCase().trim()) ||
              item.target.toLowerCase().includes(Search.toLowerCase().trim()) ||
              item.equipment
                .toLowerCase()
                .includes(Search.toLowerCase().trim()) ||
              item.bodyPart.toLowerCase().includes(Search.toLowerCase().trim())
          )
        : excersiseData;

      //console.log(searchedExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setsearch("");
      setexercises(searchedExercises);
      //console.log(exercises);
    }
  };


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {

      handleSearch(); // Call the search function when "Enter" is pressed
    }
  }

  return (
    <div>
      <div className="mb-4 ">
        <div className="w-full  justify-center flex ">
          <h2 className="text-3xl w-80 	  font-semibold text-center py-8">
            Awsome Excersises you should know
          </h2>
        </div>
        <div className="flex w-full justify-center items-center  gap-3 ">
          <div className="  py-4">
            <input
              className="w-[50vw] text-white bg-black border rounded-lg px-2 py-2"
              type="text"
              value={Search}
              onChange={(e) => setsearch(e.target.value.toLowerCase())}
              onKeyDown={handleKeyPress}
              placeholder="Search Excersise"
            />
          </div>
          <div className="text-3xl ">
            <button
              className="border px-2 py-1 hover:bg-violet-600 rounded-lg"
              onClick={handleSearch}
            >
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <HorizontalScrollbar
          data={bodyparts}
          setexercises={setexercises}
          bodypart={bodypart}
          setbodypart={setbodypart}
        />
        {/* <h1>Results</h1> */}

        {/* <Excersise   setexercises={setexercises}
          bodypart={bodypart}
          exercises={exercises} /> */}
      </div>
    </div>
  );
}

export default Search;
