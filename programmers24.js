function solution(n) {
    var answer = [];
    var a = n.toString().split('').reverse();
    for (var i = 0; i < a.length; i++) {
        answer.push(Number(a[i]));
    }

    return answer;
}