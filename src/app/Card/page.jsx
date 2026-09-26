
import Image from "next/image";
import React from "react";

const getExercise = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const CardPage = async () => {
  const fitlog = await getExercise();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-lg mb-3">
            💪 Fitness Library
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            FitLog Exercises
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500 md:text-lg">
            Discover exercises, build strength, and improve your workout
            routine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {fitlog.map((exercise) => (
            <div
              key={exercise.id}
              className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <figure className="relative h-60 w-full overflow-hidden">
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Difficulty */}
                <div className="absolute left-4 top-4">
                  <span className="badge badge-neutral bg-black/70 px-3 py-3 text-white backdrop-blur-sm">
                    {exercise.difficulty}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4">
                  <span className="badge badge-warning gap-1 px-3 py-3 font-semibold">
                    ⭐ {exercise.rating}
                  </span>
                </div>
              </figure>

              {/* Card Body */}
              <div className="p-6">

                {/* Title */}
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold leading-tight">
                    {exercise.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                  {exercise.description}
                </p>

                {/* Muscle Groups */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exercise.muscleGroups.map((muscle, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Exercise Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-base-200 p-3">
                    <p className="text-xs text-gray-500">
                      🏋️ Equipment
                    </p>
                    <p className="mt-1 line-clamp-1 text-sm font-semibold">
                      {exercise.equipment}
                    </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-3">
                    <p className="text-xs text-gray-500">
                      ⏱️ Duration
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {exercise.duration} min
                    </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-3">
                    <p className="text-xs text-gray-500">
                      🔥 Calories
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {exercise.caloriesBurned} kcal
                    </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-3">
                    <p className="text-xs text-gray-500">
                      🔁 Sets × Reps
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {exercise.sets} × {exercise.reps}
                    </p>
                  </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-6 flex items-center justify-between border-t border-base-300 pt-5">

                  <div>
                    <p className="text-xs text-gray-400">
                      Workout
                    </p>

                    <p className="font-bold text-primary">
                      {exercise.sets} Sets
                    </p>
                  </div>

                  <button className="btn btn-primary rounded-xl px-6 shadow-md transition hover:scale-105">
                    View Details →
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardPage;

