import React, { useState } from "react";
import Exercise from "../Components/Exercise";
import Search from "../Components/Search";
import ExerciseDetails from "./ExerciseDetails";
function Home() {
  const [exercises, setexercises] = useState([]);
  const [bodypart, setbodypart] = useState("all");
  return (
    <div className="relative z-0  bg-black">
      {/* Banner Image Section */}
      <div className="relative h-[95vh] overflow-hidden z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
        />
      </div>

      {/* Search and Exercise Section (after the image) */}
      <div className="relative z-20 px-10 bg-black-50 py-10">
        <Search
          setexercises={setexercises}
          bodypart={bodypart}
          setbodypart={setbodypart}
          exercise={exercises}
        />
        <div className="w-full">
          <h2 className="text-4xl py-6 text-center  font-semibold">Exercise</h2>
          {/*Exercise section content here */}

          <Exercise
            setexercises={setexercises}
            bodypart={bodypart}
            exercises={exercises}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
