import { Button } from "./Button";

export const HeaderForm = ({ title, onAdd, showAdd }) => {
  return (
    <div className="container-head">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "-" : "+"}
        onClick={onAdd}
      />
    </div>
  );
};
