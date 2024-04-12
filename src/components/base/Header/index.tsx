"use client";

import ContainerComponent from "@components/Container";
import Link from "next/link";

import styles from "./index.module.scss";

export default function HeaderComponent() {
  return (
    <ContainerComponent
      containerClassName={styles.container}
      wrapperClassName={styles.wrapper}
    >
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/authorization">Authorization</Link>
          </li>
        </ul>
      </nav>
    </ContainerComponent>
  );
}
