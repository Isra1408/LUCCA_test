import { useState } from "react";

export const AddIdea = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");
  const [competition, setCompetition] = useState("");
  const [clients, setClients] = useState("");
  const [products, setProducts] = useState("");
  const [distribution, setDistribution] = useState("");
  const [team, setTeam] = useState("");
  const [inversion, setinversion] = useState("");
  const [promotion, setpromotion] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      title,
      description,
      solution,
      competition,
      clients,
      products,
      distribution,
      team,
      inversion,
      promotion,
    });

    setTitle("");
    setDescription("");
    setSolution("");
    setCompetition("");
    setClients("");
    setProducts("");
    setDistribution("");
    setTeam("");
    setinversion("");
    setpromotion("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Mercado</label>
        <input
          type="text"
          placeholder="Agregue su mercado objetivo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>¿Porqué?</label>
        <input
          type="text"
          placeholder="Agregue su problema"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Solución</label>
        <input
          type="text"
          placeholder="Agregue su solución"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Competidores</label>
        <input
          type="text"
          placeholder="Agregue sus competidores"
          value={competition}
          onChange={(e) => setCompetition(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Clientes</label>
        <input
          type="text"
          placeholder="¿Quiénes serán sus clientes?"
          value={clients}
          onChange={(e) => setClients(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Productos</label>
        <input
          type="text"
          placeholder="¿Que tiene pensado ofrecer?"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Distribución</label>
        <input
          type="text"
          placeholder="¿Donde piensa distribuirlo?"
          value={distribution}
          onChange={(e) => setDistribution(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Team</label>
        <input
          type="text"
          placeholder="Agregue a su equipo"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Inversión inicial</label>
        <input
          type="text"
          placeholder="¿Cuál es su inversión inicial?"
          value={inversion}
          onChange={(e) => setinversion(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Promoción</label>
        <input
          type="text"
          placeholder="¿Donde piensa promocionarlo?"
          value={promotion}
          onChange={(e) => setpromotion(e.target.value)}
        ></input>
      </div>

      <input type="submit" value="Agregar" className="btn btn-block" />
    </form>
  );
};
