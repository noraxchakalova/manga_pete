import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const portfolioData = {
  mangas: [
    {
      title: 'Heartless',
      genres: 'Action, Horror',
      image: './heartless.png',
      link: 'https://medibang.com/mpc/episodes/n12502150022511520026956722/',
      tags: ['Heartless', 'DarkFantasy'],
    },
  ],
  oneshots: [
    {
      title: 'Bloody Chains',
      genres: 'Action, Sci-Fi',
      image: './bloodychains.png',
      link: 'https://medibang.com/mpc/episodes/v72501150235087370026956722/',
      tags: ['BloodyChains', 'Sci-Fi', 'Thriller'],
    },
  ],
  fanart: [
    {
      title: 'DanDaDan Tribute',
      genres: 'Fanart',
      image: './dandadan.png',
      link: 'https://www.instagram.com/p/DBgmXiZNdwq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      tags: ['DanDaDan', 'Fanart'],
    },
    {
      title: 'Cowboy Bebop Tribute',
      genres: 'Fanart',
      image: './cowboybebop.png',
      link: 'https://www.instagram.com/p/DHbFKH4stNn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      tags: ['Cowboy Bebop', 'Fanart'],
    },
  ],
};

const Portfolio = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
          My Portfolio
        </h2>

        {Object.entries(portfolioData).map(([section, items]) => (
          <div key={section} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
              {section}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.genres}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#ED6665] hover:underline"
                  >
                    {section === 'fanart' ? 'View Now' : 'Read Now'}
                  </a>
                  <div className="mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center mr-2 text-gray-500 text-xs"
                      >
                        <FaHashtag className="mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
