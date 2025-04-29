import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FindMe = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className=" mx-auto px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className='flex lg:justify-start items-center justify-center'>
            <FaEnvelope className="text-white text-4xl mb-2" />
            </div>
            <h3 className="text-2xl font-bold">Email Us</h3>
            <p className='text-white text-[12px]'>For inquiries, collaborations, or just to say hello, feel free to reach out via email at <a href="mailto:" className="text-blue-500">pvchakarov@gmail.com</p>
          </div>
          <div className="text-center lg:text-left">
            <div className='flex items-center justify-center lg:justify-start'>
            <FaMapMarkerAlt className="text-white text-4xl mb-2" />
            </div>
            <h3 className="text-2xl font-bold">Visit Us</h3>
            <p className='text-white text-[12px]'>If you're in the area, feel free to visit us at our studio located at <strong>Shibuya 1-1-1, Tokyo, Japan</strong>. We welcome fans and collaborators alike!</p>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.970370484634!2d139.6983823152583!3d35.66287428019959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9b2f8f6e4f%3A0x2e9b1d7f2f8f6e4f!2sShibuya%201-1-1%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1616581234567!5m2!1sen!2sus"
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
