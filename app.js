let express = require('express');
let cors = require('cors');
let app = express();
let port = 9000;

app.use(cors());

app.get('/ping', (req,res) => {
    res.send({
        message: 'Hello, Amit!'
    });
});
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});