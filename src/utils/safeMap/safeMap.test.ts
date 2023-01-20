import { safeMap } from "./safeMap";

const mockArray = [{ id: "1" }, { id: "2" }];

it("Should return array if defined", () => {
  expect(safeMap(mockArray)).toBe(mockArray);
});

it("Should return null if array not defined", () => {
  expect(safeMap(undefined)).toBe(null);
});

