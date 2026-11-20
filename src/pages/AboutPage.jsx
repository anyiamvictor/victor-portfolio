import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./AboutPage.module.scss";
import PageHero from "../components/PageHero";

const tabs = [
  { id: "story", label: "My Story" },
  { id: "approach", label: "My Approach" },
  { id: "philosophy", label: "Philosophy" },
  { id: "tools", label: "Tools & Technology" },
];

const panelVariants = {
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

const reducedPanelVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};
function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const [tabDirection, setTabDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const changeTab = (nextTab) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = tabs.findIndex((tab) => tab.id === nextTab);

    if (nextIndex === currentIndex) return;

    setTabDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(nextTab);
  };

  return (
    <div className={styles.page}>
            <PageHero
        eyebrow="A LITTLE ABOUT ME"
        title="About Me"
        subtitle="The person and thinking behind the products."
        description="My journey from computer science to business operations, problem discovery and product development."
        mobileDescription="I bring together computer science, business operations and product thinking to build practical digital solutions."
        image="/images/victor/vic2.jpg"
      />

      <section className={styles.details}>
        <div className={styles.tabList} role="tablist" aria-label="About sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`about-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`about-panel-${tab.id}`}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.activeTab : ""
              }`}
              onClick={() => changeTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.panelStage}>
          <AnimatePresence
            initial={false}
            mode="sync"
            custom={tabDirection}
          >
            <motion.div
              className={styles.panel}
              role="tabpanel"
              id={`about-panel-${activeTab}`}
              aria-labelledby={`about-tab-${activeTab}`}
              key={activeTab}
              custom={tabDirection}
              variants={reduceMotion ? reducedPanelVariants : panelVariants}
              initial={reduceMotion ? false : "enter"}
              animate="center"
              exit="exit"
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
          {activeTab === "story" && (
            <div className={styles.story}>
              <span className={styles.sectionLabel}>01 / MY STORY</span>
              <h2>Business experience shaped how I think about products.</h2>

              <p>
                I studied Computer Science at the Federal University of
                Technology, Owerri, graduating with a B.Tech in 2014.
                My career then took me into business operations, supply
                chain management and catering.
              </p>

              <p>
                Working close to these operations exposed me to everyday
                business challenges, inefficient processes and opportunities
                for improvement. Rather than simply work around those
                problems, I became interested in how technology could solve
                them.
              </p>

              <p>
                That interest led me to product thinking and to creating
                MealFlow, a platform shaped by challenges I experienced
                first-hand through Resswell Catering Services.
              </p>

              <div className={styles.personalNote}>
                <strong>Outside product work</strong>
                <span>
                  I enjoy playing guitar and exploring music.
                </span>
              </div>
            </div>
          )}

          {activeTab === "approach" && (
            <div className={styles.approach}>
              <span className={styles.sectionLabel}>02 / MY APPROACH</span>
              <h2>Understand the problem before shaping the solution.</h2>
              <p className={styles.panelIntro}>
                I approach product development as a process of learning,
                defining and refining.
              </p>

              <div className={styles.steps}>
                {[
                  ["01", "Discover", "Identify real problems through experience, observation and conversations."],
                  ["02", "Research", "Explore existing solutions, competitors, user reviews and unmet needs."],
                  ["03", "Define", "Understand the business process, map workflows and establish product requirements."],
                  ["04", "Build & refine", "Explore suitable technology, work with AI-assisted tools, test and improve the solution."],
                ].map(([number, title, description]) => (
                  <div className={styles.step} key={number}>
                    <span className={styles.stepNumber}>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className={styles.philosophy}>
              <span className={styles.sectionLabel}>03 / MY PHILOSOPHY</span>
              <h2>What guides the way I think about products.</h2>

              <article className={styles.principle}>
                <span>01</span>
                <h3>Great products begin with understanding real problems.</h3>
                <p>
                  A solution is only valuable when it addresses a problem
                  that matters to the people experiencing it.
                </p>
              </article>

              <article className={styles.principle}>
                <span>02</span>
                <h3>Simplicity is a feature.</h3>
                <p>
                  Good product experiences make complex tasks easier to
                  understand and simpler to complete.
                </p>
              </article>

              <article className={styles.principle}>
                <span>03</span>
                <h3>Think beyond the happy path.</h3>
                <p>
                  I like to imagine how a product will work in real-world
                  situations, explore the what-ifs, anticipate edge cases,
                  identify constraints, and consider how different scenarios
                  might affect the experience. A product should be designed
                  not just for when everything goes right, but also for when
                  things don't go as expected.
                </p>
              </article>

              <article className={styles.principle}>
                <span>04</span>
                <h3>Good products create value for both people and businesses.</h3>
                <p>
                  A product should solve meaningful user problems while
                  supporting a sustainable business. The best solutions
                  create value for everyone involved.
                </p>
              </article>
            </div>
          )}

          {activeTab === "tools" && (
            <div className={styles.tools}>
              <span className={styles.sectionLabel}>04 / TOOLS & TECHNOLOGY</span>
              <h2>Tools that support my product work.</h2>
              <p className={styles.panelIntro}>
                I use AI as a research assistant, thinking partner and
                development collaborator.
              </p>

              <div className={styles.toolGroup}>
                <h3>AI tools</h3>
                <div className={styles.tags}>
                  <span>ChatGPT</span>
                  <span>Claude</span>
                </div>
              </div>

              <div className={styles.toolGroup}>
                <h3>Technical exposure</h3>
                <div className={styles.tags}>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Supabase</span>
                  <span>REST APIs</span>
                  <span>Git & GitHub</span>
                </div>
              </div>

              <p className={styles.toolNote}>
                My focus is on understanding technical possibilities and
                using AI-assisted development to help move product ideas
                towards working solutions.
              </p>
            </div>
          )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;





