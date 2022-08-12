import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Aventure-rh',
    Svg: require('@site/static/img/aventurerh.svg').default,
    description: (
      <>
        <a href="https://aventure-rh.com">Site d'une agence de ressources humaines</a>
      </>
    ),
  },
  {
    title: 'Ajjardin',
    Svg: require('@site/static/img/ajjardin.svg').default,
    description: (
      <>
        Site d'une entreprise de jardinage qui déchire sur le 06. 
      </>
    ),
  },
  {
    title: 'Stone-4-you',
    Svg: require('@site/static/img/stone4you.svg').default,
    description: (
      <>
        Site de e-commerce d'une artiste fabriquant des bijoux avec des pierrres.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
