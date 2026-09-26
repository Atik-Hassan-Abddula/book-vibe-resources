import Image from "next/image";
import Link from "next/link";
import React from "react";

const getExercise = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const CardPage = async () => {
  const fitlog = await getExercise();

  return (
    <div className="min-h-screen px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <span className="inline-block rounded-full bg-lime-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
            💪 Fitness Library
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            FitLog Exercises
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            Discover exercises, build strength, and improve your workout
            routine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {fitlog.map((exercise) => (
            <div
              key={exercise.id}
              className="group overflow-hidden rounded-2xl border border-[#292c31] bg-[#15171c] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-gray-600 hover:shadow-2xl"
            >

              {/* Image */}
              <figure className="relative h-52 w-full overflow-hidden bg-[#202329]">
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    ⭐ {exercise.rating}
                  </span>
                </div>
              </figure>

              {/* Card Body */}
              <div className="p-4">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                  {exercise.muscleGroups.map((muscle, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="mt-4 text-xl font-extrabold uppercase tracking-wide text-white">
                  {exercise.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-sm text-gray-400">
                  {exercise.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-[#30333a]" />

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400">

                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">◷</span>
                    <span>{exercise.duration} min</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">♥</span>
                    <span>{exercise.caloriesBurned} kcal</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">☆</span>
                    <span>{exercise.rating}</span>
                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between">

                  <div>
                    <p className="text-xs text-gray-500">
                      Difficulty
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {exercise.difficulty}
                    </p>
                  </div>

                  <Link
                    href={`/Card/${exercise.id}`}
                    className="rounded-xl bg-lime-400 px-4 py-2.5 text-xs font-bold uppercase text-black transition hover:bg-lime-300 hover:scale-105"
                  >
                    View Details
                  </Link>

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