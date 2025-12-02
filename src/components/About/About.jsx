import React from 'react';

const About = () => {
  return (
    <>
     <section
    id="about"
    className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 font-sans bg-skills-gradient clip-path-custom">
    <div  className="text-center   ">
      <h2 id="about"  className="text-3xl sm:text-4xl font-bold text-white">About</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Junior Frontend Developer with a strong foundation
            in modern web technologies. I enjoy building clean, responsive, and
            user-friendly interfaces that improve the overall user experience. I
            focus on writing maintainable code, learning new tools, and
            continuously improving my skills through real-world projects. I work
            mainly with HTML, CSS, JavaScript, and React, and I’m comfortable
            using Tailwind CSS, REST APIs, and version control with Git/GitHub.
            I love solving problems, collaborating with teams, and turning ideas
            into functional web applications. I’m always eager to learn, explore
            new technologies, and take on exciting challenges to grow as a
            developer.
          </p>
    </div>
    </section>
    </>
  );
};

export default About;