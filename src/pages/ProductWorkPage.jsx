import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import PageHero from "../components/PageHero";
import pageStyles from "./StandardPage.module.scss";
import styles from "./ProductWorkPage.module.scss";
import { projects, selectedWork, playgroundItems } from "../data/projects";

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cardHover = {
  y: -4,
  boxShadow: "0 12px 28px rgba(48, 32, 25, 0.09)",
  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};

const tabPanelVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 32 : -32,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -32 : 32,
    opacity: 0,
  }),
};

const reducedTabPanelVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};
function ProjectCard({ project, reduceMotion, priority = false }) {
  return (
    <motion.article
      className={styles.projectCard}
      variants={cardVariants}
      whileHover={reduceMotion ? undefined : cardHover}
    >
      <Link
        className={`${styles.projectImage} ${project.id === "mealflow" ? styles.mealflowImage : ""}`}
        to={project.href}
        aria-label={`View ${project.name} case study`}
      >
        <img src={project.image} alt={project.imageAlt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
      </Link>

      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{project.category}</span>
          <span className={`${styles.status} ${styles[project.statusType]}`}>
            {project.status}
          </span>
        </div>

        <h3>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.contribution}>
          <span>MY CONTRIBUTION</span>
          <p>{project.contribution}</p>
        </div>

        <div className={styles.cardActions}>
          <Link className={styles.primaryLink} to={project.href}>
            View case study <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          {project.externalLinks.map((link) => (
            <a
              className={styles.secondaryLink}
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SelectedWorkCard({ item, reduceMotion }) {
  return (
    <motion.article
      className={styles.selectedCard}
      variants={cardVariants}
      whileHover={reduceMotion ? undefined : cardHover}
    >
      <a
        className={styles.selectedImage}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={item.linkLabel}
      >
        <img src={item.image} alt={item.imageAlt} loading="lazy" />
      </a>

      <div className={styles.selectedContent}>
        <span className={styles.category}>{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className={styles.contribution}>
          <span>MY CONTRIBUTION</span>
          <p>{item.contribution}</p>
        </div>

        <a
          className={styles.primaryLink}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {item.linkLabel} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

function ProductWorkPage() {
  const [activeTab, setActiveTab] = useState("products");
  const [tabDirection, setTabDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const animationInitial = reduceMotion ? false : "hidden";

  const changeTab = (nextTab) => {
    const tabOrder = ["products", "client", "playground"];
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextIndex = tabOrder.indexOf(nextTab);

    if (nextIndex === currentIndex) return;

    setTabDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(nextTab);
  };

  return (
    <main className={pageStyles.page}>
      <PageHero
        eyebrow="PRODUCT PORTFOLIO"
        title="Selected Product Work"
        subtitle="Problems explored and products shaped."
        description="A selection of products and concepts I have originated, explored and worked towards bringing to life. Each project reflects a different stage of product thinking and development."
        mobileDescription="Products shaped through discovery, product thinking and development."
        image="/images/victor/vic3.jpg"
      />

      <section className={styles.tabbedWorkSection} aria-label="Portfolio work">
        <div className={styles.tabNavigation} role="tablist" aria-label="Work categories">
          <button
            type="button"
            role="tab"
            id="tab-products"
            aria-selected={activeTab === "products"}
            aria-controls="panel-products"
            className={`${styles.tabButton} ${activeTab === "products" ? styles.activeTab : ""}`}
            onClick={() => changeTab("products")}
          >
            <span>Product Work</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-client"
            aria-selected={activeTab === "client"}
            aria-controls="panel-client"
            className={`${styles.tabButton} ${activeTab === "client" ? styles.activeTab : ""}`}
            onClick={() => changeTab("client")}
          >
            <span>Client &amp; Business</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-playground"
            aria-selected={activeTab === "playground"}
            aria-controls="panel-playground"
            className={`${styles.tabButton} ${activeTab === "playground" ? styles.activeTab : ""}`}
            onClick={() => changeTab("playground")}
          >
            <span>Playground</span>
          </button>
        </div>

        <div className={styles.tabPanelStage}>
          <AnimatePresence
            initial={false}
            mode="sync"
            custom={tabDirection}
          >
        {activeTab === "products" && (
          <motion.section
            key={activeTab}
            className={styles.tabPanel}
            custom={tabDirection}
            variants={reduceMotion ? reducedTabPanelVariants : tabPanelVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit="exit"
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}

            id="panel-products"
            role="tabpanel"
            aria-labelledby="tab-products"
          >
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>CORE PRODUCTS</span>
                <h2>From problems to products.</h2>
              </div>
              <span className={styles.projectCount}>03 PROJECTS</span>
            </div>

            <motion.div
              className={styles.projectGrid}
              variants={cardContainerVariants}
              initial={animationInitial}
              animate="visible"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  reduceMotion={reduceMotion}
                  priority={index === 0}
                />
              ))}
            </motion.div>
          </motion.section>
        )}

        {activeTab === "client" && (
          <motion.section
            key={activeTab}
            className={styles.tabPanel}
            custom={tabDirection}
            variants={reduceMotion ? reducedTabPanelVariants : tabPanelVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit="exit"
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}

            id="panel-client"
            role="tabpanel"
            aria-labelledby="tab-client"
          >
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>SELECTED WORK</span>
                <h2>Client and business work.</h2>
              </div>
              <span className={styles.projectCount}>02 PROJECTS</span>
            </div>

            <motion.div
              className={styles.selectedGrid}
              variants={cardContainerVariants}
              initial={animationInitial}
              animate="visible"
            >
              {selectedWork.map((item) => (
                <SelectedWorkCard
                  key={item.id}
                  item={item}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </motion.section>
        )}

        {activeTab === "playground" && (
          <motion.section
            key={activeTab}
            className={styles.tabPanel}
            custom={tabDirection}
            variants={reduceMotion ? reducedTabPanelVariants : tabPanelVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit="exit"
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}

            id="panel-playground"
            role="tabpanel"
            aria-labelledby="tab-playground"
          >
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>BEYOND THE MAIN PROJECTS</span>
                <h2>Experiments and explorations.</h2>
              </div>
              <span className={styles.projectCount}>02 PROJECTS</span>
            </div>

            <motion.div
              className={styles.playgroundList}
              variants={cardContainerVariants}
              initial={animationInitial}
              animate="visible"
            >
              {playgroundItems.map((item) => (
                <motion.article
                  className={styles.playgroundCard}
                  key={item.id}
                  variants={cardVariants}
                  whileHover={reduceMotion ? undefined : cardHover}
                >
                  <div className={styles.playgroundCardHeader}>
                    <span className={styles.category}>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className={styles.playgroundStack}>
                    {item.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className={styles.playgroundActions}>
                    {item.links.map((link) => (
                      <a
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default ProductWorkPage;










