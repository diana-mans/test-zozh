export enum ImageName {
  Placeholder = "1.png",
  HeaderLogo = "elements/logo-header.png",
  TestDescription = "elements/test-description.png",
  FooterInfo = "elements/info-footer.png",
  Congratulation = "elements/congratulation.png",
  Theorist = "elements/theorist.png",
  Tired = "elements/tired.png",
  Perfectionist = "elements/perfectionist.png",
  Disrupt = "elements/disrupt.png",
  LinkButton = "elements/link_button.png",
  DontStop = "elements/dont-stop.png",
  Almost = "elements/almost.png",
}

export const imagePath = (name: ImageName): string => `/images/${name}`;

export const questionImagePath = (questionId: number): string =>
  `/images/elements/question-${questionId}.png`;
