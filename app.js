const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const intent = req.body.queryResult.intent.displayName;

  if (intent === 'BackToPreviousQuestionIntent') {
    // 「前の質問に戻る」に対する処理を実装

    // 例: 前の質問のContextを復元する
    const context = {
      name: 'previousQuestionContext',
      lifespanCount: 1
    };

    const response = {
      fulfillmentText: '前の質問に戻ります。',
      outputContexts: [context]
    };

    res.json(response);
  } else {
    // その他のIntentに対するデフォルトの処理
    res.json({ fulfillmentText: '処理が完了しました' });
  }
});

app.listen(port, () => {
  console.log(`Webhook listening on port ${port}`);
});
