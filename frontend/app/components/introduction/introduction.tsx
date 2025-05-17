import React from "react";

export const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Video Section - Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[var(--light-gray)]">
        <div className="w-full h-full">
          <video className="w-full h-full object-cover" loop autoPlay muted>
            <source src="/kalamazoo-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Content Section - Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <header className="w-full max-w-[700px] text-center md:text-left">
          <h1 className="text-2xl font-bold text-[var(--orange-color)] md:text-5xl mb-6 leading-tight">
            EXCEPTIONAL TEAMS, EXCEPTIONAL OUTCOMES: IT THAT WORKS FOR YOU
          </h1>
          <p className="text-lg text-[var(--font-color-light)] mb-8 md:text-xl leading-relaxed">
            Dataprise delivers tailored IT solutions that keep business running
            smoothly. From cybersecurity and cloud to IT consulting and
            management, we provide managed and co-managed IT Services to fit
            your needs.
          </p>
          <button className="bg-[var(--orange-color)] hover:bg-[var(--light-orange)] text-white font-medium py-3 px-5 rounded-lg transition-colors">
            Book a Free Discovery Call
          </button>
        </header>
      </div>
    </div>
  );
};

export default Introduction;
