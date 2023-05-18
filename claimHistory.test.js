const calculateRiskRating = require('./claimHistoryToRiskRating');

describe('claimHistoryToRiskRating', () => {
  test('Empty claim history should return risk rating 1', () => {
    const claimHistory = '';
    const riskRating = calculateRiskRating(claimHistory);
    expect(riskRating).toBe(1);
  });

  test('Claim history with multiple keywords should return corresponding risk rating', () => {
    const claimHistory = "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.";
    const riskRating = calculateRiskRating(claimHistory);
    expect(riskRating).toBe(3);
  });

  
});