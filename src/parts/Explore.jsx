import React from "react";

const Explore = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector("#about-us");
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('./cool-banner.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Explore My <span className="text-blue-500">Manga Collection</span>
        </h2>
        <p className="mt-4 text-white/80 text-lg sm:text-xl">
          Dive into my artistic world and read my latest mangas online. Each story is
          crafted with passion and creativity, waiting for you to discover.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md transition-colors duration-200"
          >
            View Portfolio
          </a>
          <a
            href="https://medibang.com/mpc/authors/26956722"
            onClick={handleSmoothScroll}
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-all duration-200"
          >
            Read Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
