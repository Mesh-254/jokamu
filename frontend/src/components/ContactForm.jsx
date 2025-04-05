import React from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "50924cce-6d51-41b3-b1de-15747c3b313d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full text-gray-700 px-4 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-gray-700 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2  text-gray-700 text-gray-700 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Submit Form
          </button>
        </form>

        {/* Response Message */}
        {result && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
