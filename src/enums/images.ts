export enum ImageName {
  Placeholder = "1.webp",
  HeaderLogo = "elements/logo-header.webp",
  TestDescription = "elements/test-description.webp",
  FooterInfo = "elements/info-footer.webp",
  Congratulation = "elements/congratulation.webp",
  Theorist = "elements/theorist.webp",
  Tired = "elements/tired.webp",
  Perfectionist = "elements/perfectionist.webp",
  Disrupt = "elements/disrupt.webp",
  LinkButton = "elements/link_button.webp",
  DontStop = "elements/dont-stop.webp",
  Almost = "elements/almost.webp",
}

export const imagePath = (name: ImageName): string => `${process.env.PUBLIC_URL}/images/${name}`;

export const questionImagePath = (questionId: number): string =>
  `${process.env.PUBLIC_URL}/images/elements/question-${questionId}.webp`;
