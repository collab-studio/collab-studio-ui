import { render, screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import Page from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toEqual("Home");
  });
});
