import { FaTimes } from "react-icons/fa";

export const Questions = ({ questt, onDelete }) => {
  return (
    <div className="list">
      <h3>{questt.title}</h3>
      <h3>
        {questt.description}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(questt.id)}
        />
      </h3>
      <h3>{questt.solution}</h3>
      <h3>{questt.competition}</h3>
      <h3>{questt.clients}</h3>
      <h3>{questt.products}</h3>
      <h3>{questt.distribution}</h3>
      <h3>{questt.team}</h3>
      <h3>{questt.inversion}</h3>
      <h3>{questt.promotion}</h3>
    </div>
  );
};
