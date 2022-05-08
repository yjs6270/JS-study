function solution(scores) {
	let totalGroup = [];
	let answer = [];
	let total;
	let total2;
	let total3;

	for (let i = 0; i < scores.length; i++) {
  	total = scores[i][0];
  	total2 = scores[i][1];
  	total3 = total + total2;
  	totalGroup.push(total3);
  }

  for (let j = 0; j < totalGroup.length; j++) {
  	let rank = 1;

  	for (let k = 0; k < totalGroup.length; k++) {
  		if (totalGroup[j] < totalGroup[k]) {
      	rank++;
      } else if (totalGroup[j] == totalGroup[k]){
      	if (total > total2) {
        	if (scores[j][0] < scores[k][0]) {
          	rank++;
          }
        } else if (total < total2) {
        	if (scores[j][1] < scores[k][1]) {
          	rank++;
          }
        } else if (total == total2) {
        	if (j > k ){
          	rank++;
          }
        }
      }
  	}
   }
  answer.push(rank);

  for (let l = 0; l < answer.length; l++) {
  	for (let m = 0; m < answer.length; m++) {
    	if (answer[l] == answer[m]) {
      	if (l > m) {

        } else if (l < m) {
        	answer[m] += 1;
        }
      }
    }
  }
 	return answer;
}