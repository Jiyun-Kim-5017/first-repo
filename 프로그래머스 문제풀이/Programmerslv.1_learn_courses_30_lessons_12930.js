function solution(s) {
  var arr = s.split(" ").map((x) => x.split(""));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 != 0) {
        arr[i][j] = arr[i][j].toLowerCase();
      } else {
        arr[i][j] = arr[i][j].toUpperCase();
      }
    }
  }

  return arr.map((x) => x.join("")).join(" ");
}

//forEach와 삼항연산자
function solution(s) {
  var answer = "";
  var arr = s.split(" ").map((x) => x.split(""));

  arr.forEach((x) => {
    x.forEach((element, idx) => {
      x[idx] = idx % 2 != 0 ? x[idx].toLowerCase() : x[idx].toUpperCase();
    });
  });

  return arr.map((x) => x.join("")).join(" ");
}
