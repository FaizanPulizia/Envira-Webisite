import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    website: "",
    requirement: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the email body
    const emailBody = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Company Name: ${formData.companyName}
      Country: ${formData.country}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Website: ${formData.website}
      Requirement: ${formData.requirement}
      Details: ${formData.details}
    `;

    // Encode the email body for the mailto link
    const mailtoLink = `mailto:contact@enviraenergies.com?subject=New Contact Form Submission&body=${encodeURIComponent(
      emailBody
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-gray-50">
      {/* Contact Information Section */}
      <div className="text-white">
        <div className="bg-[#00bf63] py-8 mx-auto flex justify-center gap-20 leading-10 text-center w-[50rem] items-center">
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>The Capital, G-Block, BKC, </p>
            <p>Mumbai, 400103</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">CONTACT US</h3>
            <p>Email: contact@enviraenergies.com</p>
            <p>Mobile: +91 9136811775</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center">CONTACT FORM</h2>
        <p className="text-gray-600 text-center mt-2">
          We look forward to hearing from you. Email us to learn more about our firm and capabilities.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* Personal Details */}
          <h3 className="text-left text-lg font-semibold text-gray-800">PERSONAL DETAILS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="India"
              value={formData.country}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
          </div>

          {/* Requirement */}
          <h3 className="text-left text-lg font-semibold text-gray-800 mt-10">REQUIREMENT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
              required
            >
              <option value="Solar Rooftop">Solar Rooftop</option>
              <option value="Solar Carport">Solar Carport</option>
              <option value="Floating Solar">Floating Solar</option>
            </select>
            <textarea
              name="details"
              placeholder="Details"
              value={formData.details}
              onChange={handleChange}
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2 h-20 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-left mt-6">
            <button
              type="submit"
              className="bg-[#00bf63] text-white px-6 py-2 font-semibold hover:bg-blue-700 transition rounded"
            >
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715981042148!2d72.861825!3d19.0632869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e63255a32f%3A0xb36949f4649e6f15!2sThe%20Capital!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Form;