import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import {
  HiOutlineMail
} from "react-icons/hi";

const HeroText = () => {
  const words = [
    "Java",
    "Spring Boot",
    "APIs REST",
    "Soluções IoT",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, me chamo Henrique
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Desenvolvedor Backend <br />
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>
          <motion.div
            className="flex items-center gap-5 mt-6"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a
              href="https://github.com/reishenri"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-120"
            >
              <FaGithub size={28}/>
            </a>

            <a
              href="https://www.linkedin.com/in/hsilvareis"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-120"
            >
              <FaLinkedin size={28}/>
            </a>

            <a
              href="mailto:reishenrique261@gmail.com"
              className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-120"
            >
              <HiOutlineMail size={28}/>
            </a>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default HeroText;
