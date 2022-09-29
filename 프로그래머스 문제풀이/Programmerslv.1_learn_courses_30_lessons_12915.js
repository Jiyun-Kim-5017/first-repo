function solution(strings, n) {

  strings.sort().sort((a, b) => {
    if (a[n] >= b[n]) {
      return 1;
    } else {
      return -1;
    }
  });
  
  return strings;
}

  //리팩토링
function solution(strings, n) {

  strings.sort().sort((a, b) => {
    return (a[n] >= b[n]) ? 1 : -1;
  });
    
  return strings;
}
