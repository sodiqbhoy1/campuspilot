import React from 'react';
import Footer from './Footer';

const Features = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white bg-[#035140] py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/bg-about.svg")' }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center sm:py-48">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Features of CampusPilot
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
            Revolutionizing school management with smart, efficient, and seamless features.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Our Powerful Features
          </h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
            CampusPilot comes with a set of powerful features designed to make school management effortless. 
            From automating schedules to real-time analytics, we've got you covered.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-calendar-alt text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Automated Scheduling</h3>
              <p className="mt-4 text-gray-600">
                Automatically generate schedules for students and teachers. Our intelligent scheduling system takes the stress out of planning and optimizes schedules based on available resources.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-chart-line text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Real-Time Analytics</h3>
              <p className="mt-4 text-gray-600">
                Track performance, attendance, and other important metrics in real time. Make data-driven decisions with easy-to-read charts and graphs to improve school operations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-cloud text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Cloud-Based Storage</h3>
              <p className="mt-4 text-gray-600">
                Access school data anytime, anywhere with secure cloud storage. Our system ensures that your data is always available and safe, backed by the most robust security protocols.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-users text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Student & Teacher Management</h3>
              <p className="mt-4 text-gray-600">
                Manage student profiles, track progress, and keep in touch with teachers effortlessly. Our platform enables easy management of academic data and communication between educators and students.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-cogs text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Customizable Settings</h3>
              <p className="mt-4 text-gray-600">
                Personalize the platform to suit your school’s specific needs. From administrative settings to user access, CampusPilot offers complete flexibility.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-6">
                <i className="fas fa-lock text-4xl text-[#035140]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Data Security</h3>
              <p className="mt-4 text-gray-600">
                Your data security is our top priority. CampusPilot employs state-of-the-art encryption technology to ensure that sensitive data is protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#035140] text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Revolutionize Your School Management?</h2>
        <p className="mt-4 text-lg">Start using CampusPilot today and unlock the potential of smarter school management.</p>
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

export default Features;
