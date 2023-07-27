
import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const getStars = (difficulty) => {
  const starCount = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const stars = [];
  for (let i = 0; i < starCount[difficulty]; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  return stars;
};

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  // Calculate progress percentage
  const progress = (quizState.currentQuestionIndex / quizState.questions.length) * 100;

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of&nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div onClick={() => dispatch({ type: "RESTART" })} className="next-button">
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="progress-bar">
            <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="question-difficulty">
            {getStars(quizState.questions[quizState.currentQuestionIndex].difficulty)}
          </div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div onClick={() => dispatch({ type: "NEXT_QUESTION" })} className="next-button">
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
