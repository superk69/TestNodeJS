var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cors = require('cors');
var async = require('async');
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/image'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/image', function(request, response) {
  response.render(request);
});

app.post('/message', (req, res) => {
  var text = req.body.events[0].message.text;
  var sender = req.body.events[0].source.userId;

    async.waterfall([
            function(callback) {
            	request({url: 'http://api.wunderground.com/api/e1cb835416fecd99/conditions/q/TH/Ubon_Ratchathani.json', json:true}, function(err, res, json){
    					if (err) {throw err;}
              	callback(json['current_observation']);
    				  });
			     },
		],
      function(jsonData) {
      	var headers = {
         	'Content-Type': 'application/json',
           	'Authorization': 'Bearer {m+oPcPa0zL7NOerEuZNiLDbJpF8H/PvPgYNipLAk9u+wOPPztqwUJs985y3lLMswe8NSDzfMB+bwkv+TR41l99n4vqUJSi3YL2FQ7lxxOjLgNjmBuGYgu2UMsnGutcKcYLwcoXO1qm5XK6M35F53vQdB04t89/1O/w1cDnyilFU=}'
       	};
        	var data = {
       		to: req.body.events[0].source.userId,
            messages: [{
             	          type: 'text',
                        text: "City: "+ JSON.stringify(jsonData.display_location.full) +
                              "\nTime: "+JSON.stringify(jsonData.local_time_rfc822) +
                              "\nTemperature: "+ JSON.stringify(jsonData.temperature_string) +
                              "\nWeather: "+JSON.stringify(jsonData.weather) +
                              "\nHumidity: "+JSON.stringify(jsonData.relative_humidity)
                      }/*,{
                        type: "image",
                        originalContentUrl: "https://secret-hamlet-57052.herokuapp.co/image/LINE_logo.png",
                        previewImageUrl: "https://secret-hamlet-57052.herokuapp.com/image/LINE_logo.png"
                      }*/]
         };
        	var options = {
       		url: 'https://api.line.me/v2/bot/message/push',
           	method: 'POST',
        		headers: headers,
           	json: true,
            body: data
        	};

         request.post(options, function(error, response, body) {
           	if (!error && response.statusCode == 200) {
     		      console.log(body);
        		} else {
       		    console.log('error: ' + JSON.stringify(response));
           	}
   		});
    	}
	);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
