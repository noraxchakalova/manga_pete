// import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const MeetTheArtist = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animate only once
    threshold: 0.6,     // 30% of section visible before triggering
  });

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-12 bg-white lg:gap-40"
    >
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-left text-black">Meet the Artist</h2>
          <p className="mb-8 text-black text-left text-[18px] leading-relaxed">
                Hi, my name is <span className="font-semibold text-indigo-600">Pete</span>. I'm an up-and-coming manga artist!
                <br />
                <br />
                Thank you so much for reading any of my works — it truly means the world to me.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black text-left text-[18px]">
          <div>
            <h3 className="text-2xl font-bold">
              {inView && <CountUp end={5} duration={2} />} years
            </h3>
            <p className='text-[14px]'>With over 5 years of experience, I am constantly working to master the art of manga, blending traditional techniques with modern storytelling.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {inView && <CountUp end={2} duration={2} />} mangas
            </h3>
            <p className='text-[14px]'> I am still growing my portfolio, but I upload new chapters, oneshots and fanart frequently, so make sure to check regularly!</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {inView && <CountUp end={250} duration={2} />} fans
            </h3>
            <p className='text-[14px]'>Join a growing community of over 250 fans who appreciate the artistry and storytelling of my work.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Open to collaborations
            </h3>
            <p className='text-[14px]'>Collaborate with me on exciting projects, I am open to both partnerships and commissions!</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src="./pfp.jpg" alt="Artist" className="w-[500px] h-auto" />
      </div>
    </section>
  );
};

export default MeetTheArtist;
