import React from 'react'
import { Link } from 'react-router-dom'
function ExerciseCard({exercise}) {
    console.log(exercise)
  return (
    <div className=' bg-black'>

     <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
     <div className=' py-6 px-5' >

     <img className='rounded-lg m-2' src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
     <button  className='text-sm bg-yellow-500 mt-4 mr-5 rounded-2xl px-3 py-2'>
      {exercise.bodyPart}
     </button>
     <button className=' text-sm bg-emerald-700 rounded-2xl  px-3 py-2'>
      {exercise.secondaryMuscles[0]}
     </button>
     </div>
      </Link>
    </div>
  )
}

export default ExerciseCard
