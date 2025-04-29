import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const OurWorks = () => {
  return (
    <section className="px-4 lg:px-24 py-12 bg-white text-black">
        <h1 className='text-left'>MY WORKS</h1>
      <h2 className="text-4xl font-bold mb-4 mt-4 text-left">Explore the Collection</h2>
      <p className="mb-8 text-left">Dive into our captivating manga stories that reflect creativity and passion.</p>
      <span className='block w-full h-[2px] bg-black mt-2 mb-10'></span>
      <div className="flex flex-col lg:gap-40 lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-left">
          <h3 className="text-2xl font-bold">The Lost Samurai</h3>
          <p className="mb-4 text-[14px]">A small group of people are
trapped in a destroyed city
surrounded by enormous
crystals. The only way for them
to get rations is the "packages"
that are dropped by planes,
rarely flying over the city.
This wouldn't be a problem if they
were the only one that wanted to
get them...

Akira is a doctor trying his hardest
to keep everybody alive. He and his
son Ray are dead set on surviving
this harsh world and one day
finding a way out of this nightmare.</p>
          <p className="mb-4 text-[14px]"><FaHashtag className="inline text-black" /> Genre: Action, Horror <FaHashtag className="inline text-black" /> Release Date: 2025-02-15 <FaHashtag className="inline text-black" /> Read Online</p>
          <a href="https://medibang.com/mpc/episodes/n12502150022511520026956722/" className="text-blue-500 hover:underline text-[18px]">View Project ➔</a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="./heartless.png" alt="The Lost Samurai" className="w-[350px] h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <span className='block w-full h-[2px] bg-black mt-10 mb-10'></span>
      <div className="flex flex-col lg:gap-40 lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-left">
          <h3 className="text-2xl font-bold">Bloody Chains</h3>
          <p className="mb-4 text-[14px]">In a distant world, a man and a girl are in a fight to the death. They give it all they've got and then it's revealed that...</p>
          <p className="mb-4 text-[14px]"><FaHashtag className="inline text-black" /> Genre: Action, Sci-Fi <FaHashtag className="inline text-black" /> Release Date: 
          2025-01-15 <FaHashtag className="inline text-black" /> Read Online</p>
          <a href="https://medibang.com/mpc/episodes/v72501150235087370026956722/" className="text-blue-500 hover:underline text-[18px]">View Project ➔</a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="./bloodychains.png" alt="The Lost Samurai" className="w-[350px] h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
