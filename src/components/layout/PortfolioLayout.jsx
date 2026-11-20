import { useEffect, useRef } from "react";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { primaryRoutes } from "../../app/routeConfig";
import PrimaryNavigation from "./PrimaryNavigation";
import styles from "./RouteTransition.module.scss";

function getRoutePosition(pathname) {
  const isCaseStudy = /^\/work\/[^/]+\/?$/.test(pathname);
  const primaryPath = isCaseStudy ? "/work" : pathname;

  const index = primaryRoutes.findIndex(
    (route) => route.path === primaryPath
  );

  return {
    index: index === -1 ? 0 : index,
    isCaseStudy,
  };
}

function getTransitionDirection(previousPath, nextPath) {
  const previous = getRoutePosition(previousPath);
  const next = getRoutePosition(nextPath);

  if (previous.index !== next.index) {
    return next.index > previous.index ? 1 : -1;
  }

  // Entering a case study moves forward from Product Work.
  if (previous.isCaseStudy !== next.isCaseStudy) {
    return next.isCaseStudy ? 1 : -1;
  }

  // Moving between case studies uses a consistent forward direction.
  return 1;
}

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 28 : -28,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -28 : 28,
    opacity: 0,
  }),
};

const reducedMotionVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

function PortfolioLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const prefersReducedMotion = useReducedMotion();
  const previousPath = useRef(location.pathname);

  const direction = getTransitionDirection(
    previousPath.current,
    location.pathname
  );

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  const variants = prefersReducedMotion
    ? reducedMotionVariants
    : pageVariants;

  return (
    <div className="portfolio-layout">
      <PrimaryNavigation />

      <main className="portfolio-content">
        <div className={styles.stage}>
        <AnimatePresence
          initial={false}
          mode="sync"
          custom={direction}
        >
          <motion.div
            key={location.pathname}
            className={styles.screen}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default PortfolioLayout;

