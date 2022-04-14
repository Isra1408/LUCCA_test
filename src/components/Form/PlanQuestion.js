import { HeaderForm } from "./HeaderForm";
import { useState } from "react";
import { Question } from "./Question";
import { AddIdea } from "./AddIdea";

export const PlanQuestion = () => {
  const [showAddIdea, setShowAddIdea] = useState(false);
  const [questionsData, setQuestionData] = useState([
    {
      id: 1,
      title: "Example",
      description: "Example",
      solution: "",
      competition: "",
      clients: "",
      productos: "",
      distribution: "",
      team: "",
      inversion: "",
      promotion: "",
      reminder: false,
    },
  ]);

  //Delete idea
  const deleteIdea = (id) => {
    setQuestionData(questionsData.filter((ele) => ele.id !== id));
  };

  //Add Idea
  const addIdea = (idea) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newIdea = { id, ...idea };
    setQuestionData([...questionsData, newIdea]);
  };

  return (
    <div className="form-cards">
      <div className="container">
        <HeaderForm
          title="Plan de Idea"
          onAdd={() => setShowAddIdea(!showAddIdea)}
          showAdd={showAddIdea}
        />
        {showAddIdea && <AddIdea onAdd={addIdea} />}
        {questionsData.length > 0 ? (
          <Question questionsData={questionsData} onDelete={deleteIdea} />
        ) : (
          "Agregue alguna idea"
        )}
      </div>
    </div>
  );
};
