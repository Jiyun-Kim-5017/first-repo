function solution(s) {
  var arr = s
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}
