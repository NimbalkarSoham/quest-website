"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    debugger;

    const serviceID = "service_6pkjm7v";
    const templateID = "template_hdlsy2d";
    const publicKey = "Z9tfj-jQEXvOz7op0";

    await emailjs.send(serviceID, templateID, formData, publicKey);

    alert("Your message sent successfully!!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMail(e);
      // Reset form fields on successful submission
      setFormData({ name: "", email: "", message: "" });
      // Display success message or perform any other action
      console.log("Email sent successfully");
    } catch (error) {
      // Handle error, display error message, etc.
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <nav className="flex items-center justify-between px-6 pt-4 bg-transparent w-full z-50"></nav>
      </div>

      <div className="contact-container mt-11 mx-4 md:mx-20 lg:mx-40 flex flex-col md:flex-row shadow-lg">
        {/* <iframe
          className="left-col w-full md:w-2/5 h-60 md:h-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.890370129258!2d74.3955550966623!3d17.79298516206121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3b80000ffabbb%3A0x8805ef9216d347dd!2sKulakjai%2C%20Maharashtra%20415503!5e0!3m2!1sen!2sin!4v1701174459382!5m2!1sen!2sin"
          width="600" height="550" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <Image
          src="/images/contactus.jpg"
          alt="About Us Image"
          className="left-col w-full md:w-2/5 h-60 md:h-auto"
          width={600}
          height={500}
        />

        <div className="right-col flex-1 p-4 md:p-8 bg-white shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Contact us</h1>

          <form id="contact-form" method="post" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange} // Here's where handleChange is used
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <label
              htmlFor="email"
              className="block mt-4 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
              value={formData.email}
              onChange={handleChange} // Here's where handleChange is used
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <label
              htmlFor="message"
              className="block mt-4 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange} // Here's where handleChange is used
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <div id="clicked-address"></div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="mt-4 bg-[#0A1128] text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80"
            >
              Send
            </button>
          </form>

          <div id="error" className="text-sm text-red-500 mt-2"></div>
          <div id="success-msg" className="text-sm text-green-500 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
