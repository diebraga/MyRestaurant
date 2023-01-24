import { navItemIsSelected } from "./navItemIsSelected";

it("Should return 1 when isSelected is false", () => {
  expect(navItemIsSelected(true)).toBe(1);
});

it("Should return 0.5 when isSelected is true", () => {
  expect(navItemIsSelected(false)).toBe(0.5);
});
