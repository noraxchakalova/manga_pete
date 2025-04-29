import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
            Explore My <span className="text-blue-600 underline">Artistic Journey</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join me as I share my experiences and the inspirations that have shaped my artistic path. From my early days of sketching to the creation of my unique manga style, every moment has been a stepping stone in my journey.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
          >
            View Portfolio
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="./pete.png"
            alt="Artistic Journey"
            className="w-full max-w-md rounded-xl shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
