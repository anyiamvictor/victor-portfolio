import { motion, useReducedMotion } from "motion/react";
import styles from "./PageHero.module.scss";

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const portraitVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  mobileDescription,
  image,
}) {
  const prefersReducedMotion = useReducedMotion();

  const initialState = prefersReducedMotion ? false : "hidden";
  const animationState = "visible";

  return (
    <motion.section
      className={styles.hero}
      variants={heroVariants}
      initial={initialState}
      animate={animationState}
    >
      <motion.div
        className={styles.portrait}
        variants={portraitVariants}
      >
        <img src={image} alt={`${title} portrait`} />
      </motion.div>

      <motion.div
        className={styles.heroContent}
        variants={heroVariants}
      >
        <motion.div
          className={styles.heroHeading}
          variants={heroVariants}
        >
          <motion.span
            className={styles.eyebrow}
            variants={contentVariants}
          >
            {eyebrow}
          </motion.span>

          <motion.h1 variants={headingVariants}>
            {title}
          </motion.h1>

          <motion.h2 variants={contentVariants}>
            {subtitle}
          </motion.h2>
        </motion.div>

        <motion.p variants={contentVariants}>
          <span className={styles.desktopCopy}>{description}</span>
          <span className={styles.mobileCopy}>
            {mobileDescription || description}
          </span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default PageHero;

