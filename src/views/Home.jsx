import { useState, useEffect } from 'react'
import './Home.css'
import useAppContext from "../store/AppContext.jsx"
import Login from "../components/login/Login.jsx"
import monk from "../assets/monje.png";
import music from "../assets/the-mission.mp3";

function Home() {
  const { store } = useAppContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [audioInstance, setAudioInstance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.4;
    setAudioInstance(audio);

    const handleUserInteraction = () => {
      audio.play().then(() => setIsPlaying(true)).catch((err) => {
        console.log("Autoplay bloqueado:", err);
      });
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioInstance) return;
    if (isPlaying) {
      audioInstance.pause();
      setIsPlaying(false);
    } else {
      audioInstance.play();
      setIsPlaying(true);
    }
  };

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
                <h1 className='title'>Hola, Lucas</h1>
                <h2 className='subtitle'>
                  El camino del Analytics Engineer está forjado por la curiosidad y la sabiduría.
                  Pon a prueba tus conocimientos y fortalecé tus habilidades.
                </h2>
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

            <button
              className="music-toggle"
              onClick={toggleMusic}
              title={isPlaying ? "Pausar música" : "Reanudar música"}
            >
              {isPlaying ? '🎵' : '🔇'}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
