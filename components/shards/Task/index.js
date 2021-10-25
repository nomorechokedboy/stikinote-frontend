import React from "react";
import Icon from "../Icon";
import IconWrapper from "../IconWrapper";
import styles from "./task.module.css";

export default function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.taskWrapper}>
        <div className={styles.checkbox}></div>
        <span className={styles.todoTitle}>Hom nay phai quet nha</span>
      </div>
      <div className={styles.rightside}>
        <IconWrapper>
          <div>Work</div>
          <Icon
            iconName="book-open"
            handleClick={() => console.log("Book open clicked")}
          ></Icon>
          <Icon
            iconName="ellipsis-h"
            handleClick={() => console.log("Ellipsis-h clicked")}
          ></Icon>
        </IconWrapper>
      </div>
    </div>
  );
}
