import { useState } from "react";
import styles from "./Login.module.css";

export default function Login({ onSuccess }) {
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const PASSWORD = "Cocktail25";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setError("");
      onSuccess(); 
    } else {
      setError("Contraseña incorrecta. Intentá de nuevo 🍸");
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Hola, cocktelero! 🍹</h2>
        <p>Ingresa la password super secreta.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
