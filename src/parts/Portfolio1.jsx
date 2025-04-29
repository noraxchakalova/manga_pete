import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const Portfolio1 = () => {
  return (
    <section className="portfolio-section mt-30 px-8 lg:px-24 py-12">
        <div className="flex items-center justify-center">
        <img src="./port.webp" alt="Manga Collection" className="w-[800px] h-auto rounded-lg shadow-lg mb-8" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className='lg:w-1/2'>
                <h1 className="text-4xl font-bold mb-4 text-left text-black">Explore My Manga</h1>
                <p className="mb-8 text-black text-left text-lg">Dive into my captivating stories and stunning artwork. Each manga is a journey waiting for you to discover. Click to read online!</p>
                <p className="mb-4 text-[14px]"><FaHashtag className="inline text-black" /> Heartless <FaHashtag className="inline text-black" /> Bloody Chains </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 text-black text-left text-lg">
                <div>
                <h3 className="text-2xl font-bold">Heartless</h3>
                <p>Action, Horror</p>
                </div>
                <div>
                <h3 className="text-2xl font-bold">Bloody Chains</h3>
                <p>Action, Sci-Fi</p>
                </div>
                <div>
                <h3 className="text-2xl font-bold">Read Online</h3>
                <p>Enjoy the journey!</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Portfolio1;
