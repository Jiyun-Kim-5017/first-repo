function solution(x) {
  var answer = true;
  var arr = String(x).split("");

  var div = 0;
  for (let i = 0; i < arr.length; i++) {
    div += +arr[i];
  }

  answer = x % div == 0;

  return answer;
}

//리팩토링
function solution(x) {
  const y = String(x)
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  return x % y === 0;
}
