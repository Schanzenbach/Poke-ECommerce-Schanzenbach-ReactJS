import React from "react";

export const Checkout = ({ submitForm, captureUser }) => {
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={captureUser}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          onChange={captureUser}
        />
        <button type="submit">TERMINAR</button>
      </form>
    </div>
  );
};
