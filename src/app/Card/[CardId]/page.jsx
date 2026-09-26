import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicCard = async ({ params }) => {
  const { CardId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${CardId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch exercise");
  }

  const exercise = await res.json();

  return (
    <main className="min-h-screen bg-[#08090b] px-4 py-8 text-white md:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Main Details Card */}
        <div className="overflow-hidden rounded-2xl border border-[#292c31] bg-[#101216]">

          <div className="grid gap-8 p-4 md:p-6 lg:grid-cols-2">

            {/* ================= PHOTO ================= */}
            <div className="relative h-[450px] overflow-hidden rounded-xl bg-[#171a20] md:h-[580px]">

              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="flex flex-col">

              {/* Title */}
              <h1 className="text-3xl font-extrabold uppercase leading-tight md:text-4xl">
                {exercise.name}
              </h1>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {exercise.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exercise.muscleGroups?.map((muscle, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* ================= DETAILS ================= */}
              <div className="mt-5 overflow-hidden rounded-xl border border-[#292c31] bg-[#171a20]">

                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Equipment
                  </span>

                  <span className="text-sm">
                    {exercise.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Difficulty
                  </span>

                  <span className="text-sm">
                    {exercise.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Sets
                  </span>

                  <span className="text-sm">
                    {exercise.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Reps
                  </span>

                  <span className="text-sm">
                    {exercise.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Duration
                  </span>

                  <span className="text-sm">
                    {exercise.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Calories
                  </span>

                  <span className="text-sm">
                    {exercise.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-[11px] font-medium uppercase text-gray-500">
                    Rating
                  </span>

                  <span className="text-sm">
                    ⭐ {exercise.rating}
                  </span>
                </div>

              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-6">

                <h2 className="text-sm font-bold uppercase">
                  Instructions
                </h2>

                <div className="mt-3 space-y-3">

                  {exercise.instructions?.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="text-gray-600">
                        {index + 1}.
                      </span>

                      <p>{instruction}</p>
                    </div>
                  ))}

                </div>

              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-6 flex flex-wrap gap-3">

                <button className="rounded-xl bg-lime-400 px-5 py-3 text-xs font-bold text-black transition hover:bg-lime-300 hover:scale-105">
                  ✓ Add to today&apos;s plan
                </button>

                <button className="rounded-xl border border-[#3a3e46] px-5 py-3 text-xs font-medium text-gray-300 transition hover:bg-[#191c21]">
                  ♡ Save for later
                </button>

              </div>

            </div>
          </div>

          {/* ================= FOOTER ================= */}
          <div className="border-t border-[#202329] px-6 py-5">

            <div className="flex items-center justify-between">

              <span className="text-xs font-bold text-lime-400">
                ⚡ FITLOG
              </span>

              <span className="text-[10px] text-gray-600">
                © 2026 FitLog — Workout Library. Train hard, log honest.
              </span>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default DynamicCard;