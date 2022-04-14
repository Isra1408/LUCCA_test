export const Cards = () => {
  return (
    <div className="card-list">
      <div className="card-container">
        <div className="image-container">
          <img src="img/idea.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Desarrolla tus ideas en un negocio</h3>
          </div>
          <div className="card-body">
            <p>
              Vizualize su idea y estructure los puntos más importantes en
              nuestra tabla de preguntas. Esto le permitirá observar los puntos
              necesarios para llevar a cabo su idea.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src="img/bussines.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Plan de negocios</h3>
          </div>
          <div className="card-body">
            <p>
              El mentor LUCCA le ofrecerá una guía paso a paso para armar su
              plan de negocio, pasando por su idea inicial hasta el desarrollo
              de su negocio.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src="img/logo3.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Consultas al mentor virtual LUCCA</h3>
          </div>
          <div className="card-body">
            <p>
              Haga sus consultas al mentor virtual LUCCA y despeje sus dudas en
              lo que respecta a su negocio.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src="img/enterprise.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Obtenga mentorías especializadas</h3>
          </div>
          <div className="card-body">
            <p>
              Consiga mentorías especializadas con empresas que le ayudarán a
              desarrollar sus ideas de negocios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
