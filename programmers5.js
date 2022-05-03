function solution(numbers) {
    var answer = [];
    numbers.sort();
    let plusnumbers = [];

    for (let i = 0; i < numbers.length - 1; i++) {
    	for (let j = i + 1; j < numbers.length; j++) {
      	if (i != j) {
      		plusnumbers.push(numbers[i] + numbers[j]);
        }
      }
    }

    let set = new Set(plusnumbers);
    answer = [...set];
    answer.sort((a,b)=>a-b);

    return answer;
}