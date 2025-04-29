import React from "react";

const Hero = () => {
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
        <div className="">
            <div className="relative w-full h-[100vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('./hero.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="relative w-full flex gap-[32px] h-full text-white px-4 lg:px-24 mx-auto items-center"
                    style={{ zIndex: "9" }}
                >
                    <div>
                        <div className="md:w-[70%] w-full">
                            <h1 className="lg:text-[61px] lg:leading-[72px] font-bold md:text-[39px] md:leading-[50px] text-[44.25px] leading-[45px] text-left">
                            Welcome to <span className="text-blue-600 underline">manga_pete's</span> Portfolio
                            </h1>
                        </div>
                        <div className="flex gap-3 mt-8 md:gap-6">
                            <a
                                href="/portfolio"
                                className="flex items-center justify-center gap-2 p-[10px_24px] rounded-[6px] bg-white text-black hover:bg-transparent hover:text-white font-medium transition-all duration-300 ease-in-out border-1 border-white"
                            >
                                View Portfolio 
                            </a>
                            <a
                                href="/aboutme"
                                className="flex border-1 border-white items-center justify-center gap-2 p-[10px_24px] rounded-[6px] bg-transparent text-white hover:bg-white hover:text-black font-medium transition-all duration-300 ease-in-out"
                                onClick={handleSmoothScroll} 
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
