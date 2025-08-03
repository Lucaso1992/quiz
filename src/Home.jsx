import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import useAppContext from './store/AppContext'
import Login from './components/login/Login'

function Home() {
  const [count, setCount] = useState(0)
  const { store } = useAppContext();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  

  return (
    <>

     <div >
      {!isLoggedIn && <Login onSuccess={handleLoginSuccess} />}

      {isLoggedIn && (
        <>
          <h1 >Bienvenido al sitio secreto de quizzes 🍸</h1>
          <p >Acá empieza la magia del conocimiento...</p>
          {/* El resto de tu app va acá */}
        </>
      )}
  
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </div>
    </>
  )
}

export default Home
