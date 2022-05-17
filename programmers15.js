function solution(arr) {
    var answer = 0;
    var a = 0
    for (let i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    answer = a / arr.length;
    return answer;
}