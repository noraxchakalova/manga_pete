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
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow hover:bg-blue-600 transition-colors duration-200"
          >
            Follow Now
          </a>
          <a
            href="/aboutme"
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 transition-colors duration-200"
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
            “Amazing art and character designs 🤌. Awesome work—keep it up 👏👏👏”
          </p>
          <div className="flex items-center justify-center">
            <img
              src="./rev.jpg"
              alt="Ruthless Render"
              className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-xl">Ruthless Render</p>
              <p className="text-gray-500">Manga Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
