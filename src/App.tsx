import { ReactElement, useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { QuestionCard } from "./components/QuestionCard";
import { ResultScreen } from "./components/ResultScreen";
import { questions } from "./data/questions";
import { resultByLetter, results } from "./data/results";
import { ImageName, imagePath } from "./enums/images";
import { Letter, PersonalityType } from "./types";
import './App.css';

const letters: Letter[] = ["А", "Б", "В", "Г"];
function calculateResult(answers: Record<number, Letter>): PersonalityType { const counts: Record<Letter, number> = { А: 0, Б: 0, В: 0, Г: 0 }; Object.values(answers).forEach((letter: Letter): void => { counts[letter] += 1; }); return resultByLetter[letters.reduce((winner: Letter, letter: Letter): Letter => counts[letter] > counts[winner] ? letter : winner, "А")]; }
function App(): ReactElement {
  const [answers, setAnswers] = useState<Record<number, Letter>>({}); const [showResult, setShowResult] = useState<boolean>(false); const answered = Object.keys(answers).length; const canSubmit = answered === questions.length;
  const chooseAnswer = (questionId: number, letter: Letter): void => setAnswers((current: Record<number, Letter>): Record<number, Letter> => ({ ...current, [questionId]: letter }));
  if (showResult) return <ResultScreen result={results[calculateResult(answers)]} />;
  return <main className="test-page"><header className="hero"><img className="header-logo" src={imagePath(ImageName.HeaderLogo)} alt="Похудей ка" /><img className="test-description" src={imagePath(ImageName.TestDescription)} alt="Почему у тебя не получается похудеть. Пройди тест и узнай свой тип" /></header><div className="test-content"><ProgressBar answered={answered} total={questions.length} />{questions.map((question) => <div key={question.id}><QuestionCard question={question} selectedLetter={answers[question.id]} onSelect={(letter: Letter): void => chooseAnswer(question.id, letter)} />
    
    
    {[3].includes(question.id) && <img className="interlude" src={imagePath(ImageName.DontStop)} alt="Иллюстрация женщины" />}
    {[6].includes(question.id) && <img className="interlude" src={imagePath(ImageName.Almost)} alt="Иллюстрация женщины" />}
  
  </div>)}<section className="submit-section"><p>{canSubmit ? "Все ответы готовы" : `Ответь ещё на ${questions.length - answered} вопросов`}</p><button type="button" className="primary-button" disabled={!canSubmit} onClick={(): void => { setShowResult(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Получить результат теста</button></section></div></main>;
}

export default App;
