import React from "react";
import styles from "./iconWrapper.module.scss";

interface IIconWrapperProps {
  children: React.ReactNode;
}

export default function IconWrapper({ children }: IIconWrapperProps) {
  return <div className={styles.iconWrapper}>{children}</div>;
}
