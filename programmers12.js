function solution(price, money, count) {
    var answer = 0;
    let result = 0;

    for (let i = 1; i <= count; i++) {
        result += price * i
    }

    if (money > result) {
        answer = 0;
    } else {
        answer = result - money;
    }

    return answer;
}