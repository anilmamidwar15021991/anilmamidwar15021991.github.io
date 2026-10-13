import { useState, useRef } from "react";
import styles from "./Testimonials.module.css";
import { testimonials, type Testimonial } from "../../data";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.cardHeader}>
          <div className={styles.avatarRing}>
            <img
              src={item.avatar}
              alt={item.name}
              className={styles.avatarImg}
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
          <div className={styles.authorMeta}>
            <div className={styles.authorNameRow}>
              <span className={styles.authorName}>{item.name}</span>
              <span
                className={styles.linkedInBadge}
                title="LinkedIn Recommendation"
                aria-label="LinkedIn Recommendation"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </span>
            </div>
            <span className={styles.authorRole}>{item.role}</span>
          </div>
        </div>

        <div className={styles.quoteBlock}>
          <span className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </span>
          <p className={styles.quoteText}>{item.text}</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.relationTag}>{item.relation}</span>
        <span className={styles.dateTag}>{item.date}</span>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const togglePause = () => setIsPaused((prev) => !prev);

  const scrollBy = (offset: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // We repeat items 3 times for a completely seamless loop regardless of screen resolution
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-label="LinkedIn Recommendations"
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Endorsements & Recommendations</span>
          </div>
          <h2 className={styles.title}>
            What leaders & teams say on <em>LinkedIn</em>
          </h2>
        </div>

        <div className={styles.headerControls}>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => scrollBy(-400)}
            aria-label="Scroll left"
            title="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={togglePause}
            aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => scrollBy(400)}
            aria-label="Scroll right"
            title="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div
          ref={trackRef}
          className={`${styles.track} ${isPaused ? styles.trackPaused : ""}`}
        >
          {items.map((item, index) => (
            <TestimonialCard
              key={`${item.id}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
