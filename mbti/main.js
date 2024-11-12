"use strict";
/**
 * MBTI를 계산해 콘솔에 출력하는 콘솔 프로그램을 작성해주세요.
 *
 * 아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
 * 모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.
 *   매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다
 *
 * 선택지에 따라 다음과 같이 점수를 부여합니다.
 *   매우 아니다는 disagree 타입에 2점
 *   아니다는 disagree 타입에 1점
 *   보통이다는 양쪽에 0점
 *   그렇다는 agree 타입에 1점
 *   매우 그렇다는 agree 타입에 2점
 *
 * 예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
 * 매우 아니다라고 답하면 E 타입에 2점
 * 아니다라고 답하면 E 타입에 1점
 * 보통이다라고 답하면 양쪽에 0점
 * 그렇다라고 답하면 I 타입에 1점
 * 매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.
 *
 * 자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.
 *   E == I: E
 *   S == N: N
 *   F == T: F
 *   P == J: P
 * 따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.
 *
 * 입력값에 오류는 없다고 가정합니다.
 *
 * 필요하다면 questions 변수의 내용을 임의로 바꾸셔도 괜찮습니다.
 *
 * 언어는 자바스크립트나 타입스크립트 모두 무방합니다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var questions = [
    {
        disagree: "E",
        agree: "I",
        text: "\uB2E4\uC774\uC5B4\uD2B8\uB294 \uC8FC\uBCC0\uC778\uC758 \uC2DC\uC120\uBCF4\uB2E4\uB294 \uC790\uAE30\uB9CC\uC871\uC744 \uC704\uD574 \uD558\uB294 \uAC70\uB77C\uACE0 \uC0DD\uAC01\uD55C\uB2E4.",
    },
    {
        disagree: "S",
        agree: "N",
        text: "\uB2E4\uC774\uC5B4\uD2B8\uC5D0 \uC131\uACF5\uD55C \uBBF8\uB798\uC758 \uB0B4 \uBAA8\uC2B5\uC744 \uC0C1\uC0C1\uD574\uBCF4\uBA74 \uB3D9\uAE30\uBD80\uC5EC\uAC00 \uB41C\uB2E4.",
    },
    {
        disagree: "T",
        agree: "F",
        text: "\uC0B4\uCA98\uB2E4\uACE0 \uACE0\uBBFC\uD558\uB294 \uCE5C\uAD6C\uB4E4\uC744 \uBCF4\uBA74 \uB098\uB9CC \uADF8\uB7F0 \uAC8C \uC544\uB2C8\uAD6C\uB098 \uC2F6\uC5B4 \uC704\uB85C\uAC00 \uB41C\uB2E4.",
    },
    {
        disagree: "J",
        agree: "P",
        text: "\uB2E4\uC774\uC5B4\uD2B8 \uBC29\uBC95\uC744 \uACE0\uB97C \uB54C \uC120\uD0DD\uC9C0\uAC00 \uB2E4\uC591\uD55C \uD3B8\uC774 \uC88B\uB2E4.",
    },
    {
        disagree: "E",
        agree: "I",
        text: "\uC0AC\uB78C\uC774 \uBD90\uBE44\uB294 \uB9DB\uC9D1\uC5D0 \uAC00\uB294 \uAC83\uBCF4\uB2E4 \uC9D1\uC5D0\uC11C \uBC30\uB2EC \uC74C\uC2DD\uC744 \uC2DC\uCF1C\uBA39\uB294 \uAC8C \uC88B\uB2E4.",
    },
    {
        disagree: "S",
        agree: "N",
        text: "\uB2E4\uC774\uC5B4\uD2B8\uB97C \uD560 \uB54C \uC138\uC138\uD55C \uC2DD\uB2E8 \uACC4\uD68D\uC740 \uBCC4\uB85C \uC911\uC694\uD558\uC9C0 \uC54A\uB2E4\uACE0 \uC0DD\uAC01\uD55C\uB2E4.",
    },
    {
        disagree: "T",
        agree: "F",
        text: "\uB2E4\uC774\uC5B4\uD2B8 \uC911\uC774\uC9C0\uB9CC \uC9C0\uC778\uC774 \uC74C\uC2DD\uC744 \uAD8C\uD558\uBA74 \uBBF8\uC548\uD55C \uB9C8\uC74C\uC5D0 \uAC70\uC808\uD558\uAE30\uAC00 \uC5B4\uB835\uB2E4.",
    },
    {
        disagree: "J",
        agree: "P",
        text: "\uADF8\uB54C\uADF8\uB54C \uC989\uD765\uC801\uC73C\uB85C \uB04C\uB9AC\uB294 \uBA54\uB274\uB97C \uC120\uD0DD\uD574\uC11C \uC2DD\uC0AC\uD558\uB294 \uAC8C \uC88B\uB2E4.",
    },
];
var userResponses = [
    "매우 아니다",
    "보통이다",
    "매우 아니다",
    "보통이다",
    "보통이다",
    "메우 그렇다",
    "보통이다",
    "메우 그렇다",
];
function findMBTI(responses) {
    var scores = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    };
    questions.forEach(function (question, index) {
        var response = responses[index];
        if (response === "매우 아니다")
            scores[question.disagree] += 2;
        else if (response === "아니다")
            scores[question.disagree] += 1;
        else if (response === "보통이다")
            return;
        else if (response === "그렇다")
            scores[question.agree] += 1;
        else if (response === "메우 그렇다")
            scores[question.agree] += 2;
    });
    var result = [
        scores["E"] >= scores["I"] ? "E" : "I",
        scores["S"] >= scores["N"] ? "N" : "S",
        scores["F"] >= scores["T"] ? "F" : "T",
        scores["P"] >= scores["J"] ? "P" : "J",
    ];
    return result.join("");
}
var mbtiResult = findMBTI(userResponses);
console.log("MBTI \uACB0\uACFC: ".concat(mbtiResult));
