"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  // styles
  const inputStyle =
    "border-b-2 border-gray-300 transition duration-200 bg-transparent text-sm w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  // event handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success(
          "Message sent successfully! We will get back to you soon.",
          { duration: 6000 }
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message! Please try again.", {
          duration: 6000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message! Please try again.", {
        duration: 6000,
      });
    }
  };

  return (
    <>
      <form
        id="contact"
        onSubmit={handleSubmit}
        className="w-full mx-auto md:rounded-3xl bg-white md:w-2/3 z-10 flex flex-col space-y-6 text-black p-8 shadow-lg mb-8"
      >
        <h1 className="font-bold text-2xl text-primary uppercase ">
          Contact Us
        </h1>
        <p className="text-gray-700 text-sm font-light">
          Let us know your queries, and we will get back to you in 1-3 business
          days!
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputStyle} `}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputStyle} `}
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your query"
          value={formData.message}
          onChange={handleChange}
          className={`${inputStyle} `}
          required
        />

        <Button
          content="Send"
          className=" bg-primary text-white rounded-lg px-6 hover:bg-primary-dark transition duration-300"
        />
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
