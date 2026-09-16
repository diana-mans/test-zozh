import { ReactElement } from "react";
type Props = { answered: number; total: number };
export function ProgressBar({ answered, total }: Props): ReactElement { return <div className="progress" aria-label={`Отвечено ${answered} из ${total}`}><div className="progress__fill" style={{ width: `${(answered / total) * 100}%` }} /></div>; }
