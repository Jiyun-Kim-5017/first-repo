function solution(n) {
  var answer = 0;

  let i = 0;
  while ((i * i) <= n) {
    answer = (n == (i ** 2)) ? (i + 1) ** 2 : -1;
    i++;
  }
  return answer;
}


//다른 사람 풀이
function solution(n) {
  switch(n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return -1;
  }
}