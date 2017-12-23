const express = require('express');
const app = express();

app.use(express.static('/client/build'));

app.get('*', (req, res) => {
  res.sendFile('/client/build/index.html'));
});


app.listen(3001, () => console.log('Listening on port 3001!'));
