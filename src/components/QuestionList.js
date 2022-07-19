import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setQuestions(data))
  }, [])

  function onDelete(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id)
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {
          questions.map((question) => {
            return <QuestionItem question={ question } onDelete={ onDelete } key={ question.id } />
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
