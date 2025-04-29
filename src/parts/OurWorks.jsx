import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const works = [
  {
    title: 'Heartless',
    description: `A small group of people are trapped in a destroyed city surrounded by enormous crystals. The only way for them to get rations is the "packages" dropped by planes. Dr. Akira and his son Ray fight to survive and uncover a way out of their nightmare.`,
    genres: ['Action', 'Horror'],
    release: '2025-02-15',
    image: './heartless.png',
    link: 'https://medibang.com/mpc/episodes/n12502150022511520026956722/',
  },
  {
    title: 'Bloody Chains',
    description: `In a distant realm, a man and a girl wage a deadly battle. Their fates entwine in a twist that reveals more than just survival.`,
    genres: ['Action', 'Sci-Fi'],
    release: '2025-01-15',
    image: './bloodychains.png',
    link: 'https://medibang.com/mpc/episodes/v72501150235087370026956722/',
  },
];

const OurWorks = () => (
  <section className="bg-gray-50 py-12 px-4 lg:px-20">
    <div className="max-w-3xl mx-auto text-center mb-8">
      <h2 className="text-2xl text-gray-700 uppercase tracking-wider">
        My Works
      </h2>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Explore the Collection
      </h1>
      <p className="mt-3 text-gray-600 text-base">
        Dive into captivating manga stories that reflect creativity and passion.
      </p>
    </div>

    <div className="space-y-12">
      {works.map((work, idx) => (
        <div
          key={work.title}
          className={`grid gap-6 items-center lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="flex justify-center">
            <img
              src={work.image}
              alt={work.title}
              className="w-full max-w-xs rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {work.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm leading-normal">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-3 items-center mb-4 text-xs text-gray-500">
              <span>
                <FaHashtag className="inline mr-1" />
                {work.genres.join(', ')}
              </span>
              <span>
                <FaHashtag className="inline mr-1" />
                Released: {work.release}
              </span>
            </div>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-150 text-sm"
            >
              View Project ➔
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurWorks;
