const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const qna = require('@tensorflow-models/distilbert-multilingual-nli-stsb-quora-ranking');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/qna', async (req, res) => {
  const { question, text } = req.query;

  try {
    const model = await qna.load();
    const answers = await model.findAnswers(question, text);

    res.json(answers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to find answers.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
