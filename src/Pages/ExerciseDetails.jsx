import React, { useState } from "react";
import Details from "../Components/Details";
import ExercisesVideos from "../Components/ExercisesVideos";
import SimilarExercises from "../Components/SimilarExercises";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { TbBrandQq } from "react-icons/tb";
import { exerciseoptions, FetchData, youtubeoptions } from "../Utils/FetchData";
function ExerciseDetails() {
  const [ExerciseDetail, setExerciseDetail] = useState({});
  const [ExerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const YoutubeSearch =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseoptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await FetchData(
        `${YoutubeSearch}/search?query=${exerciseDetailData.name}`,
        youtubeoptions
      );
      setExerciseVideos(exerciseVideoData.contents);
      // console.log(exerciseVideoData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <div>
      <Details ExerciseDetail={ExerciseDetail} />
      <ExercisesVideos ExerciseVideos={ExerciseVideos} name={ExerciseDetail.name} />
      <SimilarExercises />
    </div>
  );
}

export default ExerciseDetails;
