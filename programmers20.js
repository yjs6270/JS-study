function solution(s) {
    var answer = '';
    var ans = [];
    for (var i = 0; i < s.length; i++) {
        ans.push(s[i]);
        ans.sort().reverse();
    }
    for (var j = 0; j < s.length; j++) {
        answer += ans[j];
    }
    return answer;
}