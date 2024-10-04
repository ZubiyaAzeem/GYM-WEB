import React from "react";

function Details({ ExerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = ExerciseDetail;
  console.log(gifUrl);
  const extraDetail = [
    {
      icon: "BodyPartImage",
      name: bodyPart,
    },
    {
      icon: "TargetImage",
      name: target,
    },
    {
      icon: "EquipmentImage",
      name: equipment,
    },
  ];

  return (
    <div className="flex px-10 w-full justify-between  py-6 ">
      <img className="w-[35vw] h-[35vw] rounded-lg " src={gifUrl} alt="" />
      <div className="  ml-8  ">
        <h1 className="text-5xl inline-block py-8 font-semibold capitalize">
          {name}
        </h1>

        <p className="w-[50%]">
          Exercises keep you strong.{name} {""} is one of the best exercises to
          target your{target}.It will help you improve your mood and gain
          energy.
        </p>
        {extraDetail?.map((item, index) => {
          return (
            <div className="flex mt-9 gap-3" key={index}>
              <p>{item.icon}</p>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
