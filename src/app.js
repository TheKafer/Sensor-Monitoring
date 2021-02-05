const express = require('express');
const app = express();
var routes = require('./routes/routes-save-data')(app); 

app.set('appName', 'Sensor Monitoring');
app.set('port', 8080);

app.use(express.static('public'));

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port'        )}`);
});
