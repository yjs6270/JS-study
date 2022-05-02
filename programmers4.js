function solution(phone_number) {
    var answer = '';
    answer += "*".repeat(phone_number.length-4);
    answer += phone_number.substr(-4,4);

    return answer;
}