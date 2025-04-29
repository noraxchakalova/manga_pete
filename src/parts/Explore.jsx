import React from 'react';

const Explore = () => {
    const handleSmoothScroll = (event) => {
        event.preventDefault(); 
        const targetElement = document.querySelector("#about-us");
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
            const offsetPosition = elementPosition - 120; 
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth", 
            });
        }
    };
  return (
    <section className="relative px-4 lg:px-24 py-12 bg-cover bg-center text-white" style={{ backgroundImage: "url('./2.jpg')", backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay' }}>
      <h1 className='text-center text-6xl font-bold'>Explore My Manga Collection</h1>
      <p className="mb-8 text-center text-2xl">Dive into my artistic world and read my latest mangas online. Each story is crafted with passion and creativity, waiting for you to discover.</p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      <a
                                href="/portfolio"
                                className="flex items-center justify-center gap-2 p-[10px_24px] rounded-[6px] bg-white text-black hover:bg-transparent hover:text-white font-medium transition-all duration-300 ease-in-out border-1 border-white"
                            >
                                View Portfolio 
                            </a>
                            <a
                                href="/portfolio"
                                className="flex border-1 border-white items-center justify-center gap-2 p-[10px_24px] rounded-[6px] bg-transparent text-white hover:bg-white hover:text-black font-medium transition-all duration-300 ease-in-out"
                                onClick={handleSmoothScroll} 
                            >
                                Read Now
                            </a>

      </div>
    </section>
  );
};

export default Explore;
