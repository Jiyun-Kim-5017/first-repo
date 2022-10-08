function solution(phone_number) {
  var answer = "";

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }

  for (let i = 4; i > 0; i--) {
    answer += phone_number[phone_number.length - i];
  }

  return answer;
}

//리팩토링
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
