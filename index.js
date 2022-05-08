const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Listening on port: '+ port);
})

//MiddleWare:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client')))

//GET requests:
app.get('/', (request, response) => {
  response.setHeader('content-type', 'text/html')
  fs.createReadStream(__dirname + '/client/index.html').pipe(response);
})

//POST requests:
app.post('/test', (request, response) => {
  let charArray = request.body.string_to_cut.split('');
  let choppedStr = charArray.filter( (char, i ) => (i + 1) % 3 === 0).join('');
  let result = {
    return_string: choppedStr
   }
   response.send(JSON.stringify(result))
});
//Catch all for bad paths.
app.use((req, res) => res.redirect('/'))