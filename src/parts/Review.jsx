import React from 'react';

const Review = () => {
  return (
    <section className="bg-gray-100 py-12 text-black pt-20">
      <div className=" mx-auto px-4 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Connect with Me Online</h2>
        <p className="mb-8">Follow my artistic journey on social media to stay updated on new releases, events, and behind-the-scenes content. Join the community!</p>
        <div className="flex justify-center gap-4 mb-12">
          <a href='/contact' className="bg-blue-500 text-white px-6 py-2 rounded">Follow Now</a>
          <a href='/aboutme' className="border border-blue-500 text-blue-500 px-6 py-2 rounded">Learn More</a>
        </div>
        <div className="p-8">
          <div className="flex justify-center mb-4">
            <span className="text-2xl">★★★★★</span>
          </div>
          <p className="mb-4 text-center text-2xl">Amazing art and character designs 🤌. Awesome work keep it up 👏👏👏</p>
          <div className="flex items-center justify-center">
            <img src="./rev.jpg" alt="Ruthless Render" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-2xl text-left">Ruthless Render</p>
              <p className='text-left'>Manga Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
