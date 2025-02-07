import React from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "✨ Thank you for getting in touch! 💌",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20 mb-12">
      <h2 className="text-3xl font-semibold text-center text-teal-500 mb-6">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your name here"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="example@gamil.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            placeholder="Your message here..."
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all"
        >
          Send Message
        </button>
      </form>
      <div className="divider my-8">OR</div>
      <div className="mt-8">
        <h3 className="text-center text-2xl font-bold text-primaryColor">
          Connect With
        </h3>

        {/* social icons  */}
        <div className="flex items-center gap-6 text-3xl justify-center mt-8">
          <a href="https://github.com/Najmul-Shaon">
            <button className="bg-transparent border-2 border-borderColor text-[#171515] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor transition-all duration-300 transform hover:scale-105">
              <FaGithub className="inline-block mr-2 text-3xl" /> Github
            </button>
          </a>
          <a href="mailto:najmul.nh.shaon@gmail.com">
            <button className="bg-transparent border-2 border-borderColor text-teal-900 px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaRegEnvelope className="inline-block mr-2 text-3xl" />{" "}
              <span className="text-black">Mail</span>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/najmul-hasan-75a096205">
            <button className="bg-transparent border-2 border-borderColor text-[#0077B5] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaLinkedin className="inline-block mr-2 text-3xl" /> Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
