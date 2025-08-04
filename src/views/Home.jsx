import { useState } from 'react'
import './Home.css'
import useAppContext from "../store/AppContext.jsx"
import Login from "../components/login/Login.jsx"
import monk from "../assets/monje.png";

function Home() {
  const { store } = useAppContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* Elementos flotantes decorativos */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
      <div className="floating-element floating-element-4"></div>
      <div className="floating-element floating-element-5"></div>

      {/* Partículas brillantes */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>

      <div className="home_container">
        {!isLoggedIn && <Login onSuccess={handleLoginSuccess} />}

        {isLoggedIn && (
          <>
            <div className="content_wrapper">
              <div className="text_buttons_container">
                <h1>¡Hola, Lucas!</h1>
                <h2>Llegó la hora de poner a prueba tu conocimiento.</h2>
                <div className="subtitle_container">
                  <h2>¿Estás listo para dominar el ranking?</h2>
                </div>
                <div className="buttons_container">
                  <button type="button" className="btn btn-calido">
                    <strong>QUIZZES</strong>
                    <div id="container-stars"><div id="stars"></div></div>
                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                  <button type="button" className="btn btn-frio">
                    <strong>RANKINGS</strong>
                    <div id="container-stars"><div id="stars"></div></div>
                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
              <img src={monk} className="monje" alt="monje" loading="eager" />
          </>
        )}
      </div>
    </>
  )
}

export default Home;
