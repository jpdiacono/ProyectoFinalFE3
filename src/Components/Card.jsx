import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";
import doctorImage from "../images/doctor.jpg";




const Card = ({ od }) => {
  
  const{theme}= useContextGlobal()

  const addFav = ()=>{
    
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const odontologo = {
      id: od.id,
      name: od.name,
      username: od.username,
    };
    odontologos.push(odontologo);
    localStorage.setItem("odontologos", JSON.stringify(odontologos));
    alert("se ha añadido a favoritos")
  }

  return (
    <div className={theme.className}>
      <div className="card">
        <img className="doctor" src={doctorImage} alt="" />
        <Link to={"/detail/" + od.id}>
          <h4>{od.name}</h4>
        </Link>
        <h5>{od.username}</h5>
        <p>ID {od.id}</p>
        <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </div>
  );
};

export default Card;
