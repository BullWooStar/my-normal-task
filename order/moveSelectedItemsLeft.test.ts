import { moveSelectedItemsLeft } from "./main";

describe("moveSelectedItemsLeft", () => {
  it("normal test", () => {
    const data = [1, 2, 3, 4, 5];
    const selected = [1, 3, 5];

    const result = moveSelectedItemsLeft(data, selected);

    expect(result).toEqual([1, 3, 2, 5, 4]);
  });

  it("normal test2", () => {
    const data = [1, 2, 3];
    const selected = [3, 1];

    const result = moveSelectedItemsLeft(data, selected);

    expect(result).toEqual([1, 3, 2]);
  });
});
