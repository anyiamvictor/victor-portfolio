import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BriefcaseBusiness,
  Code2,
  Compass,
  Workflow,
  Database,
  Lightbulb,
} from "lucide-react";
import styles from "./ExpertisePage.module.scss";
import PageHero from "../components/PageHero";

const experiences = [
  {
    company: "Resswell Catering Services",
    shortName: "Resswell",
    role: "Product Owner, MealFlow / Digital Product & Operations Lead",
    period: "2023 – Present",
    description:
      "Identified operational challenges in corporate meal coordination and initiated MealFlow, a digital platform designed to connect restaurants with corporate clients.",
    highlights: [
      "Translated operational problems into product requirements and workflows.",
      "Led product planning, design decisions and development.",
      "Built a React and Firebase application with more than 60 backend functions.",
      "Implemented role-based workflows, automated processes and deployment pipelines.",
      "Gathered operational feedback to guide ongoing product improvements.",
    ],
  },
  {
    company: "Promine Multiservices Ltd",
    shortName: "Promine",
    role: "Supply Chain Manager",
    period: "2017 – 2023",
    description:
      "Managed petroleum product supply and delivery operations, coordinating suppliers, transporters, drivers and customers.",
    highlights: [
      "Coordinated end-to-end fuel delivery operations.",
      "Managed supplier, transporter and customer relationships.",
      "Supervised delivery activities and monitored product discharge.",
      "Handled operational disruptions, delivery delays and stakeholder communication.",
      "Led an operations team and negotiated supplier and transportation costs.",
    ],
  },
  {
    company: "Jide Taiwo & Co.",
    shortName: "Jide Taiwo",
    role: "Customer Service Representative",
    period: "Earlier experience",
    description:
      "Built foundational experience in customer service and client-facing operations within a real estate management environment.",
    highlights: [],
  },
];

