import React from 'react';
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContextGlobal();

  return (
    <nav>
      <div className={theme.className}>
          <h1><span>D</span>H Odonto</h1>
      </div>
      <div>
          <Link to="/" className={theme.className}>Home </Link>
          <Link to="/contact" className={theme.className}>Contact </Link>
          <Link to="/favs" className={theme.className}>Favs </Link>
          <button onClick={handleChangeTheme} className="darkButton">🌙</button>
          </div>    
    </nav>
  )
}

export default Navbar;