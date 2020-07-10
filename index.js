// Move the mouse across the screen as a sine wave.

var express = require('express');
var app = express();
var Server = require('http').Server;
var server = new Server(app);
var robot = require('robotjs');

server.listen(8080);

app.get('/keyStroke', function (req, res) {
  robot.keyTap('b', ['control']);

  res.send('bo');
});

// robot.keyToggle('tab', 'down', ['alt']);
// robot.typeStringDelayed('moshe', 000)
// robot.typeString('moshe');
// Speed up the mouse.
