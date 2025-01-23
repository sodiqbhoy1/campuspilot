import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative text-white bg-[#035140] py-20 sm:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/bg-about.svg")' }}></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center sm:py-48">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            About Campus Pilot
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium text-white opacity-90 max-w-3xl mx-auto">
            Revolutionizing the way schools manage their operations with intelligent, seamless, and user-friendly solutions.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Our Mission
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Our mission is to simplify and enhance the management of educational institutions. By providing schools with a smart platform, we help streamline operations, improve efficiency, and empower educators.
          </p>

          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
              Our Vision
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto">
              We envision a world where technology enhances education. With Campus Pilot, we aim to build a future where educational institutions are empowered to efficiently manage their resources, foster innovation, and achieve new heights in learning outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-32 bg-[#f9f9f9]">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Our Story
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Campus Pilot was founded with one goal: to revolutionize how schools manage their operations. We bring together a team of passionate technologists, educators, and designers to create a platform that is not only effective but also intuitive and easy to use. Our platform empowers schools to better manage their resources, improve administrative workflows, and enhance student engagement.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Our Core Values
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
              <h3 className="text-xl font-semibold text-[#035140]">Innovation</h3>
              <p className="mt-4 text-gray-600">
                We drive innovation by integrating the latest technologies to improve the educational experience for all stakeholders.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
              <h3 className="text-xl font-semibold text-[#035140]">Collaboration</h3>
              <p className="mt-4 text-gray-600">
                We value teamwork, and believe that collaboration with educators, administrators, and students leads to greater success.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
              <h3 className="text-xl font-semibold text-[#035140]">Efficiency</h3>
              <p className="mt-4 text-gray-600">
                Our platform is designed to streamline tasks, automate workflows, and ultimately save time for both educators and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-[#035140] text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Join Us in Transforming Education
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
          Start using Campus Pilot today and experience the future of school management. Empower your school with the best-in-class solutions to thrive in the modern educational landscape.
        </p>
        <div className="mt-8">
          <a
            href="#register"
            className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
<Footer/>
    </div>
  );
};

export default About;
