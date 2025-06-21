"use client";
import { use, useState } from "react";
import styles from "./Filters.module.css";

const filterSections = [
  { label: "CUSTOMIZABLE", type: "checkbox" },
  { label: "IDEAL FOR", options: ["All", "Men", "Women", "Kids"] },
  { label: "OCCASION", options: ["All", "Casual", "Formal", "Party"] },
  { label: "WORK", options: ["All", "Office", "Home", "Outdoor"] },
  { label: "FABRIC", options: ["All", "Cotton", "Wool", "Leather"] },
  { label: "SEGMENT", options: ["All", "Premium", "Budget"] },
  { label: "SUITABLE FOR", options: ["All", "Summer", "Winter"] },
  { label: "RAW MATERIALS", options: ["All", "Organic", "Synthetic"] },
  { label: "PATTERN", options: ["All", "Solid", "Striped", "Checked"] },
];

export default function Filters() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (label) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className={styles.filters}>
      {filterSections.map((section, idx) => (
        <div key={section.label} className={styles.section}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(section.label)}
          >
            {section.label === "CUSTOMIZABLE" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <input className={styles.customize} type="checkbox" id="customizable" />
                <span style={{ marginLeft: "0.5em" }}>{section.label}</span>
              </span>
            ) : (
              <span>{section.label}</span>
            )}
            {section.options && (
              <span className={styles.arrow}>
                {openSections[section.label] ? "▲" : "▼"}
              </span>
            )}
          </div>
          {section.options && openSections[section.label] && (
            <div className={styles.sectionBody}>
              {section.options.map((opt) => (
                <div key={opt} className={styles.option}>
                  <input type="radio" name={section.label} id={opt} />
                  <label htmlFor={opt}>{opt}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
