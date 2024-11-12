import { findMBTI } from "./main";

describe("MBTI Calculation", () => {
  it("normal test", () => {
    const userResponses = [
      "매우 아니다",
      "보통이다",
      "매우 아니다",
      "보통이다",
      "보통이다",
      "메우 그렇다",
      "보통이다",
      "메우 그렇다",
    ];

    const expectedResult = "ESTP";
    const result = findMBTI(userResponses);
    expect(result).toBe(expectedResult);
  });

  it("모두 보통일때", () => {
    const userResponses = [
      "보통이다",
      "보통이다",
      "보통이다",
      "보통이다",
      "보통이다",
      "보통이다",
      "보통이다",
      "보통이다",
    ];

    const expectedResult = "ENFP";
    const result = findMBTI(userResponses);
    expect(result).toBe(expectedResult);
  });
});
