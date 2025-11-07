let player1Time = 102
let player2Time = 107


function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

let runner1Time = 206
let runner2Time = 215

function getRunnersRaceTime() {
  if (runner1Time < runner2Time) {
    return runner1Time
  } else if (runner2Time < runner1Time) {
    return runner2Time
  } else {
    return runner1Time
  }
}

let bestRunnerTime = getRunnersRaceTime()
console.log(bestRunnerTime)