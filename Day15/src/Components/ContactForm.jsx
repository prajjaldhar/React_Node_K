import { useState } from "react";

const ContactForm = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const HandleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setformdata({
      name: "",
      email: "",
      message: "",
    });
    console.log(formdata);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 bg-opacity-80">
      <div className="relative p-6 w-96 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg shadow-red-500/90 border border-white/20">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">
          Contact Us
        </h2>

        <form onSubmit={HandleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              autoFocus
              onChange={HandleChange}
              className="mt-1 p-3 w-full rounded-lg border-none bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none shadow-lg transition-all"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={HandleChange}
              className="mt-1 p-3 w-full rounded-lg border-none bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none shadow-lg transition-all"
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              value={formdata.message}
              onChange={HandleChange}
              className="mt-1 p-3 w-full rounded-lg border-none bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none shadow-lg transition-all"
              rows="4"
              required
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg transition-all shadow-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
