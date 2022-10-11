function solution(s) {
  let arr = s.split(' ').map(x => x.split(''));
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = (j === 0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
      }
  };
  
  return arr.map(x => x.join('')).join(' ');
}

// 리팩토링 > 런타임 에러
// function solution(s) {
//     return s.split(' ').map(x => x[0].toUpperCase() + x.slice(1, x.length).toLowerCase()).join(' ');
// }

// 다른 사람 풀이
// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }