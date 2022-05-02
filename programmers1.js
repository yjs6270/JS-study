function solution(s) {
    var answer = '';

    if (s.length % 2 == 1) {
        let middle = (s.length - 1 ) / 2;
        answer = s.substr(middle, 1);
    } else {
    	let middle = (s.length) / 2;
        answer = s.substr(middle - 1, 2);
    }

    return answer;
}