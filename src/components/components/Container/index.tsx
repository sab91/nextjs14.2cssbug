import clsx from "clsx";

import styles from "./index.module.scss";

interface ContainerProps {
  children?: React.ReactNode;
  containerClassName?: string;
  wrapperClassName?: string;
}

// export default function ContainerComponent({
//   children,
//   containerClassName,
//   wrapperClassName,
// }: ContainerProps) {
//   return <>{children}</>;
// }
export default function ContainerComponent({
  children,
  containerClassName,
  wrapperClassName,
}: ContainerProps) {
  return (
    <section className={clsx(styles.wrapper, wrapperClassName)}>
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>
    </section>
  );
}
