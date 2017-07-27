const express = require('express');

const app = express();

const port = process.env.PORT || 5003;

app.use(express.static(path.resolve(__dirname, '/public')));

app.listen(port, function(){
  console.log('listening on port ', port);
});
