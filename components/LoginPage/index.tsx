import React from "react";
import LoginContainer from "../shards/LoginContainer";
import Image from "next/image";
import styles from "./loginPage.module.scss";

const ImageContainer = () => (
  <div className={styles.imageContainer}>
    <Image
      src="https://cdn.discordapp.com/attachments/759048227935879226/903853382488449054/loginImage.jpg"
      alt="A peaceful view"
      layout="fill"
    />
  </div>
);

const LogoContainer = () => (
  <div className={styles.logoWrapper}>
    <Image src="/logo.png" alt="StikiNote logo" width={100} height={100} />
    <span className={styles.pageName}>StikiNote</span>
  </div>
);

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <ImageContainer />
      <div className={styles.main}>
        <LogoContainer />
        <LoginContainer />
      </div>
    </div>
  );
}
