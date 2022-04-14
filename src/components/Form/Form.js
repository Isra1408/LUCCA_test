import { Nav } from "../Header/Nav";
import "./Forms.css";
import { PlanQuestion } from "./PlanQuestion";
import { FormTitle } from "./FormTitle";

export const Form = () => {
  return (
    <div className="form-principal" id="contain">
      <Nav />
      <FormTitle />
      <PlanQuestion />
    </div>
  );
};
