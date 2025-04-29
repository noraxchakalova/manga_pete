import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FindMe = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="mx-auto px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className='flex lg:justify-start items-center justify-center'>
              <FaEnvelope className="text-white text-4xl mb-2" />
            </div>
            <h3 className="text-2xl font-bold">Email Me</h3>
            <p className='text-white text-[12px]'>
              For inquiries, collaborations, or just to say hello, feel free to reach out via email at 
              <a href="mailto:pvchakarov@gmail.com" className="text-blue-500">
                pvchakarov@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center lg:text-left">
            <div className='flex items-center justify-center lg:justify-start'>
              <FaMapMarkerAlt className="text-white text-4xl mb-2" />
            </div>
            <h3 className="text-2xl font-bold">Visit Us</h3>
            <p className='text-white text-[12px]'>
              If you're in the area, feel free to reach out, I am located in <strong>Varna, Bulgaria</strong>. We welcome fans and collaborators alike!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/place/TrakataPrimorski,+ul.+%2213-ta%22/@43.227084,27.9896172,17z/data=!3m1!4b1!4m6!3m5!1s0x40a4566051f8a26f:0xd6bcbf4e6cdeed0f!8m2!3d43.227084!4d27.9921921!16s%2Fg%2F11z5sf1yw?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindMe;
