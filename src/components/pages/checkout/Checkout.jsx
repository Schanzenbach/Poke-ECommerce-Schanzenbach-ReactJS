export const Checkout = ({ submitForm, captureUser, orderId }) => {
  return (
    <>
      {orderId ? (
        <div>
          <h1>Gracias por tu compra! tu ID de seguimiento es: {orderId}</h1>
          <h4>No te olvides de guardarla</h4>
        </div>
      ) : (
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
              placeholder="E-mail"
              name="email"
              onChange={captureUser}
            />
            <input
              type="int"
              placeholder="Teléfono"
              name="phone"
              onChange={captureUser}
            />
            <button type="submit">COMPRAR</button>
          </form>
        </div>
      )}
    </>
  );
};
