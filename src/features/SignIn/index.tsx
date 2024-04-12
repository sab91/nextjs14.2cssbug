import { useState } from "react";

import styles from "./index.module.scss";

export default function SignInFeature() {
  const [login, setLogin] = useState("string");
  const [password, setPassword] = useState("string");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={(evt) => handleSubmit(evt)}>
      <h3>Authorization</h3>
      <input
        autoComplete="login"
        name="email"
        onChange={(evt) => setLogin(evt.target.value)}
        placeholder="Login"
        value={login}
      />
      <input
        autoComplete="current-password"
        name="password"
        onChange={(evt) => setPassword(evt.target.value)}
        placeholder="Пароль"
        type="password"
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
