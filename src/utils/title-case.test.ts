import { expect, describe, it } from "vitest";
import titleCase from "./title-case";

describe("titleCase", () => {
  it("should capitalize the first letter of each word in a string", () => {
    expect(titleCase("hello")).toBe("Hello");
    expect(titleCase("this is a test")).toBe("This Is A Test");
    expect(titleCase("a short sentence")).toBe("A Short Sentence");
  });

  it("should handle empty strings", () => {
    expect(titleCase("")).toBe("");
  });

  it("should handle strings with non-word characters", () => {
    expect(titleCase("the quick brown fox!")).toBe("The Quick Brown Fox!");
    expect(titleCase("a sentence with-hyphens")).toBe(
      "A Sentence With-Hyphens",
    );
  });
});
