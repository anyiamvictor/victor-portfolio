import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.portrait}>
          <img src="/images/victor/vic1.jpg" alt="Victor" loading="eager" fetchPriority="high" decoding="async" />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            PRODUCT MANAGER · 
          </span>

          <h1>
            Anyiam Victor
            <span>Obinna.</span>
          </h1>

          <h2>
            <span className={styles.desktopCopy}>
              Turning Business Problems Into Digital Solutions.
            </span>
            <span className={styles.mobileCopy}>
              Business-minded. Product-focused.
            </span>
          </h2>

          <p className={styles.intro}>
            <span className={styles.desktopCopy}>
              I combine business operations experience, structured product
              thinking and AI-assisted development to turn real-world problems
              into practical digital solutions.
            </span>
            <span className={styles.mobileCopy}>
              I turn business challenges into practical digital products
              through product thinking and AI-assisted development.
            </span>
          </p>

          <div className={styles.availability}>
            <span className={styles.statusDot} />
            <span className={styles.desktopCopy}>
              Open to Product Management Opportunities
            </span>
            <span className={styles.mobileCopy}>
              Open to opportunities
            </span>
          </div>

          <div className={styles.actions}>
            <Link to="/work" className={styles.primaryButton}>
              View My Work <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className={styles.secondaryButton}>
              Let's Connect <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredHeading}>
          <div>
            <span className={styles.eyebrow}>FEATURED PRODUCT</span>
            <h2>Currently building</h2>
          </div>
          <BriefcaseBusiness size={22} />
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectMark}>
            <span>M</span>
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>
              <h3>MealFlow</h3>
              <span className={styles.projectStatus}>Built · Refining</span>
            </div>
            <p>
              <span className={styles.desktopCopy}>
                A B2B platform connecting restaurants and companies for
                coordinated corporate meal ordering.
              </span>
              <span className={styles.mobileCopy}>
                Corporate meal ordering, simplified.
              </span>
            </p>
          </div>

          <Link
            to="/work/mealflow"
            className={styles.projectLink}
            aria-label="View MealFlow case study"
          >
            <ArrowUpRight size={21} />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Business-minded product thinking.</span>
        <span>AI-assisted product development.</span>
      </footer>
    </div>
  );
}

export default HomePage;


