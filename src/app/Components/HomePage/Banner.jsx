import Image from 'next/image';
import React from 'react';
import banner from "../../assets/hero_img.jpg";

const HomePage = () => {
    return (
        <div className='flex justify-between gap-4 items-center container mx-auto px-11 py-16 bg-gradient-to-r from-slate-50 to-indigo-50/50 rounded-3xl my-8 shadow-sm border border-slate-100/80'>
            <div className='max-w-xl space-y-6'>
                <h2 className='font-extrabold text-5xl tracking-tight text-slate-900 leading-tight drop-shadow-sm'>
                    Books to fresh up your bookshelf
                </h2>
                <button className='btn btn-active bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 ease-in-out border-none uppercase tracking-wider text-sm cursor-pointer'>
                    View The List
                </button>
            </div>
            <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300'></div>
                <Image 
                    src={banner} 
                    width={400} 
                    alt='Bookshelf hero banner' 
                    className='relative rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 object-cover'
                />
            </div>
        </div>
    );
};

export default HomePage;