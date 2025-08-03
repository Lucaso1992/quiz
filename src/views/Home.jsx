import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import './Home.css'
import useAppContext from "../store/AppContext.jsx"
import Login from "../components/login/Login.jsx"

function Home() {
  const [count, setCount] = useState(0)
  const { store } = useAppContext();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <div id="animated-bg"></div>
      <div class="home_container">
        {!isLoggedIn && <Login onSuccess={handleLoginSuccess} />}

        {isLoggedIn && (
          <>
            <div class="intro_container">
              <h1>¡Hola "nombre"!</h1>
              <h1 class="monje">🧙‍♂️</h1>
            </div>
            <h2>Llegó la hora de poner a prueba tu conocimiento</h2>
            <div class="subtitle_container">
              <h2>¿Estás listo para dominar el ranking?</h2>
              <h1 class="trofeo">🏆</h1>
            </div>
            <div class="buttons_container">
              <button type="button" class="btn btn-calido">
                <strong>QUIZZES</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </button>
              <button type="button" class="btn btn-frio">
                <strong>RANKINGS</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home;
