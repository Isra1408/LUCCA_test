export const SectionDescription = () => {
  return (
    <div className="section__plan">
      <img
        src="../img/quest.jpg"
        alt="question"
        className="img__1"
        id="questions"
      ></img>
      <div className="feature_1">
        <h2 className="desc">Desarrolla tus ideas</h2>
        <p>
          Identifique una necesidad, conozca al público, identifique las
          herramientas y descubra lo necesario para poner en marcha su negocio.
        </p>
      </div>
      <img
        src="../img/results.jpg"
        alt="result"
        className="img__2"
        id="results"
      ></img>
      <div className="feature_2">
        <h2>Obten tu plan de negocio</h2>
        <p>
          Haga sus consultas para poder obtener su plan de negocio, el cual
          podrá visualizar y utilizar en cualquier momento.
        </p>
      </div>
    </div>
  );
};
