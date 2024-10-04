import React from "react";
import { Link } from "react-router-dom";
function ExerciseCard({ exercise }) {
  // console.log(exercise)
  return (
    <div className=" bg-black">
      <Link to={`/exercise/${exercise.id}`} className="  exercise-card">
        <div className="  ">
          <img
            className="rounded-lg m-2"
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
          />
          <p className="text-lg pt-1 pl-3 capitalize">{exercise.name}</p>
          <div className="flex px-3 py-3 items-center justify-between ">
            <button className="text-sm bg-yellow-500 whitespace-nowrap rounded-xl px-3 py-2">
              {exercise.bodyPart}
            </button>
            <button className=" text-sm bg-emerald-700  whitespace-nowrap rounded-xl  px-3 py-2">
              {exercise.secondaryMuscles[0]}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ExerciseCard;
