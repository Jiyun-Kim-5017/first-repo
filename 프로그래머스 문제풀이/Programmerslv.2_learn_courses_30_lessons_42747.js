//프로그래머스 lv.2 H-index
//https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  //큰수부터 차례로 정렬
  citations.sort((a, b) => b - a);

  //모든 원소가 같은 수인 배열을 걸러줌
  let newcit = [...new Set(citations)];
  if (newcit.length === 1) {
    if (newcit[0] === 0) {
      return 0;
    } else if (newcit[0] > citations.length) {
      return citations.length;
    } else if (newcit[0] < citations.length) {
      return newcit[0];
    }
  }

  //논문의 개수를 세어 주면서 인용된 횟수(배열의 원소)와 비교
  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    count++;
    if (count === citations[i]) {
      return count;
    } else if (count < citations[i] && count >= citations[i + 1]) {
      return count;
    }
  }

  return citations.length;
}

/*생각보다 간단한 문제인데 너무 어렵게 푼 거 같아서 속상하다. 규칙만 잘 파악하면 한 두 줄로 끝날 수도 있었다.
논문의 개수를 카운트 업하면서 개수는 증가
인용된 횟수는 뒤로갈수록 감소하니까
둘의 숫자 크기가 역전되는 곳에서 카운트 업한 수를 출력해주면 되는 규칙이다.
테스트 케이스를 13가지나 추가하면서 풀었다. 풀어서 기쁘지만 어렵게 풀어서 슬프다. */

//다른 사람 풀이
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  var i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
