// import { useState } from "react";
// import { questions } from "../data/questions";

// const Quiz = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showExplanation, setShowExplanation] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleAnswerOptionClick = (option) => {
//         setSelectedOption(option);
//         setShowExplanation(true);
//         if (option === questions[currentQuestion].correctAnswer) {
//             setScore(score + 1);
//         }
//     };

//     const nextQuestion = () => {
//         setShowExplanation(false);
//         setSelectedOption(null);
//         setCurrentQuestion(currentQuestion + 1);
//     };

//     const restartQuiz = () => {
//         setCurrentQuestion(0);
//         setScore(0);
//         setShowExplanation(false);
//         setSelectedOption(null);
//     };

//     if (currentQuestion >= questions.length) {
//         return (
//             <div>
//                 <h2>Вы завершили викторину!</h2>
//                 <p>
//                     Ваш счет: {score} из {questions.length}
//                 </p>
//                 <button onClick={restartQuiz}>Начать заново</button>
//             </div>
//         );
//     }

//     return (
//         <div className="quiz">
//             <div className="card">
//                 <h2 className="card-title">{questions[currentQuestion].question}</h2>

//                 {questions[currentQuestion].options.map((option, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleAnswerOptionClick(option)}
//                         disabled={showExplanation}
//                         style={{
//                             backgroundColor:
//                                 selectedOption === option
//                                     ? option ===
//                                       questions[currentQuestion].correctAnswer
//                                         ? "#28a745"
//                                         : "#dc3545"
//                                     : "",
//                         }}
//                     >
//                         {option}
//                     </button>
//                 ))}
//             </div>
//             {showExplanation && (
//                 <div>
//                     <p>{questions[currentQuestion].explanation}</p>
//                     {selectedOption ===
//                     questions[currentQuestion].correctAnswer ? (
//                         <p>Правильный ответ!</p>
//                     ) : (
//                         <p>
//                             Неправильный ответ. Правильный ответ:{" "}
//                             {questions[currentQuestion].correctAnswer}
//                         </p>
//                     )}
//                     <button onClick={nextQuestion}>Следующий вопрос</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Quiz;
import { useState } from "react";
import { questions } from "../data/questions";
// import "./"; // Подключаем файл стилей

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerOptionClick = (option) => {
        setSelectedOption(option);
        setShowExplanation(true);
        if (option === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        setShowExplanation(false);
        setSelectedOption(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowExplanation(false);
        setSelectedOption(null);
    };

    if (currentQuestion >= questions.length) {
        return (
            <div className="quiz">
                <h2 className="card-title">Вы завершили викторину!</h2>
                <p>
                    Ваш счет: {score} из {questions.length}
                </p>
                <button onClick={restartQuiz}>Начать заново</button>
            </div>
        );
    }

    return (
        <div className="quiz">
            <h1 className='App-title'>Викторина по истории России</h1>
            <h3>Правила игры:</h3>
            <h4>Вопросы будут постепенно появляться, чтобы не перегружать вас.</h4>
            <div className="card">
                <h2 className="card-title">{questions[currentQuestion].question}</h2>
                <form className="options-container">
                    {questions[currentQuestion].options.map((option, index) => (
                        <div key={index} className="option">
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name="answer"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleAnswerOptionClick(option)}
                                disabled={showExplanation}
                            />
                            <label htmlFor={`option-${index}`}>{option}</label>
                        </div>
                    ))}
                </form>
            </div>
            {showExplanation && (
                <div className="explanation">
                    <p>{questions[currentQuestion].explanation}</p>
                    {selectedOption === questions[currentQuestion].correctAnswer ? (
                        <p>Правильный ответ!</p>
                    ) : (
                        <p>
                            Неправильный ответ. Правильный ответ:{" "}
                            {questions[currentQuestion].correctAnswer}
                        </p>
                    )}
                    <button onClick={nextQuestion}>Следующий вопрос</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
