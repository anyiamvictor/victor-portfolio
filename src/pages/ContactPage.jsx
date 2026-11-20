import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siWhatsapp, siGithub } from "simple-icons";

import PageHero from "../components/PageHero";
import pageStyles from "./StandardPage.module.scss";
import styles from "./ContactPage.module.scss";
import { contactLinks } from "../data/contactLinks";
import { contactFormEndpoint } from "../data/contactConfig";

const brandIcons = {
  whatsapp: siWhatsapp,
  github: siGithub,
  linkedin: {
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
};

const standardIcons = {
  phone: Phone,
  mail: Mail,
};

function ContactIcon({ type }) {
  const brand = brandIcons[type];

  if (brand) {
    return (
      <svg
        className={styles.contactIcon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d={brand.path} fill="currentColor" />
      </svg>
    );
  }

  const Icon = standardIcons[type];

  if (!Icon) return null;

  return (
    <Icon
      className={styles.contactIcon}
      size={21}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message = result.errors
          ?.map((item) => item.message)
          .join(", ");

        throw new Error(
          message || "Your message could not be sent. Please try again."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={pageStyles.page}>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Connect"
        subtitle="Open to meaningful product conversations."
        description="Whether you're exploring a product opportunity, need help thinking through a business problem, or simply want to connect, I'd be glad to hear from you."
        mobileDescription="Open to product opportunities, collaborations and meaningful conversations. I'd be glad to hear from you."
        image="/images/victor/2.jpeg"
      />

      <section
        className={styles.contactSection}
        aria-label="Contact options"
      >
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>GET IN TOUCH</span>
          <h2>Choose how you'd like to connect.</h2>
        </div>

        <div className={styles.contactLinks}>
          {contactLinks.map((link) => (
            <a
              key={link.id}
              className={styles.contactLink}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              data-contact-channel={link.id}
            >
              <ContactIcon type={link.icon} />
              <span className={styles.contactLabel}>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formIntro}>
          <span className={styles.sectionLabel}>SEND A MESSAGE</span>
          <h2>Let's start a conversation.</h2>
          <p>
            Share a little about what you have in mind. I'll get back to you
            as soon as I can.
          </p>
        </div>

        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Full Name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-organization">
                Organization <span>(Optional)</span>
              </label>
              <input
                id="contact-organization"
                name="organization"
                type="text"
                placeholder="Company or organization"
                autoComplete="organization"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-inquiry">Inquiry Type *</label>
              <select
                id="contact-inquiry"
                name="inquiry_type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>
                <option value="Product Management Opportunities">
                  Product Management Opportunities
                </option>
                <option value="Product Consulting">
                  Product Consulting
                </option>
                <option value="Product Collaboration">
                  Product Collaboration
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about what you have in mind..."
                rows="6"
                required
              />
            </div>
          </div>

          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className={styles.honeypot}
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                className={styles.formSuccess}
                role="status"
                aria-live="polite"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <CheckCircle2 aria-hidden="true" />
                <p>
                  Thank you for reaching out! Your message has been sent
                  successfully. I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className={styles.formError}
                role="alert"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <AlertCircle aria-hidden="true" />
                <p>{errorMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
            whileHover={reduceMotion || isSubmitting ? undefined : { y: -1 }}
            whileTap={reduceMotion || isSubmitting ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.16 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send aria-hidden="true" />
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}

export default ContactPage;




