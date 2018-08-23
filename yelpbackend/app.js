var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, function(){
    console.log(`Hey man!!!`);
})

// app.use('/api/test', function(req, res){
//     res.send(`This is a test response.  Hooray! ${req.protocol}`);
// })

app.use('/api/test', function(req, res){
    // req.body.test = 'this is a test';
    // req.header('access-control-allow-origin', '*');
    // req.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    // req.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // res.send(req.header);
    app.get(`https://api.yelp.com/v3/businesses/search?location=indiana`, function(req, res){
    req.header('Authorization', 'Bearer a5ndE70LYDfpEZ0up_0voeIxAmw0dxVF0rx3s3BNbZIUUMl-aTXIPEa-02NdRJhckBU7Y3JLiF-C2s9FM1XmzghF93ZS5fY1FJvJterEanZzseRltwzxSc9wHJl9W3Yx')
    res.send('this may have worked?');
})
})

app.get(`https://api.yelp.com/v3/businesses/search?location=indiana`, function(req, res){
    req.header('Authorization', 'Bearer a5ndE70LYDfpEZ0up_0voeIxAmw0dxVF0rx3s3BNbZIUUMl-aTXIPEa-02NdRJhckBU7Y3JLiF-C2s9FM1XmzghF93ZS5fY1FJvJterEanZzseRltwzxSc9wHJl9W3Yx')
    res.send('this may have worked?');
})