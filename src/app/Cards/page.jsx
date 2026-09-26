import React from "react";
import Image from "next/image";
import logo from "../assets/banner.png";
const PageCrds = () => {
  return (
    <section className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-6 text-white shadow-xl md:px-10 md:py-7">
      {" "}
      {/* Background Decoration */}{" "}
      <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10" />{" "}
      <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-pink-300/10 blur-2xl" />{" "}
      <div className="relative z-10 flex items-center justify-between gap-6">
        {" "}
        {/* Left Content */}{" "}
        <div className="max-w-xl">
          {" "}
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
            {" "}
            📚 WORKOUT LIBRARY{" "}
          </span>{" "}
          <h1 className="mt-3 text-2xl font-extrabold leading-tight md:text-4xl">
            {" "}
            TRAIN WITH INTENT. LOG <br />
         EVERY SET. <span className="text-yellow-300">  </span> 
             <br />{" "}
          </h1>{" "}
          <p className="mt-2 hidden text-sm text-white/75 sm:block">
            {" "}
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.{" "}
          </p>{" "}
          <button className="group mt-4 rounded-full bg-white px-5 py-2 text-sm font-bold text-purple-700 shadow-md transition hover:-translate-y-1 hover:bg-yellow-300">
            {" "}
            BROWSE WORKOUTS{" "}
          </button>{" "}
        </div>{" "}
        {/* Right Image */}{" "}
        <div className="relative shrink-0">
          {" "}
          {/* Glow */}{" "}
          <div className="absolute inset-0 rounded-full bg-yellow-300/30 blur-2xl" />{" "}
          <div className="relative rotate-3 overflow-hidden rounded-2xl border-2 border-white/30 bg-white/10 p-2 shadow-xl transition duration-300 hover:rotate-0">
            {" "}
            <Image
              src={logo}
              width={190}
              height={150}
              alt="Books"
              className="h-28 w-36 rounded-xl object-contain md:h-36 md:w-48"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default PageCrds;
