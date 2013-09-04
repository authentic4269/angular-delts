var http = require('http');
var config = require('./node_modules/config');
var mysql = require('mysql').createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
});
var url = require('url');

function brothers(res)
{
  mysql.connect(function(err) {
  });
  mysql.query('use _deltdb');
  mysql.query('SELECT * FROM brothers', function(err, rows, fields) {
    res.end(JSON.stringify(rows));
  });
}

function cordelts(res)
{
  mysql.connect(function(err) {
  });
  mysql.query('use _deltdb');
  mysql.query('SELECT * FROM cordelts ORDER BY published', function(err, rows, fields) {
    res.end(JSON.stringify(rows));
  });
}

function gallery(res)
{
    var callback = function(r) {
      return function(response) {
        var str = '';
        response.on('data', function (chunk) {
         str += chunk;
        });
        response.on('end', function() {
          r.end(JSON.stringify(str));
        });
      }
    }
    var album_call = function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });
      response.on('end', function() {
        var i;
        var dat = [];
        var par = JSON.parse(str);
        for (i = 0; i < par.albums.data.length; i++)
        {
          dat.push(par.albums.data[i].id);
        }
        getPhotos(dat, res);
      });
    }
    var options = {
      host: 'graph.facebook.com',
      path: '/cornelldelts?fields=albums'
    };
    http.get(options, album_call).end();
}

function getPhotos(dat, res)
{
  var i, num_no_return = dat.length;
  var images = [];
  var photo_call = function(response)
  {
    var str = '';
    response.on('data', function(chunk) {
      str += chunk;
    });
    response.on('end', function() {
      var par = JSON.parse(str);
      var j;
      for (j = 0; j < par.data[0].images.length; j++)
        images.push(par.data[0].images[j].source);
      num_no_return -= 1;
      if (num_no_return == 0)
      {
        uniqueArray = images.filter(function(elem, pos) {
              return images.indexOf(elem) == pos;
        })
        res.end(JSON.stringify(uniqueArray));
      }
    });
  }
  for (i = 0; i < dat.length; i++)
  {
    var options = {
      host: 'graph.facebook.com',
      path: '/' + dat[i] + '/photos'
    }
    http.get(options, photo_call).end();
  }
}

http.createServer(function (req, res) {
    var _get = url.parse(req.url, true).query;
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/brothers')
    {
      brothers(res);
    }
    else if (pathname == '/gallery')
    {
      gallery(res);
    }
    else if (pathname == '/cordelts')
    {
      cordelts(res);
    }
    else
    {
      res.end('cannot process');
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
