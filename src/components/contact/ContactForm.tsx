"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit (e.g. API call)
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full sm:w-[80%] mx-auto p-8 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">
        Contact Us
      </h2>
      <div className="flex items-center justify-between gap-8 w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full sm:w-1/2 mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          recusandae modi quas ipsa asperiores vel optio, praesentium eius quam
          consequatur impedit totam laborum eligendi dolores illo possimus non
          atque veniam?
        </p> */}
      </div>
    </div>
  );
};

export default ContactForm;
