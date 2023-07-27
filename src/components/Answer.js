// const Answer = ({
//     answerText,
//     index,
//     onSelectAnswer,
//     currentAnswer,
//     correctAnswer,
//   }) => {
//     const letterMapping = ["A", "B", "C", "D"];
//     const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
//     const isWrongAnswer =
//       currentAnswer === answerText && currentAnswer !== correctAnswer;
//     const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
//     const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
//     const disabledClass = currentAnswer ? "disabled-answer" : "";
//     return (
//       <div
//         className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
//         onClick={() => onSelectAnswer(answerText)}
//       >
//         <div className="answer-letter">{letterMapping[index]}</div>
//         <div className="answer-text">{answerText}</div>
//       </div>
//     );
//   };
  
//   export default Answer;



import React, { useEffect, useState } from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
  showResult,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the message after 1 second
    if (showResult) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  }, [showResult]);

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
      {showMessage && (
        <div className={`answer-result ${isCorrectAnswer ? "correct" : "wrong"}`}>
          {isCorrectAnswer ? "Correct" : "Sorry"}
        </div>
      )}
    </div>
  );
};

export default Answer;
