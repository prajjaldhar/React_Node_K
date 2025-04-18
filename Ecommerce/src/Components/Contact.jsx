import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400">
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Customer Support</h3>
              <p className="text-gray-600">
                For any queries or assistance, feel free to reach out to our
                customer support team.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Phone</h4>
              <p className="text-gray-600">1800-123-4567</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email</h4>
              <p className="text-gray-600">support@croma.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Address</h4>
              <p className="text-gray-600">
                Croma Headquarters
                <br />
                Mumbai, India
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Working Hours</h4>
              <p className="text-gray-600">
                Monday to Saturday: 9 AM - 9 PM
                <br />
                Sunday: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-12 mb-42">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="w-full h-64">
            {/* Replace the src URL with your actual Google Maps embed link */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1779.7153657080037!2d75.79604710319936!3d26.858052931838035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744951913463!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
