import { Questions } from "./Questions";

export const Question = ({ questionsData, onDelete }) => {
  return (
    <>
      {questionsData.map((quest) => (
        <Questions key={quest.id} questt={quest} onDelete={onDelete} />
      ))}
    </>
  );
};
