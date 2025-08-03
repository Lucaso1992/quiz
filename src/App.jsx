import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from "./routes/routes.jsx";

const App = () => {
    return (
    <BrowserRouter basename='/'>
      <div id="top"></div>
      <Routes>
        {routes.map((route) => <Route {...route} key={route.path} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default App;