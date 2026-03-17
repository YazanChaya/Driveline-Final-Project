import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <div className="max-high-md:px-7.5 high-md:px-10">
        <div className="container mx-auto">
          <div className="max-md:py-12 max-high-md:py-16 high-md:py-20">
            <div className="w-full max-md:pt-12 max-high-md:pt-16 high-md:pt-20"></div>
            <div>
              <div className="text-center">
                <h2 className="font-heading max-md:text-heading-1 max-high-md:text-[4rem] high-md:text-[6rem] font-light leading-[0.9]">
                  Contact
                </h2>
                <div className="w-full pt-4"></div>
                <p className="opacity-[0.5] max-md:text-body-medium md:text-body-large">
                  We will contact you shortly
                </p>
                <div className="w-full max-md:pt-12 max-high-md:pt-16 high-md:pt-20"></div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="max-w-lg w-full mx-auto flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label className="font-normal text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full h-auto min-h-11 mb-0 border border-[#ccc] rounded-lg px-3 py-2 text-body-regular leading-[1.6] font-sans outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-auto min-h-11 mb-0 border border-[#ccc] rounded-lg px-3 py-2 text-body-regular leading-[1.6] font-sans outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-black">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={5}
                  className="w-full h-auto min-h-11 mb-0 border border-[#ccc] rounded-lg px-3 py-2 text-body-regular leading-[1.6] font-sans outline-none focus:border-black transition-colors bg-transparent resize-none placeholder:text-black/30"
                />
              </div>
              <button
                type="submit"
                className="w-full font-heading bg-black text-white py-2.25 px-3.75 rounded-lg font-medium hover:opacity-[0.7] duration-200 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
