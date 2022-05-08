function solution (salaries, days) {
    var answer = 0;

    for (let i = 0; i < salaries.length; i++) {
        let parse = parseInt(days / salaries[i][0]) * salaries[i][1];
        let parse2 = (days % salaries[i][0]) * salaries[i][1];

        if (parse2 != 0 || parse == 0) {
            parse += salaries[i][1];
        }

        answer += parse;
    }
    return answer;
}