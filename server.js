// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('logger');
const fs =require('fs');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./appserver/routes/api');

const app = express();

var request = require('request');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

const proxiedURL = "http://localhost:6002";


// http://tattoocoder.com/angular2-giving-your-cli-server/

// app.use(function(req, res, next){
//     // if the request is not html then move along
//     var accept = req.accepts('html', 'json', 'xml');
//     if(accept !== 'html'){
//         return next();
//     }
//
//     // if the request has a '.' assume that it's for a file, move along
//     var ext = path.extname(req.path);
//     if (ext !== ''){
//         return next();
//     }
//     fs.createReadStream(staticRoot + 'index.html').pipe(res);
// });



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log(req.path);
  if (req.path.startsWith('/uploads')) {
    var url = proxiedURL + "/uploads/" + req.params.id;
    //logger.info('/fileThumbnail going to url', url);
    url=proxiedURL+req.path;
    console.log(url);

    request.get(url).pipe(res);
  } else {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  }
});


app.get('/uploads/:id', function(req, res) {
  //console.log(req.params.id);

  var url = proxiedURL + "/uploads/" + req.params.id;
  console.log(url);
  //logger.info('/fileThumbnail going to url', url);
  request.get(url).pipe(res);
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