const capabilities = [
  {
    icon: Compass,
    title: "Product Strategy & Delivery",
    shortName: "Product",
    description:
      "Turning business problems and opportunities into clearly defined product solutions.",
    skills: [
      "Problem discovery",
      "Product strategy",
      "Product requirements",
      "Feature prioritisation",
      "Workflow design",
      "Product lifecycle",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research & Discovery",
    shortName: "Research",
    description:
      "Exploring problems, evaluating existing solutions and identifying opportunities to create value.",
    skills: [
      "Competitor research",
      "Market research",
      "User feedback analysis",
      "Reviews & complaints",
      "Gap analysis",
      "Edge-case thinking",
      "Testing & iteration",
    ],
  },
  {
    icon: Workflow,
    title: "Business & Operations",
    shortName: "Operations",
    description:
      "Using practical business experience to understand processes, coordinate people and improve operations.",
    skills: [
      "Business process analysis",
      "Process improvement",
      "Operations management",
      "Stakeholder coordination",
      "Requirements gathering",
      "Service delivery",
    ],
  },
  {
    icon: Code2,
    title: "Technical Fluency & AI Development",
    shortName: "Technical",
    description:
      "Working hands-on with technology and AI-assisted tools to explore, build and refine digital products.",
    skills: [
      "JavaScript",
      "React",
      "HTML & CSS",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "Supabase",
      "REST APIs",
      "Git & GitHub",
      "ChatGPT",
      "Claude",
    ],
  },
];

function ExperienceCard({ experience, index }) {
  return (
    <article className={styles.experienceCard}>
      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={styles.period}>{experience.period}</span>
      </div>

      <h3>{experience.company}</h3>
      <p className={styles.role}>{experience.role}</p>
      <p className={styles.description}>{experience.description}</p>

      {experience.highlights.length > 0 && (
        <ul className={styles.highlights}>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function CapabilityCard({ capability }) {
  const Icon = capability.icon;

  return (
    <article className={styles.capabilityCard}>
      <div className={styles.capabilityIcon}>
        <Icon size={21} strokeWidth={1.7} />
      </div>

      <h3>{capability.title}</h3>
      <p className={styles.capabilityDescription}>
        {capability.description}
      </p>

      <div className={styles.skillList}>
        {capability.skills.map((skill) => (
          <span className={styles.skillTag} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function ExpertisePage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [experienceDirection, setExperienceDirection] = useState(1);
  const [capabilityDirection, setCapabilityDirection] = useState(1);
  const [tabDirection, setTabDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const changeExperience = (nextIndex) => {
    if (nextIndex === activeExperience) return;

    setExperienceDirection(nextIndex > activeExperience ? 1 : -1);
    setActiveExperience(nextIndex);
  };

  const changeCapability = (nextIndex) => {
    if (nextIndex === activeCapability) return;

    setCapabilityDirection(nextIndex > activeCapability ? 1 : -1);
    setActiveCapability(nextIndex);
  };

  const changeTab = (nextTab) => {
    if (nextTab === activeTab) return;

    const tabOrder = ["experience", "skills"];
    setTabDirection(
      tabOrder.indexOf(nextTab) > tabOrder.indexOf(activeTab) ? 1 : -1
    );
    setActiveTab(nextTab);
  };

  const panelVariants = {
    enter: (direction) => ({
      x: reduceMotion ? 0 : direction * 52,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: reduceMotion ? 0 : direction * -52,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.985,
    }),
  };
  const contentVariants = {
    enter: (direction) => ({
      x: reduceMotion ? 0 : direction > 0 ? 28 : -28,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: reduceMotion ? 0 : direction > 0 ? -28 : 28,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.page}>
            <PageHero
        eyebrow="EXPERIENCE & CAPABILITIES"
        title="Expertise"
        subtitle="Business experience, product thinking and technical execution."
        description="My experience across business operations and technology shapes how I approach product work. I identify practical problems, structure solutions and work hands-on to bring digital products to life."
        mobileDescription="I turn practical business problems into digital product solutions."
        image="/images/victor/1.jpeg"
      />

      <div className={styles.mainTabs} role="tablist" aria-label="Expertise">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "experience"}
          aria-controls="experience-panel"
          className={`${styles.mainTab} ${
            activeTab === "experience" ? styles.mainTabActive : ""
          }`}
          onClick={() => changeTab("experience")}
        >
          <BriefcaseBusiness size={17} />
          Experience
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "skills"}
          aria-controls="skills-panel"
          className={`${styles.mainTab} ${
            activeTab === "skills" ? styles.mainTabActive : ""
          }`}
          onClick={() => changeTab("skills")}
        >
          <Lightbulb size={18} />
          Capabilities
        </button>
      </div>

      <div className={styles.panelStage}>
        <AnimatePresence initial={false} mode="sync" custom={tabDirection}>
      {activeTab === "experience" && (
        <motion.section
          id="experience-panel"
          key="experience-panel"
          className={styles.panel}
          role="tabpanel"
          custom={tabDirection}
          variants={panelVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: reduceMotion ? 0.01 : 0.46,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>MY JOURNEY</span>
              <h2>Professional Experience</h2>
            </div>
            {/* <span className={styles.count}>03 ROLES</span> */}
          </div>

          <div className={styles.mobileSelector} aria-label="Select experience">
            {experiences.map((experience, index) => (
              <button
                type="button"
                key={experience.company}
                className={`${styles.selectorButton} ${
                  activeExperience === index ? styles.selectorActive : ""
                }`}
                aria-pressed={activeExperience === index}
                onClick={() => changeExperience(index)}
              >
                {experience.shortName}
              </button>
            ))}
          </div>

          <div className={styles.experienceGrid}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          <div className={styles.mobileExperience}>
            <AnimatePresence
              initial={false}
              mode="sync"
              custom={experienceDirection}
            >
              <motion.div
                key={experiences[activeExperience].company}
                custom={experienceDirection}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ExperienceCard
                  experience={experiences[activeExperience]}
                  index={activeExperience}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
      )}

      {activeTab === "skills" && (
        <motion.section
          id="skills-panel"
          key="skills-panel"
          className={styles.panel}
          role="tabpanel"
          custom={tabDirection}
          variants={panelVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: reduceMotion ? 0.01 : 0.46,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>WHAT I BRING</span>
              <h2>How I create value</h2>
            </div>
            {/* <span className={styles.count}>04 AREAS</span> */}
          </div>

          <div className={styles.mobileSelector} aria-label="Select skill category">
            {capabilities.map((capability, index) => (
              <button
                type="button"
                key={capability.title}
                className={`${styles.selectorButton} ${
                  activeCapability === index ? styles.selectorActive : ""
                }`}
                aria-pressed={activeCapability === index}
                onClick={() => changeCapability(index)}
              >
                {capability.shortName}
              </button>
            ))}
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.title}
                capability={capability}
              />
            ))}
          </div>

          <div className={styles.mobileCapability}>
            <AnimatePresence
              initial={false}
              mode="sync"
              custom={capabilityDirection}
            >
              <motion.div
                key={capabilities[activeCapability].title}
                custom={capabilityDirection}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CapabilityCard
                  capability={capabilities[activeCapability]}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
      )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExpertisePage;















