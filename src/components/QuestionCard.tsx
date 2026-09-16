import { AnswerOption, Letter, Question } from "../types";
import { questionImagePath } from "../enums/images";
import { ReactElement } from "react";
type Props = { question: Question; selectedLetter?: Letter; onSelect: (letter: Letter) => void };
export function QuestionCard({ question, selectedLetter, onSelect }: Props): ReactElement {
  const optionClassName = (option: AnswerOption): string => `answer-option ${selectedLetter === option.letter ? "answer-option--selected" : ""}`;
  return <section className="question-card" aria-labelledby={`question-${question.id}`}><div className="question-card__heading"><span className="question-card__number-wrap"><img className="question-card__number" src={questionImagePath(question.id)} alt={`Вопрос ${question.id}`} /></span><h2 id={`question-${question.id}`}>{question.text}</h2></div><div className="question-card__options" role="radiogroup" aria-label={question.text}>{question.options.map((option: AnswerOption) => <button className={optionClassName(option)} key={option.letter} type="button" role="radio" aria-checked={selectedLetter === option.letter} onClick={(): void => onSelect(option.letter)}><span className="answer-option__letter" aria-hidden="true" /><span>{option.text}</span></button>)}</div></section>;
}
