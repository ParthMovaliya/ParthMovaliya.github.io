"use client";
// import image_2 from "../../public/images/image-2.jpg";
import "../styles/loader.css"
import React, { Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      ease: "easeIn",
      duration: 1.6,
    },
  },
};

const Loader = (props: { setLoading: Dispatch<SetStateAction<boolean>> }) => {
  const changeLoader = () => {
    props.setLoading(false);
  }

  return (
    <motion.div className="loader overflow-x-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => changeLoader()}
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="image-2-container"
        >
          <motion.img
            className="image-2"
            layoutId="main-image-1"
            // src={image_2.src}
            src="../../public/images/image-2.jpg"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  );
};

interface IImageBlockProps {
  variants: any;
  id: string;
}

export const ImageBlock: React.FC<IImageBlockProps> = ({ variants, id }) => {
  return (
    <>
      <motion.div variants={variants} className={`image-block ${id}`}>
        <img src={`/images/${id}.jpg`} className="" alt={id} />
      </motion.div>
    </>
  )
}

export default Loader