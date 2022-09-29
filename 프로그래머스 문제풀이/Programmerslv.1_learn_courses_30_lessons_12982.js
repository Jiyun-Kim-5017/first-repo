function solution(d, budget) {
  let sum = 0;
  d.sort((a, b) => a - b);
  
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum === budget) {
      return i + 1;
    } else if (sum > budget) {
      return i;
    }
  };
  return d.length;
};


//다른 사람 풀이
function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function(val) {
    money += val;
    if (money <= budget) {
      answer++;    
    }
  });
  return answer;
};