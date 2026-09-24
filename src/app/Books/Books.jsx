import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Bookscard from '../Components/Books.card';

const getBooks = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};

const Books = async () => {
    const books = await getBooks();

    return (
        <div className="container mx-auto px-11 py-10">
            {/* Page Title & Count Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Exercise Catalog
                </h1>
                <span className="bg-indigo-50 text-indigo-700 font-bold px-4 py-1.5 rounded-full text-sm border border-indigo-100">
                    {books.length} Total Exercises
                </span>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book )  => (
                    <div 
                        key={book.id} 
                        className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 rounded-2xl overflow-hidden group flex flex-col justify-between"
                    >
                        <div>
                            {/* Image Container with Badges */}
                            <figure className="relative h-52 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={book.image}
                                    alt={book.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap z-10">
                                    <span className="bg-indigo-600 text-white font-semibold px-2.5 py-1 text-xs rounded-lg shadow-md">
                                        {book.difficulty}
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 font-bold px-2.5 py-1 rounded-lg text-xs shadow flex items-center gap-1 z-10">
                                    ⭐ <span>{book.rating}</span>
                                </div>
                            </figure>

                            {/* Content Body */}
                            <div className="p-5">
                                {/* Muscle Target Tags */}
                                <div className="flex gap-1.5 mb-2 flex-wrap">
                                    {book.muscleGroups?.map((muscle, idx) => (
                                        <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                                            {muscle}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                    {book.name}
                                </h2>

                                <p className="text-slate-500 text-xs line-clamp-2 mt-2 leading-relaxed">
                                    {book.description}
                                </p>

                                {/* Key Stats Bar */}
                                <div className="grid grid-cols-3 gap-1 py-2.5 px-2 my-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <div>
                                        <span className="block text-[10px] text-slate-400 font-medium">Sets & Reps</span>
                                        <span className="font-bold text-slate-800 text-xs">{book.sets} × {book.reps}</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-slate-400 font-medium">Time</span>
                                        <span className="font-bold text-slate-800 text-xs">{book.duration}m</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-slate-400 font-medium">Burn</span>
                                        <span className="font-bold text-slate-800 text-xs">{book.caloriesBurned} kcal</span>
                                    </div>
                                </div>

                                {/* Equipment Tag */}
                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                    <span className="font-semibold text-slate-700">Equipment:</span> 
                                    <span className="truncate">{book.equipment}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Footer */}
                        <div className="p-5 pt-0">
                            <Link href={`/Books/${books.id}`}>
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-semibold py-2.5 rounded-xl shadow-md shadow-indigo-100 transition-all">
                                View Exercise Details
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;