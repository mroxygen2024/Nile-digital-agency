import React, { useState } from "react";

function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", input);
    // Reset form
    setInput({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={input.name}
              onChange={handleChange}
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={input.email}
              onChange={handleChange}
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={input.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Optional: Preview entered values
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Name:</strong> {input.name}</p>
            <p><strong>Email:</strong> {input.email}</p>
            <p><strong>Message:</strong> {input.message}</p>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
