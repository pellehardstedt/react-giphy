const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(3001, () => console.log('Listening on port 3001!'));
