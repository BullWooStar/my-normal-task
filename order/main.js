"use strict";
/**
 * selected 배열에 포함된 data 배열의 원소들을 왼쪽으로 한 칸씩 옴기는 콘솔 프로그램을 작성해주세요.
 *
 * 예) data = [1, 2, 3], selected = [1],       data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2],       data' = [2, 1, 3]
 * 예) data = [1, 2, 3], selected = [3],       data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [1, 2],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2, 1],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [1, 3],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [3, 1],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [2, 3],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [3, 2],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [1, 2, 3], data' = [1, 2, 3]
 *
 * 입력값에 오류는 없다고 가정합니다.
 *
 * selected는 data의 부분집합 입니다.
 *
 * 언어는 자바스크립트나 타입스크립트 모두 무방합니다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveSelectedItemsLeft = moveSelectedItemsLeft;
function moveSelectedItemsLeft(data, selected) {
    var selectedIndexes = selected.map(function (value) { return data.indexOf(value); });
    selectedIndexes.forEach(function (index) {
        if (index > 0) {
            var removed = data.splice(index, 1)[0];
            data.splice(index - 1, 0, removed);
        }
    });
    return data;
}
var data = [1, 2, 3, 4, 5];
var selected = [1, 3, 5];
var result = moveSelectedItemsLeft(data, selected);
console.log("result is: ".concat(result));
