var Engine = require('ql.io-engine');
var engine = new Engine({
    connection: 'close',
    tables: __dirname + '/tables'
});

var script = [
  "select",
  "g.lat as lat, g.lng as lng, u.location as location, u.display_name as name, u.reputation as reputation",
  "from",
  "users as u, geocoder as g",
  "where",
  "u.id in (11543, 324584, 3715) and g.address = u.location;"
].join("\n");

engine.execute(script, function (emitter) {
    emitter.on('end', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res.body);
        }
    });
});
