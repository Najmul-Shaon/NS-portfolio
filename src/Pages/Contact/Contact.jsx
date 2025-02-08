import React from "react";
import { useForm } from "react-hook-form";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <SectionTitle header={"Contact Me"}></SectionTitle>
      {/* contact info  */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="border border-borderColor rounded-tl-4xl rounded-br-4xl p-4 flex flex-col items-center text-center shadow-2xl hover:shadow-primaryColor/40 hover:scale-105">
            <span>
              <FaLocationDot className="text-primaryColor p-4 text-6xl bg-primaryColor/10 rounded-full"></FaLocationDot>
            </span>
            <p className="font-bold mt-3">Address:</p>
            <p>
              Mohammadpur, Dhaka, <br /> Bangladesh-1208
            </p>
          </div>
          <div className="border border-borderColor rounded-tl-4xl rounded-br-4xl p-4 flex flex-col items-center text-center shadow-2xl hover:shadow-primaryColor/40 hover:scale-105">
            <span>
              <FaPhone className="text-primaryColor p-4 text-6xl bg-primaryColor/10 rounded-full"></FaPhone>
            </span>
            <p className="font-bold mt-3">Phone:</p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span> +88 01721 933810</span>
                <FaWhatsapp className="text-[#075e54]"></FaWhatsapp>
              </p>
              <p className="space-x-2">
                <span>+88 01518 927691</span>
              </p>
            </div>
          </div>

          <div className="border border-borderColor rounded-tl-4xl rounded-br-4xl p-4 flex flex-col items-center text-center shadow-2xl hover:shadow-primaryColor/40 hover:scale-105">
            <span>
              <MdEmail className="text-primaryColor p-4 text-6xl bg-primaryColor/10 rounded-full"></MdEmail>
            </span>
            <p className="font-bold mt-3">E-mail:</p>

            <p>najmul.nh.shaon@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 items-center p-6 bg-bgColor rounded-2xl shadow-2xl shadow-primaryColor/40 ">
        {/* content  */}
        <div className="space-y-3">
          <h4 className="text-xl uppercase text-textColor">get in touch</h4>
          <h3 className="font-bold text-primaryColor text-4xl">
            Elevate your brand with Me
          </h3>
          <p className="text-textColor text-lg">
            Let's work together to bring your vision to life. Reach out today
            and let's make your brand unforgettable!
          </p>
        </div>
        {/* input form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            {/* name  */}
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
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* phone number  */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+8801000000000"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            {/* subject  */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your name here"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            {/* email  */}
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
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* body  */}
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
              rows="3"
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
      </div>
      <div className="divider mt-20">OR</div>
      <div className="mt-4 mb-12">
        <h3 className="text-center text-2xl font-bold text-primaryColor">
          Connect With
        </h3>

        {/* social icons  */}
        <div className="flex items-center gap-6 justify-center mt-8">
          <a href="https://github.com/Najmul-Shaon">
            <button className="bg-transparent border-2 border-borderColor text-[#171515] px-4 py-2 rounded-lg text-xl md:text-2xl font-bold hover:bg-primaryColor hover:border-borderColor transition-all duration-300 transform hover:scale-105">
              <FaGithub className="inline-block mr-2 text-xl md:text-3xl" />{" "}
              Github
            </button>
          </a>
          <a href="mailto:najmul.nh.shaon@gmail.com">
            <button className="bg-transparent border-2 border-borderColor text-teal-900 px-4 py-2 rounded-lg text-xl md:text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaRegEnvelope className="inline-block mr-2 text-xl md:text-3xl" />{" "}
              <span className="text-black">Mail</span>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/najmul-hasan-75a096205">
            <button className="bg-transparent border-2 border-borderColor text-[#0077B5] px-4 py-2 rounded-lg text-xl md:text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaLinkedin className="inline-block mr-2 text-xl md:text-3xl" />{" "}
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
