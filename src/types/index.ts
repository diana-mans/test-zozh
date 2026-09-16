export type Letter = "А" | "Б" | "В" | "Г";

export type PersonalityType = "Срывщик" | "Уставший" | "Теоретик" | "Перфекционист";

export type AnswerOption = {
  letter: Letter;
  text: string;
};

export type Question = {
  id: number;
  text: string;
  options: AnswerOption[];
};

export type TestResult = {
  type: PersonalityType;
  title: string;
  description: string;
  recommendation: string;
  image: ImageName;
};
import { ImageName } from "../enums/images";
