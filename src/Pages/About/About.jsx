import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="bg-bgColor mt-18">
      <Helmet>
        <title>Najmul | About</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <SectionTitle header={"About Me"}></SectionTitle>
        <div className="mt-8">
          <p className="text-justify indent-8">
            Hello! I'm <span className="text-primaryColor">Najmul Shaon</span>,
            a passionate <span className="font-semibold">MERN</span> stack
            developer with a love for coding. From the moment I wrote my first
            line of code, I knew I had found my calling. Coding is more than
            just a skill to me—it's a way of thinking, a language that bridges
            imagination and reality.
          </p>
          <br />
          <p className="text-justify">
            Every day, I dive deep into the world of technology, constantly
            exploring new frameworks and techniques. Building scalable,
            efficient, and user-friendly applications isn’t just my job—it’s my
            passion.
          </p>
          <br />
          <p className="text-justify indent-8">
            But let’s be real—the life of a developer is a constant cycle of
            creativity, challenges, and… bugs. And while others might find them
            frustrating, I’ve learned to embrace them. Errors and bugs are like
            my “soft drinks”—they fuel my drive, challenge my thinking, and push
            me to improve. It's through these hurdles that I grow and sharpen my
            skills. Whether it’s creating full-stack applications or exploring
            new technologies, I’m always excited to take on the next challenge.
            My mission is simple: To build innovative and impactful solutions
            that not only solve problems but inspire others along the way. Let’s
            code together and turn ideas into reality! <br />
          </p>
        </div>
        {/* social icons  */}
        <div className="flex items-center gap-6 text-3xl justify-center mt-8">
          <a href="https://github.com/Najmul-Shaon">
            <button className="bg-transparent border-2 border-borderColor text-[#171515] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <FaGithub className="inline-block mr-2 text-3xl" /> Github
            </button>
          </a>
          <a href="mailto:najmul.nh.shaon@gmail.com">
            <button className="bg-transparent border-2 border-borderColor text-teal-900 px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <FaRegEnvelope className="inline-block mr-2 text-3xl" />{" "}
              <span className="text-black">Mail</span>
            </button>
          </a>

          <a c href="https://www.linkedin.com/in/najmul-hasan-75a096205">
            <button className="bg-transparent border-2 border-borderColor text-[#0077B5] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <FaLinkedin className="inline-block mr-2 text-3xl" /> Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
