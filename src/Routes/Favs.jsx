import React from "react";
import Card from "../Components/Card";

const Favs = () => {
  let odontologoLS = JSON.parse(localStorage.getItem("odontologos"))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {odontologoLS.map(elemento => <Card key= {elemento.id} od={elemento}></Card>)}
      </div>
    </>
  );
};

export default Favs;
