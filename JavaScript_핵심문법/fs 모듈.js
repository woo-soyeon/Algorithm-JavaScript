// readline 모듈보다는 fs를 이용해 파일 전체를 읽어들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");

console.log(input);
