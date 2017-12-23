const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/build'));

app.listen(3001, () => console.log('Listening on port 3000!'));