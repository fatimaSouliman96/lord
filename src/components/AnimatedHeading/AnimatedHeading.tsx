import { motion } from "framer-motion";

export default function AnimatedHeading({
  text = "أسرع من الضوء",
  className = "xl:text-[90px] md:text-[65px] text-[40px] text-white font-extrabold text-center",
  stagger = 0.2,
  delay = 0.1,
}) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { x: -60, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 40,
      },
    },
  };

  return (
    <motion.h1
      dir="rtl"
      className={`${className} overflow-hidden`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split("\n").map((line, li) => (
        <span key={li} className="whitespace-nowrap block md:inline">
          {line.split(" ").map((word, wi) => (
            <motion.span
              key={`${li}-${wi}`}
              variants={wordVariant}
              className="inline-block ml-4"
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
