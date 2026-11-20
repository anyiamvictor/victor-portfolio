import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router";
import styles from "./CaseStudyPage.module.scss";

const caseStudies = {
  mealflow: {
    name: "MealFlow",
    type: "B2B SaaS · Product case study",
    subtitle: "Bringing structure to corporate meal ordering.",
    intro:
      "MealFlow is a two-sided platform connecting restaurants and companies to organise daily corporate meal ordering.",
    image: "/images/projects/mealflow1.jpg",
    imageAlt: "MealFlow corporate meal ordering interface",
    gallery: [
      {
        src: "/images/projects/mealflow2.png",
        alt: "MealFlow employee meal ordering interface",
        caption: "Employee meal ordering",
      },
      {
        src: "/images/projects/mealflow3.png",
        alt: "MealFlow menu and ordering workflow",
        caption: "Menu and ordering workflow",
      },
    ],
    role: "Product discovery, product planning, UX and workflow decisions, architecture and hands-on development",
    stack: "React · Vite · Firebase · Firestore · Cloud Functions",
    stage: "MVP built · Early stage",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        title: "The problem behind the product",
        paragraphs: [
          "Corporate meal coordination often relies on WhatsApp messages, phone calls, handwritten lists and manual order collation. This creates room for missed orders, incorrect quantities, last-minute confusion and limited visibility.",
          "MealFlow was shaped around the need for a more structured process between restaurants, company administrators and employees.",
        ],
        points: ["Fragmented order collection", "Manual meal-count aggregation", "Changes and cut-off uncertainty", "Limited order visibility and history"],
      },
      {
        id: "decisions",
        label: "Decisions",
        title: "Designing around the real workflow",
        paragraphs: [
          "The product separates restaurant and company responsibilities. Restaurants create menus and define ordering windows; company administrators review menus and manage members; employees submit their own meal choices before the cut-off.",
          "The MVP uses Firebase to reduce infrastructure overhead while validating the core workflow. Business logic is handled in trusted backend functions rather than relying on client-side checks.",
        ],
        points: ["Role-based experiences", "Menu approval before publishing", "Defined ordering cut-offs", "Server-side order processing"],
      },
      {
        id: "solution",
        label: "Solution",
        title: "A connected corporate meal workflow",
        paragraphs: [
          "The MVP includes authentication, company and restaurant onboarding, menu management, member invitations, meal ordering, order aggregation, absence management, ratings and notifications.",
          "After the ordering cut-off, the system can process pending orders and apply a default meal where the configured workflow requires it. Restaurants receive structured order breakdowns to support preparation.",
        ],
        points: ["Restaurant menu management", "Company member management", "Employee meal ordering", "Aggregated preparation view", "Notifications and order history"],
      },
      {
        id: "reflection",
        label: "Reflection",
        title: "What this project demonstrates",
        paragraphs: [
          "MealFlow is an early-stage MVP and does not yet have paying customers. Its value at this stage is the working product foundation and the opportunity to test the workflow with real restaurant and corporate users.",
          "The project demonstrates how operational experience can inform product discovery, workflow design, technical trade-offs and hands-on delivery.",
        ],
        points: ["Translate operational pain into product requirements", "Balance MVP scope against future flexibility", "Design for multiple roles and connected workflows"],
      },
    ],
    links: [{ label: "Launch MealFlow", href: "https://mealflow-303d8.web.app/" }],
  },
  chopstack: {
    name: "Chopstack",
    type: "Restaurant operations · Product case study",
    subtitle: "Exploring a connected operating system for restaurants.",
    intro:
      "Chopstack is an in-development restaurant operations platform designed around sales, payments, staff, inventory, finance and multi-branch operations.",
    image: "/images/projects/chopstack1.png",
    imageAlt: "Chopstack restaurant management dashboard concept",
    galleryEyebrow: "CONCEPT VISUALS",
    galleryTitle: "Illustrative Product Concepts",
    gallery: [
      {
        src: "/images/projects/chopstack2.png",
        alt: "Chopstack point of sale interface concept",
        caption: "Point of Sale",
      },
      {
        src: "/images/projects/chopstack3.png",
        alt: "Chopstack inventory management interface concept",
        caption: "Inventory Management",
      },
    ],
    role: "Product discovery, requirements, permission modelling, database architecture and implementation",
    stack: "React · Vite · Supabase · PostgreSQL",
    stage: "Active development",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        title: "The problem space",
        paragraphs: [
          "Restaurant operations span walk-in sales, online orders, payment confirmation, staff responsibilities, inventory and financial records. When these workflows sit in disconnected tools, owners have less visibility and teams spend time reconciling information.",
          "Chopstack explores how these operational areas can work together in one platform while supporting the realities of restaurant businesses.",
        ],
        points: ["Disconnected operational workflows", "Payment reconciliation", "Staff access and accountability", "Multi-branch visibility"],
      },
      {
        id: "decisions",
        label: "Decisions",
        title: "Building the foundation before the feature list",
        paragraphs: [
          "The product is being designed around tenant isolation, explicit capabilities and database-enforced integrity. Money values are represented in integer kobo, and trusted backend logic is responsible for calculating totals and enforcing sensitive rules.",
          "Staff roles use centrally defined templates that restaurants can customise. The capability registry remains centrally controlled, while platform administration uses explicit permissions and audited actions.",
        ],
        points: ["Multi-tenant data boundaries", "Capability-based permissions", "At least one protected restaurant owner", "Auditable financial and administrative actions"],
      },
      {
        id: "solution",
        label: "Solution",
        title: "A connected restaurant operations model",
        paragraphs: [
          "The planned platform brings together restaurant storefronts, walk-in POS, online orders, payment confirmation, delivery, inventory, wallets and credit, corporate billing and analytics.",
          "The current work focuses on product definition, the data model, identity and membership, permissions and the foundations required for reliable operations. Not every planned feature is implemented yet.",
        ],
        points: ["Walk-in and online sales", "Cash, transfer and POS payment workflows", "Staff roles and capabilities", "Inventory and financial foundations", "Branch-aware operations"],
      },
      {
        id: "reflection",
        label: "Reflection",
        title: "What this project demonstrates",
        paragraphs: [
          "Chopstack is actively being developed. The product requirements and architecture are evolving, so this case study distinguishes design decisions and planned capabilities from completed implementation.",
          "The work demonstrates a systems-oriented approach to product management: defining constraints, modelling permissions, anticipating edge cases and establishing data integrity before expanding the feature surface.",
        ],
        points: ["Model complex business rules explicitly", "Design permissions as capabilities", "Treat financial records and tenant boundaries as core foundations"],
      },
    ],
    links: [],
  },
  todoworkspaces: {
    name: "TodoWorkspaces",
    type: "Task management · Product case study",
    subtitle: "Making team tasks structured, reviewable and accountable.",
    intro:
      "TodoWorkspaces is a task management application where users organise work into workspaces and teams can complete, review and approve tasks.",
    image: "/images/projects/todo1.png",
    imageAlt: "TodoWorkspaces workspace dashboard concept",
    galleryEyebrow: "CONCEPT VISUALS",
    galleryTitle: "Illustrative Product Concepts",
    gallery: [
      {
        src: "/images/projects/todo2.png",
        alt: "TodoWorkspaces task management interface concept",
        caption: "Task Management",
      },
      {
        src: "/images/projects/todo3.png",
        alt: "TodoWorkspaces supervisor review and approval interface concept",
        caption: "Review and Approval",
      },
    ],
    role: "Product thinking, workflow definition and application development",
    stack: "React · Vite · Redux Toolkit · Firebase",
    stage: "Built · Refinement planned",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        title: "A task workflow with accountability",
        paragraphs: [
          "Basic task lists do not always capture the review and approval steps that teams need. TodoWorkspaces explores a structured workflow where tasks belong to workspaces and completion can trigger a review process.",
          "The product supports users working across multiple workspaces while giving supervisors a way to review submitted work.",
        ],
        points: ["Multiple workspaces", "Shared task completion", "Supervisor review", "Controlled task revision"],
      },
      {
        id: "decisions",
        label: "Decisions",
        title: "Completion is a workflow state",
        paragraphs: [
          "A key product decision is that marking a task complete locks it against further edits. If a supervisor needs changes, the task can be unlocked for revision rather than silently modified after submission.",
          "This makes the review step explicit and gives the team a clearer record of task progress.",
        ],
        points: ["Completed tasks become locked", "Supervisors can approve work", "Tasks can be unlocked for revision"],
      },
      {
        id: "solution",
        label: "Solution",
        title: "Workspace-based task management",
        paragraphs: [
          "Users can create workspaces, add tasks and collaborate with team members. Supervisors can review completed tasks, approve them or unlock them when further work is needed.",
          "The application was built with React and Firebase, with Redux Toolkit supporting client-side state management.",
        ],
        points: ["Workspace creation", "Task creation and assignment", "Team task completion", "Review and approval flow"],
      },
      {
        id: "reflection",
        label: "Reflection",
        title: "What this project demonstrates",
        paragraphs: [
          "TodoWorkspaces demonstrates an approach to modelling task state beyond a simple open-or-done checkbox. It explores how permissions and state transitions can support accountability in team workflows.",
          "The project is complete as an initial build, with further refinement planned.",
        ],
        points: ["Translate workflow needs into state transitions", "Consider permissions at each stage", "Make review and revision part of the product model"],
      },
    ],
    links: [{ label: "View GitHub repository", href: "https://github.com/anyiamvictor/todo-workspaces" }],
  },
};

