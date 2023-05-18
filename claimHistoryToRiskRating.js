function claimHistoryToRiskRating(claimHistory) {
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  let riskRating = 0;
  for (const keyword of keywords) {
    const count = (claimHistory.match(new RegExp(keyword, "gi")) || []).length;
    riskRating += count;
  }
  return riskRating;
}

module.exports = claimHistoryToRiskRating;
