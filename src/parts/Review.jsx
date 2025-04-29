import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Review = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Connect with Me Online</h2>
        <p className="text-gray-600 mb-8">
          Follow my artistic journey on social media to stay updated on new releases, events, and behind-the-scenes content. Join the community!
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="/contact"
            className="px-6 py-3 bg-[#ED6665] hover:bg-[#D45553] text-white font-medium rounded-full shadow  transition-colors duration-200"
          >
            Follow Now
          </a>
          <a
            href="/aboutme"
            className="px-6 py-3 border-2 border-[#ED6665] text-[#ED6665] font-medium rounded-full hover:bg-[#D45553] transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="flex justify-center mb-4 text-yellow-400">
            <FaStar className="mx-1 text-2xl" />
            <FaStar className="mx-1 text-2xl" />
            <FaStar className="mx-1 text-2xl" />
            <FaStar className="mx-1 text-2xl" />
            <FaStarHalfAlt className="mx-1 text-2xl" />
          </div>
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            “I see you got tricks up you're sleeve Good stuff”
          </p>
          <div className="flex items-center justify-center">
            <img
              src="./kongo.jpg"
              alt="jonathan_Maz243"
              className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-xl">jonathan_Maz243</p>
              <p className="text-gray-500">Manga Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