function CaseStudyPage() {
  const { slug } = useParams();
  const project = caseStudies[slug];
  const [activeTab, setActiveTab] = useState("overview");
  const [tabDirection, setTabDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const changeTab = (nextTab) => {
    if (nextTab === activeTab) return;

    const currentIndex = project.tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = project.tabs.findIndex((tab) => tab.id === nextTab);

    setTabDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(nextTab);
  };

  const panelVariants = {
    enter: (direction) => ({
      x: reduceMotion ? 0 : direction > 0 ? 28 : -28,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: reduceMotion ? 0 : direction > 0 ? -28 : 28,
      opacity: 0,
    }),
  };

  if (!project) {
    return (
      <main className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/work">Back to product work</Link>
      </main>
    );
  }

  const activeContent = project.tabs.find((tab) => tab.id === activeTab) ?? project.tabs[0];

  return (
    <main className={styles.page}>
      <Link to="/work" className={styles.backLink}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
      </Link>

      <header className={styles.caseHero}>
        <div className={`${styles.heroImage} ${project.name === "MealFlow" ? styles.heroImageContain : ""}`}>
          <img src={project.image} alt={project.imageAlt} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>{project.type}</span>
          <h1>{project.name}</h1>
          <h2>{project.subtitle}</h2>
          <p>
            <span className={styles.desktopCopy}>{project.intro}</span>
            <span className={styles.mobileCopy}>{project.subtitle}</span>
          </p>
          <div className={styles.heroActions}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.snapshot} aria-label="Project snapshot">
        <div><span>MY ROLE</span><p>{project.role}</p></div>
        <div><span>TECHNOLOGY</span><p>{project.stack}</p></div>
        <div><span>PROJECT STAGE</span><p>{project.stage}</p></div>
      </section>

      <section className={styles.caseBody}>
        <div className={styles.tabList} role="tablist" aria-label={`${project.name} case study sections`}>
          {project.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`case-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`case-panel-${tab.id}`}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
              onClick={() => changeTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.panelStage}>
          <AnimatePresence initial={false} mode="sync" custom={tabDirection}>
            <motion.article
              className={styles.panel}
              role="tabpanel"
              id={`case-panel-${activeContent.id}`}
              aria-labelledby={`case-tab-${activeContent.id}`}
              key={activeContent.id}
              custom={tabDirection}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.panelEyebrow}>{String(project.tabs.findIndex((tab) => tab.id === activeContent.id) + 1).padStart(2, "0")} / {activeContent.label.toUpperCase()}</span>
              <h2>{activeContent.title}</h2>
              {activeContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ul>
                {activeContent.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      {project.gallery?.length > 0 && (
        <section className={styles.gallery} aria-label={`${project.name} product screenshots`}>
          <div className={styles.galleryHeading}>
            <span>{project.galleryEyebrow || "PRODUCT SCREENS"}</span>
            <h2>{project.galleryTitle || `Inside ${project.name}`}</h2>
          </div>

          <div className={styles.galleryGrid}>
            {project.gallery.map((item) => (
              <figure className={styles.galleryItem} key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default CaseStudyPage;





