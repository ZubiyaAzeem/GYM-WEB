import React from "react";

function ExercisesVideos({ ExerciseVideos, name }) {
  console.log(ExerciseVideos);
  return (
    <div className="w-full bg-black px-7">
      <h1 className="py-4 text-2xl capitalize">Watch {name} videos</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  ">
        {ExerciseVideos.map((item, index) => (
          <div className="py-3 rounded-lg " key={index}>
            <a
              key={index}
              target="_blank"
              rel="noreferrer"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
            <h1 className="font-semibold ">{item.video.title}</h1>
            <p className="text-sm py-2 text-gray-500">
              {item.video.channelName}
            </p>
          </div>
        ))}

        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}

export default ExercisesVideos;
