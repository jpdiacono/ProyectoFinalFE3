import React from "react";
import { useState } from "react";

const Form = () => {

  const [user,setUser] = useState({
    name:"",
    email:""
  })

  const [mensajeGracias,SetMensajeGracias] = useState(false)
  const [mensajeError, SetMensajeError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    user.name.length <= 5 ? SetMensajeError(true):SetMensajeGracias(true)
  }

  return (
    <div>
      <h2 className="contactanos">Contactanos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre Completo" name='name' onChange={(event) => setUser({...user, name: event.target.value})}/>
        <input type="email" placeholder="Email" name='email' onChange={(event) => setUser({...user, email: event.target.value})}/>
        <button>Send</button>
      </form>
      {mensajeError && <p>Por favor verifique su información nuevamente”</p>}
      {mensajeGracias && <p>“Gracias {user.name}, te contactaremos cuando antes vía mail</p>}

    </div>
  );
};

export default Form;


