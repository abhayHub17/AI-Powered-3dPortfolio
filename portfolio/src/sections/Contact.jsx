/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/HeroModels/ContactExperience";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch With Me" sub="Contact Information" />
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center rounded-xl border border-black-50 bg-black-100 p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
                  />
                </div>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md;"
                  />
                </div>
                <div className="">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className=""
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-4 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden group hover:bg-white-50"
                >
                  <p
                    className="uppercase md:text-lg text-white transition-all duration-500
        group-hover:text-black-50  group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 mr-4"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="hidden md:block w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
