"use client";

import SignInFeature from "@features/SignIn";

import styles from "./index.module.scss";

export default function AuthorizationWidget() {
  return (
    <div className={styles.box}>
      <SignInFeature />
    </div>
  );
}
