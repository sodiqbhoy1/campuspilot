import React from 'react';
// import * as motion from "motion/react-client"
import * as motion from 'motion/react-client';
import Footer from './Footer';
import testimonials from './Testimonial';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative text-black"
        initial={{ opacity: 0, translateX: "100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/bg.svg")' }}
        >
          {/* Added a dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-32 text-center sm:py-48">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
            <span className='text-[#035140]'> Revolutionize </span> <br /> the Management of Your School
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-[#2f4f47]">
            Smart solutions for a smarter school
          </p>
          <div className="mt-8">
            <a
              href="#why-choose"
              className="inline-block bg-[#035140] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#028B6B] transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.section>

      {/* Why Choose CampusPilot Section */}
      <motion.section
        id="why-choose"
        className="py-24 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Why Choose CampusPilot?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-center text-gray-600 max-w-2xl mx-auto">
            CampusPilot is designed to simplify and optimize every aspect of school management. With our advanced tools, you can focus more on what matters – education. 
            Here's why our platform is the best choice for schools.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Reason 1 */}
            <motion.div
              className="text-center p-6 bg-white shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-users"></i> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">User-Friendly Interface</h3>
              <p className="mt-4 text-gray-600">
                Our platform is designed with ease of use in mind, so anyone can quickly navigate and utilize the tools with minimal training required.
              </p>
            </motion.div>
            {/* Reason 2 */}
            <motion.div
              className="text-center p-6 bg-white shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-lock"></i> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Top-Tier Security</h3>
              <p className="mt-4 text-gray-600">
                We prioritize your data security with robust encryption and continuous monitoring, ensuring your school’s data stays private and safe.
              </p>
            </motion.div>
            {/* Reason 3 */}
            <motion.div
              className="text-center p-6 bg-white shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-cogs"></i> {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Highly Customizable</h3>
              <p className="mt-4 text-gray-600">
                Tailor the platform to fit your school’s unique needs. From custom reports to personalized access control, we’ve got it covered.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-24 bg-[#f9f9f9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#035140] mb-8">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-80"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg sm:text-xl text-gray-600 italic text-center mb-4">
                  "{testimonial.testimony}"
                </p>

                <div className="font-semibold text-[#035140] text-xl mb-1">
                  {testimonial.name}
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  {testimonial.role}
                </div>

                <div className="w-12 h-1 bg-[#035140] rounded-full mb-4"></div>

                <img
                  src="/assets/avatar-placeholder.png"
                  alt={`${testimonial.name}'s Avatar`}
                  className="w-16 h-16 rounded-full object-cover mb-4 mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-[#035140] text-white text-center"
        initial={{ opacity: 0, translateX:"100%" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, translateX:0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto">
          Ready to take your school management to the next level?
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Start using our smart solutions today and watch your school thrive.
        </p>
        <div className="mt-8">
          <a
            href="#register"
            className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
