const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(3001, () => console.log('Listening on port 3000!'));
