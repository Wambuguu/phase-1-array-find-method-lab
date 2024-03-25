// code your solution here
function superbowlWin(record) {
  for (const entry of record) {
    if (entry.result === "W") {
      return entry.year; 
    }
  }
}
