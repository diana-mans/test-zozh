import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the graphical intro and all ten questions", () => {
  render(<App />);
  expect(screen.getByRole("img", { name: /почему у тебя не получается/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /настоящим успехом/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /получить результат/i })).toBeDisabled();
});
