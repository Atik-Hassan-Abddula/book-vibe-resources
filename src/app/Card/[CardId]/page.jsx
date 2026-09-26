import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicCard = async ({ params }) => {
  const { CardId } = await params;

  const res = await fetch(
    ` https://api.api-store.workers.dev/api/fitlog/${CardId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch exercise");
  }

  const exercise = await res.json();

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">

      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-2xl">

        <div className="grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative min-h-[420px] bg-base-200">

            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              className="object-cover"
              priority
            />

            {/* Difficulty */}
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                {exercise.difficulty}
              </span>
            </div>

            {/* Rating */}
            <div className="absolute right-5 top-5">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow">
                ⭐ {exercise.rating}
              </span>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center p-7 md:p-10">

            {/* Category */}
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Fitness Exercise
            </p>

            {/* Title */}
            <h1 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-500">
              {exercise.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {exercise.muscleGroups?.map((muscle, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary"
                >
                  💪 {muscle}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-base-300"></div>

            {/* Details */}
            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  🏋️ Equipment
                </span>

                <span className="text-sm font-bold">
                  {exercise.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  ⏱️ Duration
                </span>

                <span className="text-sm font-bold">
                  {exercise.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  🔥 Calories
                </span>

                <span className="text-sm font-bold">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  🔁 Sets × Reps
                </span>

                <span className="text-sm font-bold">
                  {exercise.sets} × {exercise.reps}
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">

              <Link
                href="/Card"
                className="btn btn-outline flex-1 rounded-xl"
              >
                ← Back
              </Link>

              <button className="btn btn-primary flex-1 rounded-xl">
                Start Workout
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DynamicCard;