import React, { useState } from 'react'
import ExercisesPage from './Pages/ExercisesPage'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Pages/Layout';
import Exercise from './Components/Exercise';
import ExerciseCard from './Components/ExerciseCard';
function App() {
  // const [Exercises, setExercises] = useState([]);
  // const [bodypart,setbodypart]=useState('all')
  
  return (
    <div className='text-white w-full h-screen  bg-black'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout  />}>
            {/* <Route index element={<Home setExercises ={setExercises} bodypart={bodypart} setbodypart={setbodypart} Exercises={Exercises} />} /> */}
            <Route index element={<Home  />} />
            <Route path='/Exercise/:id' element={<Exercise />} />

            <Route path="Exercises" element={<ExercisesPage/>}/>  
            {/* <Route path="Exercises" element={<ExercisesPage setExercises ={setexercises} bodypart={bodypart} Exercises={Exercises} />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
