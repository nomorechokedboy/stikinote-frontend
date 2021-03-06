import React from "react";
import styles from "./featuresLeft.module.scss";

import Slogan from "../Slogan";

interface IFeaturesLeft {
  content: string[];
}

const content = [
  "Lorem assumenda molestias commodi est rem. Molestiae et porro non magnam facere temporibus? Ratione maxime dolorum recusandae eum totam, quia Dolorem esse reiciendis tempore delectus aliquam? Fugit alias vitae cum!",
  "Lorem assumenda molestias commodi est rem. Molestiae et porro non magnam facere temporibus? Ratione maxime dolorum recusandae eum totam, quia Dolorem esse reiciendis tempore delectus aliquam? Fugit alias vitae cum!",
];

const FeaturesDescript = ({ content }: IFeaturesLeft) => (
  <p className={styles.descript}>{content}</p>
);

const FeaturesLeft = () => {
  return (
    <div className={styles.container}>
      <Slogan text="Features" />
      {content.map((_el, i) => (
        <FeaturesDescript content={content} key={i} />
      ))}
    </div>
  );
};

export default FeaturesLeft;
