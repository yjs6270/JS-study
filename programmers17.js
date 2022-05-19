function solution(n) {
    var answer = 0;
    var a = Math.sqrt(n);

    if (Number.isInteger(a)) {
        answer = (a + 1) * (a + 1);
    } else {
        answer = -1;
    }
    return answer;
}