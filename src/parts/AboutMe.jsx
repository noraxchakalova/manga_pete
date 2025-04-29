import React from 'react';

const About = () => {
  return (
    <section className="about-section mt-30 px-8 lg:px-8 lg:px-24 py-12">
        <div className='flex flex-col items-center lg:flex-row'>
            <h1 className="text-4xl lg:w-1/2 font-bold mb-4 text-left text-black">Explore My <span className="text-blue-600 underline">Artistic Journey</span></h1>
            <p className="mb-8 lg:w-1/2 text-black text-left text-lg">Join me as I share my experiences and the inspirations that have shaped my artistic path. From my early days of sketching to the creation of my unique manga style, every moment has been a stepping stone in my journey.</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src="./pete.png" alt="Artistic Journey" className="w-[400px] h-auto rounded-lg shadow-lg" />
      </div>
      
    </section>
  );
};

export default About;
