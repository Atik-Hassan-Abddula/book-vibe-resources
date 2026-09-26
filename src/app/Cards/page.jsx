
import React from "react";
import Image from "next/image";
import logo from "../assets/hero_img.jpg";

const PageCrds = () => {
  return (
    <section className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-10 text-white shadow-2xl md:px-14 md:py-14">

      {/* Decorative Circle */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-sm" />

      <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">

          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
            📚 Explore • Read • Grow
          </span>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Books to
            <span className="block text-yellow-300">
              freshen up
            </span>
            your bookshelf
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 md:text-lg">
            Discover inspiring stories, timeless classics and amazing books
            that deserve a special place on your bookshelf.
          </p>

          <button className="group mt-7 rounded-full bg-white px-7 py-3 font-bold text-purple-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-purple-900">
            View The List
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-300/30 blur-3xl" />

          {/* Image Container */}
          <div className="relative rotate-3 overflow-hidden rounded-3xl border-4 border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur-sm transition duration-500 hover:rotate-0 hover:scale-105">

            <Image
              src={logo}
              width={320}
              height={320}
              alt="Books"
              className="h-64 w-64 rounded-2xl object-cover md:h-80 md:w-80"
            />

          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-3 text-purple-700 shadow-xl">
            <p className="text-xs font-medium text-gray-500">
              Your next
            </p>
            <p className="font-bold">
              Great Read 📖
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageCrds;

