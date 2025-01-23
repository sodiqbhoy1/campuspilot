import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

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
            Get in Touch with CampusPilot
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
            We’d love to hear from you! Whether you have a question, feedback, or want to learn more about how we can help you, reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">Contact Us</h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to get in touch with our team. We will get back to you as soon as possible.
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-[#035140]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035140] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-[#035140]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035140] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-[#035140]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035140] focus:outline-none"
                  placeholder="Type your message here"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#035140] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#028B6B] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

            {formStatus && (
              <div className="mt-4 text-center text-lg font-semibold text-[#035140]">
                {formStatus}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Company Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#035140]">
            Or Reach Us Directly
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Email */}
            <div className="text-center p-6 bg-gray-100 shadow-lg rounded-lg">
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Email Us</h3>
              <p className="mt-4 text-gray-600">
                Have questions? Reach us at <strong>contact@campuspilot.com</strong>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-6 bg-gray-100 shadow-lg rounded-lg">
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Call Us</h3>
              <p className="mt-4 text-gray-600">
                Call us directly at <strong>(123) 456-7890</strong> for any inquiries.
              </p>
            </div>

            {/* Address */}
            <div className="text-center p-6 bg-gray-100 shadow-lg rounded-lg">
              <div className="text-4xl text-[#035140] mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#035140]">Visit Our Office</h3>
              <p className="mt-4 text-gray-600">
                123 CampusPilot St, Tech City, State, 12345
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
