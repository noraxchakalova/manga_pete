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
              For inquiries, collaborations, or just to say hello, feel free to reach out via email at{' '} 
               <a href="mailto:pvchakarov@gmail.com" className="text-[#ED6665]">
                 pvchakarov@gmail.com
               </a>
            </p>
          </div>
          <div className="text-center lg:text-left">
            <div className='flex items-center justify-center lg:justify-start'>
              <FaMapMarkerAlt className="text-white text-4xl mb-2" />
            </div>
            <h3 className="text-2xl font-bold">Studio Location</h3>
            <p className='text-white text-[12px]'>
              If you're in the area, feel free to reach out, I am located in <strong>Varna, Bulgaria</strong>. We welcome fans and collaborators alike!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.161000508127!2d27.989617176351757!3d43.227083971125474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4566051f8a26f%3A0xd6bcbf4e6cdeed0f!2sTrakataPrimorski%2C%20ul.%20%2213-ta%22!5e0!3m2!1sen!2sbg!4v1745953174718!5m2!1sen!2sbg"
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
