import { render } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    const { container } = render(<Page />);

    const header = container.querySelector("header");

    expect(header).toBeInTheDocument();
  });
});
