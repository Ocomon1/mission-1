const express = require('express');
const calculateRiskRating = require('./claimHistoryToRiskRating');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'");
  next();
});

app.post('/api/risk-rating', (req, res) => {
  const { claim_history } = req.body;

  if (!claim_history) {
    return res.status(400).json({ error: 'Claim history is required.' });
  }

  const riskRating = calculateRiskRating(claim_history);

  return res.json({ risk_rating: riskRating });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
