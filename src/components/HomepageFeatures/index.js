import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Scopri il mondo del routing",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Scopri le diverse tipologie di routing, i loro pro e contro, e come
        scegliere la soluzione migliore per le tue esigenze.
      </>
    ),
  },
  {
    title: "Routing dinamico vs. statico: quale scegliere?",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Scopri le differenze tra queste due opzioni e come scegliere quella
        giusta per te con esempi pratici.
      </>
    ),
  },
  {
    title: "Ottimizza il tuo routing",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Migliora le prestazioni, riduci il traffico e aumenta la sicurezza del
        tuo sistema di routing con consigli pratici e best practice.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
