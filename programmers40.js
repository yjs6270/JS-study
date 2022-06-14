function solution(brown, yellow) {
  var answer = []

  for (let i = yellow; i >= 1; i--) {
    if (yellow % i === 0) {
      let yellow_H = i
      let yellow_V = yellow / i

      if (brown === 2 * yellow_H + 2 * yellow_V + 4) {
        answer = [yellow_H + 2, yellow_V + 2]
        break
      }
    }
  }
  return answer
}