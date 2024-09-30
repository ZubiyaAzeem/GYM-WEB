import React, { useEffect } from 'react'
import ExerciseCard from './ExerciseCard'
import { FetchData, exerciseoptions } from "../Utils/FetchData";

function Exercise({setexercises, bodypart,exercises}) {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodypart === 'all') {
        exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
      } else {
        exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseoptions);
      }

      setexercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodypart]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full  p-4'>
     {exercises.map((exercise,index)=>{
          return <ExerciseCard key={index} exercise={exercise} />
       // return <p key={index}>{exercise.name}</p>

     })}

      
    </div>
  )
}

export default Exercise
