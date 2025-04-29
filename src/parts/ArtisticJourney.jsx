import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ArtisticJourney = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section ref={ref} className="artistic-journey-section lg:mt-40 mt-10 px-8 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img src="./pete-at-work.png" alt="Artistic Journey" className="w-[500px] lg:w-1/2 h-auto rounded-lg shadow-lg mb-8" />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-left text-black">Discover the <span className="text-blue-600 underline">Artistic Journey</span></h1>
          <p className="mb-8 text-black text-left text-[18px]">My creative process is a blend of inspiration and technique. I draw from personal experiences and cultural influences, crafting stories that resonate deeply with my readers. Each piece reflects a unique style that evolves with every project.</p>
          <div className="grid grid-cols-2 gap-8 text-black text-left text-[18px]">
            <div>
              <h3 className="text-2xl font-bold">
                {inView && <CountUp end={2} duration={2} />} works
              </h3>
              <p className="text-[14px]">2 unique manga pieces created, each telling a different story, and counting.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {inView && <CountUp end={5} duration={2} />} years
              </h3>
              <p className="text-[14px]">With over 5 years of experience, I continue honing my skills and developing a distinctive style.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {inView && <CountUp end={20} duration={2} />} characters
              </h3>
              <p className="text-[14px]">More than 20 characters brought to life, each with their own unique backstory.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {inView && <CountUp end={3} duration={2} />} series
              </h3>
              <p className="text-[14px]">Currently working on 3 ongoing project, each exploring different themes and genres. So please stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticJourney;
