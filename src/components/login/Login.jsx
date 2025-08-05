import { useState } from "react";
import styles from "./Login.module.css";
import drink from "../../assets/drink.png"
import useAppContext from "../../store/AppContext";

export default function Login({ onSuccess }) {
    const { store, actions } = useAppContext();
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState("");

    const PASSWORD = "Cocktail25";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === PASSWORD) {
            setError("");
            onSuccess();
        } else {
            setError("Contraseña incorrecta. Intentá de nuevo");
            setPasswordInput("");
        }
    };

    return (
        <div className={styles.backdrop}>
            <div className={styles.card}>
                <b></b>
                <div className={styles.content}>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>¡Bienvenido, cocktelero!</h1>
                        <img src={drink} className={styles.emoji} alt="drink" />
                    </div>
                    <h2>Ingresa la password super secreta.</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={store.inputName}
                            onChange={(e) => actions.setInputName(e.target.value)}
                            placeholder="Nombre"
                            className={styles.input}
                        />
                         <input
                            type="password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder="Contraseña"
                            className={styles.input}
                        />
                        <div className={styles.container} type="submit">
                            <button className={styles.button}>Enviar</button>
                        </div>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            </div>
        </div>
    );
}
