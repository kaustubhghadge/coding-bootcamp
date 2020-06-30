const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(cors())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', urlencodedParser, function (req, res) {

    let email = req.body.email;
    let password = req.body.password;

    if(email === 'test@test.com'&&password === 'password'){
        res.send('User with ' + email+' logged in successfully');
    }
    else if(email === 'test@test.com'&&password !='password'){
        res.send('Wrong password');
    }
    else{
        res.send('User account for ' + email+' does not exist')
    }
    
  })

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))