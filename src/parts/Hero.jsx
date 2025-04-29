import React from "react";

const Hero = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector("#about-us");
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./hero.png')" }}>
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 lg:px-24 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Welcome to <span className="text-coral ">manga_pete&apos;s</span> Portfolio
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl">
            Dive into my creative world of manga art, stories, and inspirations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="px-6 py-3 ./src/parts/Hero.jsx hover:bg-coral text-white font-semibold rounded-md shadow-md transition-colors duration-200"
            >
              View Portfolio
            </a>
            <a
              href="/aboutme"
              onClick={handleSmoothScroll}
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-md transition-all duration-200"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
